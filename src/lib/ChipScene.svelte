<script lang="ts">
    import { onMount } from 'svelte';
    let host: HTMLDivElement;
    let paused = $state(false);
    let failed = $state(false);
    let ready = $state(false);
    let setPaused = (_value: boolean) => {};

    onMount(() => {
        let disposed = false;
        let cleanup = () => {};
        async function init() {
            const T = await import('three');
            const { mergeGeometries } = await import('three/addons/utils/BufferGeometryUtils.js');
            if (disposed) return;
            const renderer = new T.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
            renderer.setClearColor(0x000000, 0);
            renderer.domElement.setAttribute('aria-hidden', 'true');
            host.appendChild(renderer.domElement);
            const scene = new T.Scene();
            const camera = new T.OrthographicCamera(-6, 6, 4, -4, 0.1, 100);
            camera.position.set(5, 8, 7);
            camera.lookAt(0, 0, 0);
            scene.add(new T.HemisphereLight(0xffffff, 0x858073, 2.8));
            const light = new T.DirectionalLight(0xffffff, 3);
            light.position.set(-3, 8, 5);
            scene.add(light);
            const chip = new T.Group();
            scene.add(chip);
            const materials: InstanceType<typeof T.Material>[] = [];
            const geometries: InstanceType<typeof T.BufferGeometry>[] = [];
            const material = (color: number, metalness = 0.3) => {
                const m = new T.MeshStandardMaterial({ color, metalness, roughness: 0.5 });
                materials.push(m);
                return m;
            };
            const ceramic = material(0xcac9bb);
            const silicon = material(0x384848);
            const metal = material(0xc4b58d, 0.65);
            const memory = material(0x758e87);
            const adc = material(0x9dafa9);
            const logic = material(0xb9a58a);
            const lineMaterial = new T.LineBasicMaterial({ color: 0x96876a, transparent: true, opacity: 0.65 });
            materials.push(lineMaterial);
            const batches = new Map<InstanceType<typeof T.Material>, InstanceType<typeof T.BoxGeometry>[]>();
            function box(w: number, h: number, d: number, x: number, y: number, z: number, mat: InstanceType<typeof T.Material>) {
                const g = new T.BoxGeometry(w, h, d);
                geometries.push(g);
                g.translate(x, y, z);
                if (!batches.has(mat)) batches.set(mat, []);
                batches.get(mat)!.push(g);
            }
            function wire(points: number[][]) {
                const g = new T.BufferGeometry().setFromPoints(points.map(p => new T.Vector3(...p)));
                geometries.push(g);
                chip.add(new T.Line(g, lineMaterial));
            }
            // Conceptual floorplan inspired by Kerneltron Fig. 3(b), not a physical replica.
            box(5.1, 0.15, 4.3, 0, -0.2, 0, ceramic);
            box(4.05, 0.19, 3.25, 0, -0.02, 0, silicon);
            box(2.25, 0.035, 2.56, -0.62, 0.1, 0, memory);
            for (let row = 0; row < 24; row++) {
                for (let col = 0; col < 20; col++) {
                    box(0.091, 0.016, 0.083, -1.67 + col * 0.11, 0.13, -1.18 + row * 0.102, (row + col) % 4 === 0 ? adc : memory);
                }
            }
            for (let row = 0; row < 24; row++) {
                const z = -1.18 + row * 0.102;
                box(0.6, 0.05, 0.073, 0.98, 0.13, z, adc);
                box(0.24, 0.065, 0.073, 1.55, 0.14, z, logic);
                wire([[-1.7, 0.155, z], [1.7, 0.155, z]]);
                for (let j = 0; j < 5; j++) box(0.016, 0.012, 0.06, 0.75 + j * 0.11, 0.164, z, metal);
            }
            for (let col = 0; col < 20; col++) {
                const x = -1.67 + col * 0.11;
                wire([[x, 0.154, -1.3], [x, 0.154, 1.3]]);
            }
            for (const sign of [-1, 1]) {
                box(2.3, 0.045, 0.12, -0.62, 0.13, sign * 1.42, logic);
                for (let i = 0; i < 26; i++) {
                    const x = -1.85 + i * 0.148;
                    box(0.078, 0.025, 0.13, x, 0.092, sign * 1.52, metal);
                    box(0.07, 0.035, 0.25, x * 1.15, -0.1, sign * 1.96, metal);
                    wire([[x, 0.12, sign * 1.55], [x * 1.08, 0.34, sign * 1.75], [x * 1.15, -0.075, sign * 1.94]]);
                }
                for (let i = 0; i < 20; i++) {
                    const z = -1.35 + i * 0.142;
                    box(0.13, 0.025, 0.078, sign * 1.94, 0.092, z, metal);
                    box(0.24, 0.035, 0.07, sign * 2.34, -0.1, z * 1.2, metal);
                    wire([[sign * 1.98, 0.12, z], [sign * 2.16, 0.33, z * 1.1], [sign * 2.35, -0.075, z * 1.2]]);
                }
            }
            for (const [mat, parts] of batches) {
                const merged = mergeGeometries(parts);
                if (merged) {
                    geometries.push(merged);
                    chip.add(new T.Mesh(merged, mat));
                }
            }
            const pulseMat = new T.MeshBasicMaterial({ color: 0xe4bc65 });
            materials.push(pulseMat);
            const pulseGeometry = new T.SphereGeometry(0.027, 6, 4);
            geometries.push(pulseGeometry);
            const pulses = Array.from({ length: 24 }, (_, i) => {
                const mesh = new T.Mesh(pulseGeometry, pulseMat);
                mesh.position.set(-1.7, 0.19, -1.18 + i * 0.102);
                chip.add(mesh);
                return mesh;
            });
            const reduced = matchMedia('(prefers-reduced-motion: reduce)');
            paused = reduced.matches;
            let visible = true;
            let elapsed = 0;
            let last = 0;
            let frame = 0;
            let pointerX = 0;
            let pointerY = 0;
            function render(now: number) {
                frame = 0;
                if (disposed) return;
                const dt = last ? Math.min((now - last) / 1000, 0.05) : 0;
                last = now;
                if (!paused) elapsed += dt;
                chip.rotation.y = -0.13 + Math.sin(elapsed * 0.23) * 0.08 + pointerX * 0.12;
                chip.rotation.x = pointerY * 0.06;
                pulses.forEach((p, i) => { p.position.x = -1.7 + ((elapsed * 0.42 + i * 0.137) % 1) * 3.4; });
                renderer.render(scene, camera);
                if (!paused && visible && !document.hidden) frame = requestAnimationFrame(render);
            }
            function draw() { if (!frame && visible && !document.hidden) { last = 0; frame = requestAnimationFrame(render); } }
            function resize() {
                const width = host.clientWidth;
                const height = host.clientHeight;
                const aspect = width / height;
                const halfHeight = Math.max(2.7, 3.8 / aspect);
                camera.left = -halfHeight * aspect;
                camera.right = halfHeight * aspect;
                camera.top = halfHeight;
                camera.bottom = -halfHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(width, height);
                draw();
            }
            function move(e: PointerEvent) {
                if (paused || e.pointerType === 'touch') return;
                const r = host.getBoundingClientRect();
                pointerX = (e.clientX - r.left) / r.width - 0.5;
                pointerY = (e.clientY - r.top) / r.height - 0.5;
                draw();
            }
            function leave() { pointerX = 0; pointerY = 0; draw(); }
            function preference() { paused = reduced.matches; draw(); }
            const observer = new ResizeObserver(resize);
            observer.observe(host);
            const intersection = new IntersectionObserver(entries => { visible = entries[0].isIntersecting; draw(); });
            intersection.observe(host);
            host.addEventListener('pointermove', move);
            host.addEventListener('pointerleave', leave);
            document.addEventListener('visibilitychange', draw);
            reduced.addEventListener('change', preference);
            setPaused = value => { paused = value; draw(); };
            resize();
            ready = true;
            cleanup = () => {
                cancelAnimationFrame(frame);
                observer.disconnect();
                intersection.disconnect();
                host.removeEventListener('pointermove', move);
                host.removeEventListener('pointerleave', leave);
                document.removeEventListener('visibilitychange', draw);
                reduced.removeEventListener('change', preference);
                geometries.forEach(g => g.dispose());
                materials.forEach(m => m.dispose());
                renderer.dispose();
                renderer.domElement.remove();
            };
        }
        init().catch(() => { if (!disposed) failed = true; });
        return () => { disposed = true; cleanup(); };
    });
</script>

<div class="chip-banner">
    <div class="scene" bind:this={host} role="img" aria-label="Conceptual AI accelerator in an angled 3D view: dense compute and memory array, ADC bank, counters, gold bond wires, and animated signal flow.">
        {#if failed}<span class="fallback">Compute array / Memory / Interconnects</span>{/if}
    </div>
    <div class="caption">
        {#if ready}<button onclick={() => setPaused(!paused)} aria-label={paused ? 'Play chip animation' : 'Pause chip animation'}>{paused ? 'Play' : 'Pause'}</button>{/if}
    </div>
</div>

<style>
    .chip-banner { position: relative; margin: 0 16px; border-block: 1px solid #e4e0d6; }
    .scene { height: 280px; width: 100%; background-image: radial-gradient(#d4cdbc80 0.6px, transparent 0.6px); background-size: 12px 12px; }
    .scene :global(canvas) { display: block; width: 100%; height: 100%; }
    .caption { display: flex; align-items: center; justify-content: flex-end; gap: 12px; padding: 0 16px 12px; font-size: 11px; color: #70665e; }
    button { font: inherit; color: inherit; background: transparent; border: 0; padding: 8px; cursor: pointer; min-width: 44px; min-height: 32px; }
    button:focus-visible { outline: 2px solid #70665e; outline-offset: 2px; }
    .fallback { display: grid; height: 100%; place-content: center; color: #70665e; font-size: 14px; }
    @media (max-width: 560px) { .chip-banner { margin-inline: 4px; } .scene { height: 230px; } }
    @media print { .chip-banner { display: none; } }
</style>

<script lang="ts">
	const profile = {
		name: 'Mohammed Batis',
		title: 'MSc Computer Science and Technology',
		location: 'Wenzhou University, Wenzhou, China',
		email: 'Batis2019@gmail.com',
		phone: '(+86) 15658563280',
		cv: './myCV03.pdf',
		github: 'https://github.com/batis1',
		scholar: 'https://scholar.google.com/citations?user=7lz2lbUAAAAJ&hl=en',
		image: './profile_picture.jpg'
	};

	const publications = [
		{
			year: '2024',
			title: 'ACGRIME: Adaptive Chaotic Gaussian RIME Optimizer for Global Optimization and Feature Selection',
			venue: 'Cluster Computing Journal',
			status: 'Published',
			link: 'https://link.springer.com/article/10.1007/s10586-024-04716-9'
		},
		{
			year: '2024',
			title: 'Prey Capture Enhanced Harris Hawks Optimizer for Wrapper-based Feature Selection in High-Dimensional Medical Data',
			venue: 'Computer Methods and Programs in Biomedicine',
			status: 'Published',
			link: 'https://www.sciencedirect.com/science/article/pii/S0169260726000052'
		},
		{
			year: '2024',
			title: 'Random differential RIME optimization for multi-threshold segmentation in dermoscopic skin cancer images',
			venue: 'Biomedical Signal Processing and Control',
			status: 'Under second revision'
		},
		{
			year: '2024',
			title: 'An enhanced bat optimizer with elite selection and crisscross strategies for multi-threshold image segmentation of lupus nephritis',
			venue: 'International Journal of Computational Intelligence Systems',
			status: 'Under review'
		}
	];

	const education = [
		{
			period: '2022 - 2025',
			degree: 'MSc Computer Science and Technology',
			school: 'Wenzhou University',
			detail:
				'Thesis: Research on the Improved RIME Optimization Algorithm and Its Application for Wrapper-based Feature Selection in Biomedical Data'
		},
		{
			period: '2018 - 2022',
			degree: 'BSc Computer Science and Technology',
			school: 'Wenzhou University',
			detail: 'Thesis: Design and Implementation of a Chinese HSK Test Preparation Platform'
		},
		{
			period: '2014 - 2017',
			degree: 'Secondary School',
			school: 'Mukalla Model Secondary School',
			detail: 'Graduated with 98.63%'
		}
	];

	const achievements = [
		'Chinese Government Scholarship at Wenzhou University',
		'Excellent Graduation Design Award at Wenzhou University',
		'Zhejiang Government Scholarship at Wenzhou University',
		'Second Place in Mukalla Model Secondary School Rankings',
		'9th Best Middle School Graduate in the Province of Wadi Hadramout'
	];

	const skills = [
		'Python',
		'PyTorch',
		'React',
		'Node.js',
		'MongoDB',
		'MySQL',
		'MATLAB',
		'Git and GitHub'
	];
</script>

<svelte:head>
	<title>Mohammed Batis - Machine learning</title>
	<meta
		name="description"
		content="Academic CV website for Mohammed Batis, focused on mechanistic interpretability and trustworthy AI."
	/>
</svelte:head>

<div class="page-shell">
	<div class="ambient ambient-left"></div>
	<div class="ambient ambient-right"></div>

	<header class="topbar">
		<div class="brand">Home</div>
		<nav>
			<a href="#publications">Publications</a>
			<a href="#projects">Projects</a>
			<a href="#education">Education</a>
			<a href="#contact">Contact</a>
		</nav>
	</header>

	<main class="layout">
		<section class="hero-card">
			<div class="hero-layout">
				<div class="hero-copy">
					<h1>Reverse engineering artificial neural networks into human understandable algorithms.</h1>

					<div class="hero-visual" aria-hidden="true">
						<div class="meaning-space">
							<div class="network-stack">
								<div class="layer layer-a">
									<span class="neuron"></span>
									<span class="neuron"></span>
									<span class="neuron"></span>
									<span class="neuron"></span>
								</div>
								<div class="layer layer-b">
									<span class="neuron"></span>
									<span class="neuron"></span>
									<span class="neuron"></span>
									<span class="neuron"></span>
									<span class="neuron"></span>
								</div>
								<div class="layer layer-c">
									<span class="neuron"></span>
									<span class="neuron"></span>
									<span class="neuron"></span>
									<span class="neuron"></span>
								</div>
							</div>

							<div class="connection-web web-a"></div>
							<div class="connection-web web-b"></div>

							<div class="interpret-core">
								<div class="interpret-ring"></div>
								<div class="interpret-dot"></div>
							</div>

							<div class="flow-lane flow-lane-a"></div>
							<div class="flow-lane flow-lane-b"></div>
							<div class="flow-lane flow-lane-c"></div>

							<div class="algorithm-card">
								<div class="algorithm-chip"></div>
								<div class="rule-line rule-line-a"></div>
								<div class="rule-line rule-line-b"></div>
								<div class="rule-line rule-line-c"></div>
								<div class="rule-line rule-line-d"></div>
								<div class="algorithm-badge"></div>
							</div>
						</div>
					</div>

					<p class="lede">
						My research interests lie in mechanistic interpretability and trustworthy AI.
					</p>

					<div class="hero-actions">
						<a class="button primary" href={profile.cv} target="_blank" rel="noreferrer"
							>Download CV</a
						>
						<a class="button secondary" href={profile.github} target="_blank" rel="noreferrer">
							GitHub
						</a>
						<a class="button secondary" href={profile.scholar} target="_blank" rel="noreferrer">
							Google Scholar
						</a>
					</div>
				</div>

			</div>
		</section>

		<aside class="profile-card" id="contact">
			<img class="portrait" src={profile.image} alt={profile.name} />
			<h2>{profile.name}</h2>
			<p>{profile.title}</p>

			<ul class="contact-list">
				<li>{profile.location}</li>
				<li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
				<li>{profile.phone}</li>
			</ul>
		</aside>

		<section class="content-card" id="publications">
			<p class="section-label">Publications</p>

			<div class="timeline">
				{#each publications as publication}
					<article>
						<div class="timeline-year">{publication.year}</div>
						<div>
							<h3>
								{#if publication.link}
									<a href={publication.link} target="_blank" rel="noreferrer">{publication.title}</a>
								{:else}
									{publication.title}
								{/if}
							</h3>
							<p>{publication.venue}</p>
							<span>{publication.status}</span>
						</div>
					</article>
				{/each}
			</div>
		</section>

		<section class="content-card" id="projects">
			<p class="section-label">Projects</p>

			<article class="project-card">
				<div>
					<p class="project-period">2022 - Present</p>
					<h3>WHSK: Interactive HSK Preparation Platform</h3>
					<p>
						A gamified web platform for Chinese HSK preparation with interactive practice,
						progress tracking, and software copyright registration in China
						(2025SR0444242).
					</p>
				</div>
				<a href="https://whsk.tech/" target="_blank" rel="noreferrer">whsk.tech</a>
			</article>
		</section>

		<section class="content-card" id="education">
			<p class="section-label">Education</p>

			<div class="stack-list">
				{#each education as item}
					<article>
						<p class="stack-period">{item.period}</p>
						<h3>{item.degree}</h3>
						<p>{item.school}</p>
						<span>{item.detail}</span>
					</article>
				{/each}
			</div>
		</section>

		<section class="content-card">
			<p class="section-label">Awards and scholarships</p>

			<ul class="pill-list">
				{#each achievements as achievement}
					<li>{achievement}</li>
				{/each}
			</ul>
		</section>

		<section class="content-card">
			<p class="section-label">Skills</p>

			<ul class="pill-list compact">
				{#each skills as skill}
					<li>{skill}</li>
				{/each}
				<li>Arabic</li>
				<li>English</li>
				<li>Chinese</li>
			</ul>
		</section>
	</main>
</div>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}

	:global(body) {
		margin: 0;
		font-family: 'Manrope', sans-serif;
		color: #10231d;
		background:
			radial-gradient(circle at top left, rgba(217, 145, 71, 0.2), transparent 28rem),
			radial-gradient(circle at bottom right, rgba(25, 107, 84, 0.16), transparent 24rem),
			linear-gradient(180deg, #f6f1e8 0%, #f3efe7 45%, #efe8dc 100%);
	}

	:global(a) {
		color: inherit;
		text-decoration: none;
	}

	.page-shell {
		position: relative;
		min-height: 100vh;
		padding: 1.5rem;
		overflow: hidden;
	}

	.ambient {
		position: absolute;
		border-radius: 999px;
		filter: blur(18px);
		opacity: 0.55;
		pointer-events: none;
	}

	.ambient-left {
		top: 6rem;
		left: -4rem;
		width: 16rem;
		height: 16rem;
		background: rgba(227, 139, 52, 0.28);
	}

	.ambient-right {
		right: -5rem;
		bottom: 8rem;
		width: 18rem;
		height: 18rem;
		background: rgba(16, 83, 67, 0.2);
	}

	.topbar,
	.layout {
		position: relative;
		z-index: 1;
	}

	.topbar {
		max-width: 1180px;
		margin: 0 auto 1.5rem;
		padding: 0.9rem 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		backdrop-filter: blur(18px);
		background: rgba(255, 251, 245, 0.62);
		border: 1px solid rgba(16, 35, 29, 0.08);
		border-radius: 999px;
	}

	.brand {
		font-weight: 800;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		font-size: 0.82rem;
	}

	nav {
		display: flex;
		gap: 1.2rem;
		font-size: 0.95rem;
	}

	.layout {
		max-width: 1180px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: minmax(0, 1.65fr) minmax(280px, 0.8fr);
		gap: 1.25rem;
	}

	.hero-card,
	.profile-card,
	.content-card {
		backdrop-filter: blur(14px);
		background: rgba(255, 252, 247, 0.72);
		border: 1px solid rgba(16, 35, 29, 0.09);
		border-radius: 2rem;
		box-shadow: 0 22px 60px rgba(51, 43, 28, 0.08);
	}

	.hero-card {
		padding: 2.5rem;
		min-height: 28rem;
		display: flex;
		align-items: center;
	}

	.hero-layout {
		width: 100%;
		display: block;
	}

	.hero-copy {
		position: relative;
		z-index: 1;
		max-width: 52rem;
	}

	.hero-visual {
		position: relative;
		min-height: 28rem;
		margin: -1.4rem 0 0.6rem;
		display: grid;
		place-items: center;
		perspective: 1200px;
		z-index: 0;
	}

	.meaning-space {
		position: relative;
		width: min(100%, 52rem);
		aspect-ratio: 1.7 / 1;
		transform-style: preserve-3d;
		animation: sceneFloat 9s ease-in-out infinite;
		opacity: 0.96;
	}

	.network-stack,
	.connection-web,
	.interpret-core,
	.flow-lane,
	.algorithm-card {
		position: absolute;
		transform-style: preserve-3d;
	}

	.network-stack {
		left: 2.2rem;
		top: 3.2rem;
		width: 34%;
		height: 76%;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		align-items: center;
		z-index: 2;
	}

	.layer {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
	}

	.neuron {
		width: 0.9rem;
		height: 0.9rem;
		border-radius: 50%;
		background: radial-gradient(circle at 35% 35%, #fff6e3 0%, #dea45d 45%, #103f36 100%);
		box-shadow:
			0 0 0 8px rgba(255, 252, 247, 0.26),
			0 0 22px rgba(222, 164, 93, 0.32);
		animation: neuronPulse 3.2s ease-in-out infinite;
	}

	.layer-a .neuron:nth-child(2),
	.layer-b .neuron:nth-child(4),
	.layer-c .neuron:nth-child(1) {
		animation-delay: -0.8s;
	}

	.layer-a .neuron:nth-child(4),
	.layer-b .neuron:nth-child(2),
	.layer-c .neuron:nth-child(3) {
		animation-delay: -1.5s;
	}

	.connection-web {
		top: 4.8rem;
		left: 5.4rem;
		width: 27%;
		height: 60%;
		border-radius: 1.5rem;
		background:
			linear-gradient(26deg, transparent 16%, rgba(16, 63, 54, 0.12) 17%, transparent 18%),
			linear-gradient(-18deg, transparent 24%, rgba(16, 63, 54, 0.1) 25%, transparent 26%),
			linear-gradient(12deg, transparent 48%, rgba(222, 164, 93, 0.16) 49%, transparent 50%);
		opacity: 0.9;
	}

	.web-a {
		transform: skewY(-10deg);
	}

	.web-b {
		transform: translateX(1rem) scale(0.92);
		opacity: 0.55;
	}

	.interpret-core {
		left: 47%;
		top: 50%;
		width: 7.4rem;
		height: 7.4rem;
		transform: translate(-50%, -50%);
		display: grid;
		place-items: center;
		z-index: 3;
	}

	.interpret-ring,
	.interpret-dot {
		position: absolute;
		border-radius: 50%;
	}

	.interpret-ring {
		inset: 0;
		border: 1px solid rgba(16, 63, 54, 0.16);
		box-shadow:
			inset 0 0 18px rgba(16, 63, 54, 0.08),
			0 0 32px rgba(222, 164, 93, 0.2);
		animation: ringSpin 8s linear infinite;
	}

	.interpret-ring::before,
	.interpret-ring::after {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: 50%;
		border: 1px solid rgba(222, 164, 93, 0.24);
	}

	.interpret-ring::before {
		transform: rotateX(72deg);
	}

	.interpret-ring::after {
		transform: rotateY(72deg);
	}

	.interpret-dot {
		inset: 30%;
		background: radial-gradient(circle at 35% 35%, #fff5df 0%, #e7ab61 42%, #103f36 100%);
		box-shadow:
			0 0 0 14px rgba(16, 63, 54, 0.08),
			0 0 28px rgba(222, 164, 93, 0.32);
		animation: corePulse 3.8s ease-in-out infinite;
	}

	.flow-lane {
		left: 51%;
		width: 22%;
		height: 0.46rem;
		border-radius: 999px;
		background: linear-gradient(90deg, rgba(222, 164, 93, 0.14), rgba(16, 63, 54, 0.16));
		overflow: hidden;
	}

	.flow-lane::before {
		content: '';
		position: absolute;
		inset: 0 auto 0 -36%;
		width: 36%;
		background: linear-gradient(90deg, transparent, rgba(255, 247, 231, 0.96), transparent);
		animation: dataTravel 2.4s linear infinite;
	}

	.flow-lane-a {
		top: 36%;
	}

	.flow-lane-b {
		top: 49%;
	}

	.flow-lane-c {
		top: 62%;
	}

	.algorithm-card {
		right: 1rem;
		top: 3.6rem;
		width: 28%;
		padding: 1.25rem;
		border-radius: 1.35rem;
		background:
			linear-gradient(180deg, rgba(255, 252, 247, 0.92), rgba(244, 236, 226, 0.8)),
			linear-gradient(135deg, rgba(16, 63, 54, 0.06), rgba(222, 164, 93, 0.08));
		border: 1px solid rgba(16, 63, 54, 0.11);
		box-shadow:
			0 18px 36px rgba(16, 35, 29, 0.08),
			inset 0 1px 0 rgba(255, 255, 255, 0.55);
		z-index: 2;
	}

	.algorithm-chip,
	.algorithm-badge {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.4rem 0.65rem;
		border-radius: 999px;
		font-size: 0.68rem;
		font-weight: 800;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.algorithm-chip {
		width: 6.6rem;
		height: 1.65rem;
		background: rgba(16, 63, 54, 0.08);
		color: #103f36;
	}

	.algorithm-badge {
		width: 5.8rem;
		height: 1.5rem;
		margin-top: 0.95rem;
		background: rgba(222, 164, 93, 0.18);
		color: #8a5b30;
	}

	.rule-line {
		height: 0.62rem;
		margin-top: 0.85rem;
		border-radius: 999px;
		background: linear-gradient(90deg, rgba(16, 63, 54, 0.18), rgba(222, 164, 93, 0.36));
		transform-origin: left center;
		animation: ruleReveal 3.6s ease-in-out infinite;
	}

	.rule-line-a {
		width: 92%;
	}

	.rule-line-b {
		width: 74%;
		animation-delay: -0.5s;
	}

	.rule-line-c {
		width: 84%;
		animation-delay: -1s;
	}

	.rule-line-d {
		width: 58%;
		animation-delay: -1.5s;
	}

	.section-label,
	.stack-period,
	.project-period,
	.timeline-year {
		text-transform: uppercase;
		letter-spacing: 0.12em;
		font-size: 0.75rem;
		font-weight: 800;
		color: #8a5b30;
	}

	h1,
	h2,
	h3 {
		font-family: 'Newsreader', serif;
		margin: 0;
		font-weight: 600;
	}

	h1 {
		margin-top: 0;
		font-size: clamp(2.2rem, 5vw, 3.8rem);
		line-height: 1;
		max-width: 15ch;
	}

	h2 {
		font-size: clamp(2rem, 4vw, 3rem);
		line-height: 0.98;
		margin-top: 0.35rem;
	}

	h3 {
		font-size: 1.35rem;
		line-height: 1.1;
	}

	h3 a {
		text-decoration: underline;
		text-decoration-thickness: 1px;
		text-underline-offset: 0.14em;
	}

	.lede,
	.content-card p,
	.content-card span,
	.profile-card p,
	.profile-card li,
	.project-card a {
		line-height: 1.7;
		font-size: 1rem;
		color: rgba(16, 35, 29, 0.82);
	}

	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.9rem;
		margin: 1.5rem 0 0;
	}

	.button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.95rem 1.25rem;
		border-radius: 999px;
		font-weight: 700;
		transition:
			transform 160ms ease,
			background 160ms ease;
	}

	.button:hover {
		transform: translateY(-2px);
	}

	.primary {
		background: #103f36;
		color: #f7f2ea;
	}

	.secondary {
		background: rgba(16, 63, 54, 0.08);
	}

	.project-card,
	.stack-list article,
	.timeline article {
		padding: 1rem 1.1rem;
		background: rgba(255, 255, 255, 0.54);
		border: 1px solid rgba(16, 35, 29, 0.08);
		border-radius: 1.35rem;
	}

	.profile-card {
		padding: 1.6rem;
		align-self: start;
		position: sticky;
		top: 1.5rem;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.portrait {
		width: min(100%, 15rem);
		aspect-ratio: 1 / 1;
		border-radius: 1.5rem;
		object-fit: cover;
		object-position: center top;
		display: block;
		margin-bottom: 1.25rem;
		border: 1px solid rgba(16, 35, 29, 0.12);
	}

	.profile-card h2 {
		font-size: 2.15rem;
	}

	.contact-list {
		list-style: none;
		padding: 0;
		margin: 1.2rem 0;
		display: grid;
		gap: 0.7rem;
	}

	.content-card {
		padding: 2rem;
	}

	.timeline,
	.stack-list {
		display: grid;
		gap: 0.9rem;
		margin-top: 1.3rem;
	}

	.timeline article {
		display: grid;
		grid-template-columns: 5rem 1fr;
		gap: 1rem;
		align-items: start;
	}

	.timeline p,
	.stack-list p,
	.project-card p {
		margin: 0.45rem 0 0;
	}

	.timeline span,
	.stack-list span {
		display: inline-block;
		margin-top: 0.55rem;
		color: rgba(16, 35, 29, 0.72);
	}

	.project-card {
		margin-top: 1.3rem;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 1rem;
	}

	.project-card a {
		font-weight: 800;
		color: #103f36;
	}

	.pill-list {
		list-style: none;
		padding: 0;
		margin: 1.4rem 0 0;
		display: flex;
		flex-wrap: wrap;
		gap: 0.8rem;
	}

	.pill-list li {
		padding: 0.8rem 1rem;
		border-radius: 999px;
		background: rgba(255, 255, 255, 0.66);
		border: 1px solid rgba(16, 35, 29, 0.08);
		line-height: 1.4;
	}

	.compact li {
		padding: 0.7rem 0.9rem;
	}

	@keyframes sceneFloat {
		0%,
		100% {
			transform: translateY(0);
		}

		50% {
			transform: translateY(-8px);
		}
	}

	@keyframes neuronPulse {
		0%,
		100% {
			filter: brightness(0.94) scale(1);
		}

		50% {
			filter: brightness(1.14) scale(1.08);
		}
	}

	@keyframes corePulse {
		0%,
		100% {
			transform: scale(1);
			filter: saturate(1);
		}

		50% {
			transform: scale(1.08);
			filter: saturate(1.12);
		}
	}

	@keyframes ringSpin {
		from {
			transform: rotateZ(0deg);
		}

		to {
			transform: rotateZ(360deg);
		}
	}

	@keyframes dataTravel {
		from {
			transform: translateX(0);
		}

		to {
			transform: translateX(380%);
		}
	}

	@keyframes ruleReveal {
		0%,
		100% {
			transform: scaleX(0.86);
			opacity: 0.64;
		}

		50% {
			transform: scaleX(1);
			opacity: 1;
		}
	}

	@media (max-width: 920px) {
		.topbar {
			border-radius: 1.4rem;
			align-items: flex-start;
			flex-direction: column;
			gap: 0.8rem;
		}

		nav {
			flex-wrap: wrap;
			gap: 0.8rem 1rem;
		}

		.layout {
			grid-template-columns: 1fr;
		}

		.hero-layout {
			display: block;
		}

		.hero-visual {
			min-height: 18rem;
			margin: -0.4rem 0 1rem;
		}

		.profile-card {
			position: static;
			order: -1;
		}

	}

	@media (max-width: 640px) {
		.page-shell {
			padding: 1rem;
		}

		.hero-card,
		.content-card,
		.profile-card {
			border-radius: 1.5rem;
		}

		.hero-card,
		.content-card {
			padding: 1.4rem;
		}

		h1 {
			max-width: none;
			font-size: clamp(2.6rem, 12vw, 4rem);
		}

		.meaning-space {
			width: min(100%, 28rem);
		}

		.profile-card h2,
		h2 {
			font-size: 1.9rem;
		}

		.timeline article,
		.project-card {
			grid-template-columns: 1fr;
			display: grid;
		}
	}
</style>

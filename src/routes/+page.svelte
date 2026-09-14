<script lang="ts">
    import ChipScene from '$lib/ChipScene.svelte';
	const profile = {
		name: "Mohammed Batis",
		subtitle: "CS PhD Student @ USTC",
		location: "USTC, Hefei, China",
		email: "batis2019@gmail.com",
		x: "https://x.com/m__batis",
		cv: "./mainCV.pdf?v=20260907",
		github: "https://github.com/batis1",
		scholar: "https://scholar.google.com/citations?user=7lz2lbUAAAAJ&hl=en",
		image: "./profile_picture.jpg",
	};

	const education = [
		{
			date: "2025 - Present",
			degree: "PhD Computer Science and Technology",
			school: "University of Science and Technology of China",
			location: "Hefei, China",
			detail: "",
		},
		{
			date: "2022 - 2025",
			degree: "MSc Computer Science and Technology",
			school: "Wenzhou University",
			location: "Wenzhou, China",
			detail: "Final grade: 4.5. Thesis: Research on the Improved RIME Optimization Algorithm and Its Application for Wrapper-based Feature Selection in Biomedical Data.",
		},
		{
			date: "2018 - 2022",
			degree: "BSc Computer Science and Technology",
			school: "Wenzhou University",
			location: "Wenzhou, China",
			detail: "Final grade: 4.03 GPA. Thesis: Design and Implementation of a Chinese HSK Test Preparation Platform.",
		},
		{
			date: "2014 - 2017",
			degree: "Secondary School",
			school: "Mukalla Model Secondary School",
			location: "Mukalla, Yemen",
			detail: "Final grade: 98.63%.",
		},
	];

const publications = [
    {
        "year": "2026",
        "title": "Random differential RIME optimization for multi-threshold segmentation in dermoscopic skin cancer images",
        "authors": "M. Batis, Q. Shao, L. Liu, A. A. Heidari, H. Chen",
        "venue": "Biomedical Signal Processing and Control, 123, 110533",
        "citations": 0,
        "link": "https://www.sciencedirect.com/science/article/pii/S1746809426010876",
        "citationLink": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=7lz2lbUAAAAJ&citation_for_view=7lz2lbUAAAAJ:IjCSPb-OGe4C"
    },
    {
        "year": "2026",
        "title": "Prey capture enhanced Harris hawks optimizer for wrapper-based feature selection in high-dimensional medical data",
        "authors": "M. Batis, Y. Chen, L. Liu, A. A. Heidari, H. Chen",
        "venue": "Computer Methods and Programs in Biomedicine, 109237",
        "citations": 2,
        "link": "https://www.sciencedirect.com/science/article/pii/S0169260726000052",
        "citationLink": "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=13749162886429041367"
    },
    {
        "year": "2025",
        "title": "ACGRIME: adaptive chaotic Gaussian RIME optimizer for global optimization and feature selection",
        "authors": "M. Batis, Y. Chen, M. Wang, L. Liu, A. A. Heidari, H. Chen",
        "venue": "Cluster Computing, 28(1), 61",
        "citations": 19,
        "link": "https://link.springer.com/article/10.1007/s10586-024-04716-9",
        "citationLink": "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=13203526887198718385"
    }
];

	const projects = [
		{
			date: "2022 - Present",
			title: "WHSK: Interactive HSK Preparation Platform",
			detail: "A gamified web platform for Chinese HSK preparation with interactive practice, progress tracking, and software copyright registration in China (2025SR0444242).",
			link: "https://whsk.tech/",
		},
	];

	const awards = [
        { date: "2025", title: "CAS-ANSO Scholarship at USTC" },
		{
			date: "2022",
			title: "Chinese Government Scholarship at Wenzhou University",
		},
		{
			date: "2022",
			title: "Excellent Graduation Design Award at Wenzhou University",
		},
		{
			date: "2021",
			title: "Zhejiang Government Scholarship at Wenzhou University",
		},
		{
			date: "2017",
			title: "Second Place in Mukalla Model Secondary School Rankings",
		},
		{
			date: "2013",
			title: "9th Best Middle School Graduate in the Province of Wadi Hadramout",
		},
	];

	const skillGroups = [
		{
			category: "Programming",
			skills: "Python, JavaScript, MATLAB, PyTorch",
		},
		{
			category: "Web and Software",
			skills: "React, Svelte, Node.js, MongoDB, MySQL",
		},
		{
			category: "Languages",
			skills: "Arabic, English, Chinese",
		},
	];
</script>
<svelte:head>
<title>Mohammed Batis - Research & CV</title>
<meta name="description" content="Mohammed Batis, CS PhD student at USTC. Mechanistic interpretability, machine learning, and optimization. Publications, education, and projects." />
</svelte:head>
<a class="skip" href="#about">Skip to content</a>
<main id="cv">
<nav aria-label="CV navigation"><a class="monogram" href="#cv">MB</a><div><a href="#publications">Publications</a><a href="#projects">Projects</a><a href="#education">Education</a><a href={profile.cv}>CV PDF</a></div></nav>
<ChipScene />
<header><img src={profile.image} alt={profile.name} width="96" height="96" /><div><h1>{profile.name}</h1><p>{profile.subtitle}</p><span>{profile.location}</span></div></header>
<div class="contacts"><a href={`mailto:${profile.email}`}>{profile.email}</a><a href={profile.scholar}>Google Scholar &nearr;</a><a href={profile.github}>GitHub &nearr;</a><a href={profile.x}>X @m__batis &nearr;</a></div>
<section id="about" aria-labelledby="about-title">
    <h2 id="about-title">About</h2>
    <div class="about-topic">
        <h3>Research</h3>
        <p class="intro">I study the <strong>mechanistic interpretability of language-only LLMs</strong>, combining game-theoretic interactions with causal analysis to understand how model components jointly shape behavior.</p>
    </div>
    <div class="about-topic">
        <h3>Design & engineering</h3>
        <p class="intro">I enjoy design engineering, logic, and ideation, with a broad interest in how ideas become thoughtfully designed systems. I am currently reading about <strong>AI accelerator hardware</strong>, chip limitations, and the design decisions shaped by those constraints.</p>
    </div>
</section>
<section id="publications" aria-labelledby="publications-title">
<div class="section-heading"><h2 id="publications-title">Publications</h2><a href={profile.scholar}>Google Scholar &nearr;</a></div>
<dl class="metrics"><div><dt>Citations</dt><dd>21</dd></div><div><dt>h-index</dt><dd>2</dd></div></dl>
<p class="source">Google Scholar &middot; Updated September 7, 2026</p>
{#each publications as publication}<article class="entry publication"><div class="date">{publication.year}</div><div><h3><a href={publication.link}>{publication.title} <span aria-hidden="true">&nearr;</span></a></h3><p class="muted">{publication.authors}</p><p class="muted">{publication.venue}</p><a class="citation" href={publication.citationLink}>{publication.citations} citations</a></div></article>{/each}
</section>
<section id="education" aria-labelledby="education-title"><h2 id="education-title">Education</h2>{#each education as item}<article class="entry"><div class="date">{item.date}</div><div><h3>{item.degree}</h3><p>{item.school}</p><p class="muted">{item.location}</p>{#if item.detail}<p class="detail">{item.detail}</p>{/if}</div></article>{/each}</section>
<section id="projects" aria-labelledby="projects-title"><h2 id="projects-title">Projects</h2>{#each projects as project}<article class="entry"><div class="date">{project.date}</div><div><h3><a href={project.link}>{project.title} &nearr;</a></h3><p class="detail">{project.detail}</p></div></article>{/each}</section>
<section aria-labelledby="awards-title"><h2 id="awards-title">Honors & awards</h2>{#each awards as award}<div class="entry award"><div class="date">{award.date}</div><p>{award.title}</p></div>{/each}</section>
<section aria-labelledby="skills-title"><h2 id="skills-title">Skills & languages</h2><dl class="skills">{#each skillGroups as group}<div><dt>{group.category}</dt><dd>{group.skills}</dd></div>{/each}</dl></section>
<footer><span>Mohammed Batis</span><a href={profile.cv}>Download CV PDF &darr;</a><a href="#cv">Back to top &uarr;</a></footer>
</main>
<style>
:global(*) { box-sizing: border-box; }
:global(body) { overflow-x: clip; }
:global(html) { scroll-behavior: smooth; scroll-padding-top: 24px; }
:global(body) { margin: 0; background: #fffcf0; color: #261412; font-family: "Public Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 16px; line-height: 1.6; letter-spacing: 0; -webkit-font-smoothing: antialiased; }
:global(a) { color: inherit; text-decoration: none; text-underline-offset: 4px; }
:global(a:hover) { text-decoration: underline; }
:global(a:focus-visible) { outline: 2px solid #326b85; outline-offset: 5px; border-radius: 2px; }
:global(::selection) { background: #d9edf6; color: #261412; }
.skip { position: fixed; top: 8px; left: 8px; padding: 8px 16px; background: #fffcf0; z-index: 5; transform: translateY(-160%); }
.skip:focus { transform: translateY(0); }
main { position: relative; max-width: 800px; margin: 0 auto; min-height: 100vh; }
main::before, main::after { content: ""; position: absolute; top: 0; bottom: 0; width: 1px; background: #e4e0d6; pointer-events: none; }
main::before { left: 16px; }
main::after { right: 16px; }
nav { display: flex; align-items: center; justify-content: space-between; min-height: 64px; padding: 16px 32px; font-size: 13px; }
nav div { display: flex; gap: 24px; }
.monogram { font-weight: 700; font-size: 16px; }
header { display: flex; align-items: center; gap: 24px; padding: 48px 32px 32px; }
header img { width: 96px; height: 96px; flex-shrink: 0; border-radius: 50%; object-fit: cover; object-position: center top; mix-blend-mode: multiply; border: 1px solid #e4e0d6; }
h1 { font-size: 30px; line-height: 1.2; font-weight: 600; margin: 0 0 8px; text-wrap: balance; }
header p { margin: 0 0 4px; }
header span { color: #70665e; font-size: 14px; }
.contacts { display: grid; grid-template-columns: 1.35fr 1fr; gap: 12px 24px; padding: 20px 32px; font-size: 14px; }
.contacts a { width: fit-content; overflow-wrap: anywhere; }
section { padding: 30px 32px; }
.contacts, section, footer { position: relative; }
.contacts::before, section::before, footer::before { content: ""; display: block; position: absolute; top: 0; left: 50%; width: 100vw; transform: translateX(-50%); height: 32px; border-block: 1px solid #e4e0d6; background: repeating-linear-gradient(135deg, transparent 0 6px, #e4e0d680 6px 7px); pointer-events: none; }
.contacts { padding-top: 28px; }
footer { margin-top: 10px; }

h2 { font-size: 20px; line-height: 1.4; font-weight: 600; margin: 0 0 20px; }
.intro { margin: 0; max-width: 64ch; text-wrap: pretty; }
strong { font-weight: 600; }
.about-topic + .about-topic { margin-top: 24px; }
.about-topic h3 { margin-bottom: 8px; }
.section-heading { display: flex; align-items: baseline; justify-content: space-between; gap: 16px; }
.section-heading > a { font-size: 13px; color: #70665e; }
.metrics { display: grid; grid-template-columns: repeat(2,1fr); margin: 0; padding: 16px 20px; background: transparent; border-radius: 6px; }
.metrics div { display: flex; flex-direction: column-reverse; padding-left: 24px;  }
.metrics div:first-child { padding-left: 0; border: 0; }
.metrics dt { font-size: 13px; color: #70665e; }
.metrics dd { margin: 0; font-size: 24px; font-weight: 600; line-height: 1.4; font-variant-numeric: tabular-nums; }
.source { font-size: 12px; color: #70665e; margin: 10px 0 4px; }
.entry { display: grid; grid-template-columns: 116px minmax(0,1fr); gap: 20px; padding: 16px 0; }
.entry:last-child { padding-bottom: 0; }
.date { font-size: 13px; color: #70665e; padding-top: 2px; font-variant-numeric: tabular-nums; }
h3 { font-size: 16px; line-height: 1.5; font-weight: 600; margin: 0 0 5px; text-wrap: pretty; }
.entry p { margin: 3px 0 0; font-size: 14px; }
.entry .detail { margin-top: 8px; color: #70665e; text-wrap: pretty; }
.muted { color: #70665e; }
.publication { padding-block: 22px; }
.publication + .publication { border-top: 0; }
.citation { display: inline-block; margin-top: 10px; color: #326b85; font-size: 13px; }
.award { padding-block: 9px; }
.award p { margin: 0; }
.skills { margin: 0; font-size: 14px; }
.skills div { display: grid; grid-template-columns: 160px minmax(0,1fr); gap: 20px; padding: 7px 0; }
.skills dt { color: #70665e; }
.skills dd { margin: 0; }
footer { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 16px; padding: 24px 32px; font-size: 12px; color: #70665e; }
@media (max-width: 560px) {
main::before { left: 4px; }
main::after { right: 4px; }
nav { padding: 16px 20px; } nav div { gap: 16px; }
header { padding: 32px 20px 24px; gap: 16px; } header img { width: 72px; height: 72px; }
h1 { font-size: 24px; } header p { font-size: 14px; } header span { font-size: 13px; }
.contacts { padding: 18px 20px; grid-template-columns: 1fr; gap: 10px; }
section { padding: 26px 20px; } .entry { grid-template-columns: 1fr; gap: 5px; }
.section-heading > a { font-size: 12px; }
.skills div { grid-template-columns: 1fr; gap: 2px; padding-block: 8px; }
footer { padding: 24px 20px; }
}
.contacts { padding-top: 50px; }
section { padding-top: 52px; }
footer { padding-top: 46px; }
@media (max-width: 560px) {
    .contacts { padding-top: 40px; }
    section { padding-top: 48px; }
}
@media (prefers-reduced-motion: reduce) { :global(html) { scroll-behavior: auto; } }
@media print { :global(body), main { background: white; } main { border: 0; } nav, .skip, footer { display: none; } section { padding-block: 18px; } .entry { break-inside: avoid; } }
</style>

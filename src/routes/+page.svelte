<script lang="ts">
	const profile = {
		name: "Mohammed Batis",
		subtitle: "CS PhD Student @ USTC",
		location: "USTC, Hefei, China",
		email: "batis2019@gmail.com",
		phone: "(+86) 15658563280",
		cv: "./mainCV.pdf?v=20260313",
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
			year: "2024",
			title: "ACGRIME: Adaptive Chaotic Gaussian RIME Optimizer for Global Optimization and Feature Selection",
			venue: "Cluster Computing Journal",
			status: "Published",
			link: "https://link.springer.com/article/10.1007/s10586-024-04716-9",
		},
		{
			year: "2024",
			title: "Prey Capture Enhanced Harris Hawks Optimizer for Wrapper-based Feature Selection in High-Dimensional Medical Data",
			venue: "Computer Methods and Programs in Biomedicine",
			status: "Published",
			link: "https://www.sciencedirect.com/science/article/pii/S0169260726000052",
		},
		{
			year: "2024",
			title: "Random differential RIME optimization for multi-threshold segmentation in dermoscopic skin cancer images",
			venue: "Biomedical Signal Processing and Control",
			status: "Under second revision",
		},
		{
			year: "2024",
			title: "An enhanced bat optimizer with elite selection and crisscross strategies for multi-threshold image segmentation of lupus nephritis",
			venue: "International Journal of Computational Intelligence Systems",
			status: "Under review",
		},
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
			category: "Programming and ML",
			skills: "Python, PyTorch, MATLAB",
		},
		{
			category: "Web and Software",
			skills: "React, Svelte, D3.js, Node.js, MongoDB, MySQL",
		},
		{
			category: "Tools",
			skills: "Git and GitHub",
		},
		{
			category: "Languages",
			skills: "Arabic, English, Chinese",
		},
	];
</script>

<svelte:head>
	<title>Mohammed Batis - Machine learning</title>
	<meta
		name="description"
		content="Academic CV website for Mohammed Batis, focused on mechanistic interpretability, ML visualizations, and trustworthy AI."
	/>
	<link rel="stylesheet" href="https://use.typekit.net/qyo6xht.css" />
</svelte:head>

<main id="cv">
	<section class="cv-header-card" aria-labelledby="cv-title">
		<div class="cv-identity">
			<h1 id="cv-title"><a href="./">Mohammed Batis</a></h1>
			<h3 id="cv-subtitle">{profile.subtitle}</h3>
		</div>

		<div class="cv-image-links-wrapper">
			<div class="cv-headshot">
				<img src={profile.image} alt={profile.name} />
			</div>

			<div class="cv-contact-grid">
				<div class="cv-social-link">
					<div class="cv-social-link-label">Location</div>
					<div class="cv-social-link-text-wrapper">
						{profile.location}
					</div>
				</div>
				<div class="cv-social-link">
					<div class="cv-social-link-label">Email</div>
					<div class="cv-social-link-text-wrapper">
						<a href={`mailto:${profile.email}`}>{profile.email}</a>
					</div>
				</div>
				<div class="cv-social-link">
					<div class="cv-social-link-label">CV</div>
					<div class="cv-social-link-text-wrapper">
						<a href={profile.cv}>CV PDF</a>
					</div>
				</div>
				<div class="cv-social-link">
					<div class="cv-social-link-label">GitHub</div>
					<div class="cv-social-link-text-wrapper">
						<a href={profile.github}>@batis1</a>
					</div>
				</div>
				<div class="cv-social-link">
					<div class="cv-social-link-label">Phone</div>
					<div class="cv-social-link-text-wrapper">{profile.phone}</div>
				</div>
				<div class="cv-social-link">
					<div class="cv-social-link-label">Scholar</div>
					<div class="cv-social-link-text-wrapper">
						<a href={profile.scholar}>Google Scholar</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<div class="cv-intro">
		My research focuses on making <strong class="cv-ai"
			>machine learning</strong
		>
		models that are more
		<strong class="cv-ai-2">interpretable</strong> and
		<strong class="cv-ai-2">trustworthy</strong>
		through <strong class="cv-vis">ML visualizations</strong> and mechanistic
		understanding.
	</div>

	<hr />

	<h2 id="education">Education</h2>
	{#each education as item}
		<div class="cv-left-date">{item.date}</div>
		<b class="cv-entry-title">{item.degree}</b>
		<div class="cv-entry-meta">{item.school}, {item.location}</div>
		<div class="cv-description">{item.detail}</div>
		<div class="cv-spacer"></div>
	{/each}

	<h2 id="publications">Publications</h2>
	{#each publications as publication}
		<div class="cv-left-date">{publication.year}</div>
		<div>
			{#if publication.link}
				<a class="cv-entry-title" href={publication.link}>{publication.title}</a>
			{:else}
				<b class="cv-entry-title">{publication.title}</b>
			{/if}
		</div>
		<div class="cv-description">
			<i>{publication.venue}. {publication.status}.</i>
		</div>
		<div class="cv-spacer-large"></div>
	{/each}

	<h2 id="projects">Projects</h2>
	{#each projects as project}
		<div class="cv-left-date">{project.date}</div>
		<div><a class="cv-entry-title" href={project.link}>{project.title}</a></div>
		<div class="cv-description">{project.detail}</div>
		<div class="pub-misc">
			<a href={project.link}>Project link</a>
		</div>
		<div class="cv-spacer"></div>
	{/each}

	<h2 id="honors-and-awards">Honors and Awards</h2>
	{#each awards as award}
		<div class="cv-left-date">{award.date}</div>
		<div>{award.title}</div>
		<div class="cv-spacer-small"></div>
	{/each}

	<h2 id="technology-skills">Technology Skills</h2>
	{#each skillGroups as group}
		<p class="cv-skill-row">
			<strong>{group.category}:</strong>
			{group.skills}
		</p>
	{/each}
</main>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}

	:global(body) {
		margin: 0;
		background: #f4f4f2;
		color: #1a1a1a;
		font-family: "SF Pro Display", "Helvetica Neue", "Switzer", sans-serif;
	}

	:global(*) {
		box-sizing: border-box;
	}

	:global(a) {
		color: inherit;
		text-decoration: none;
	}

	main#cv {
		font-family: "SF Pro Display", "Helvetica Neue", "Switzer", sans-serif;
		display: grid;
		justify-items: stretch;
		grid-template-columns:
			[screen-start] 1fr
			[page-start kicker-start] minmax(min-content, 3.5rem)
			[middle-start] minmax(min-content, 3.5rem)
			[text-start kicker-end] repeat(8, minmax(min-content, 3.5rem))
			[text-end gutter-start] minmax(min-content, 3.5rem)
			[middle-end] minmax(min-content, 3.5rem)
			[page-end gutter-end] 1fr
			[screen-end];
		grid-column-gap: 1.5rem;
		padding-top: 4rem;
		padding-bottom: 5rem;
		line-height: 1.6;
		color: #1a1a1a;
		-webkit-font-smoothing: antialiased;
	}

	main#cv > * {
		grid-column: text-start / page-end;
	}

	main#cv h1 {
		font-size: 2.85rem;
		margin: 0;
		line-height: 1.05;
	}

	main#cv h2 {
		font-size: 0.78rem;
		margin-top: 3.25rem;
		margin-bottom: 1.25rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		color: #737373;
		border-bottom: 1px solid #deded9;
		padding-bottom: 0.75rem;
	}

	main#cv hr {
		margin: 2.25rem 0 0;
		border: 0;
		border-top: 1px solid #deded9;
	}

	#cv-title {
		font-weight: 700;
		line-height: 1;
		font-size: 3rem;
		letter-spacing: 0;
		color: #0e0e0e;
		margin-bottom: 0;
		font-family: "SF Pro Display", "Helvetica Neue", "Switzer", sans-serif;
	}

	#cv-title a,
	#cv-title a:hover {
		color: #0e0e0e;
		font-weight: 700;
		text-decoration: none;
	}

	#cv-subtitle {
		font-family: "SF Pro Display", "Helvetica Neue", "Switzer", sans-serif;
		font-size: 0.95rem;
		font-weight: 500;
		line-height: 1.2;
		color: #737373;
		margin: 0.35rem 0 1.2rem;
	}

	.cv-header-card {
		display: grid;
		gap: 1.75rem;
		background: #fff;
		border-radius: 24px;
		box-shadow: 0 18px 50px rgba(25, 25, 20, 0.08);
		padding: 2rem;
	}

	.cv-identity {
		border-bottom: 1px solid #e6e6e3;
		padding-bottom: 1.35rem;
	}

	.cv-intro {
		margin-top: 2rem;
		margin-bottom: 0.75rem;
		line-height: 1.65;
		font-size: 1.04rem;
		max-width: 46rem;
	}

	.cv-ai,
	.cv-ai-2,
	.cv-vis {
		border-radius: 9999px;
		padding: 0.05rem 0.45rem;
		font-weight: 600;
		background-color: #edf3ec;
		color: #346538;
	}

	.cv-image-links-wrapper {
		display: flex;
		font-size: 0.86rem;
		gap: 1.6rem;
		align-items: flex-start;
	}

	.cv-headshot {
		width: 96px;
		flex: 0 0 96px;
	}

	.cv-headshot img {
		width: 96px;
		height: 96px;
		object-fit: cover;
		object-position: center top;
		border-radius: 18px;
		display: block;
		box-shadow: 0 8px 24px rgba(25, 25, 20, 0.08);
	}

	.cv-contact-grid {
		display: grid;
		flex: 1;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		column-gap: 2rem;
		row-gap: 0.45rem;
	}

	.cv-social-link {
		display: grid;
		grid-template-columns: 4.5rem minmax(0, 1fr);
		gap: 0.7rem;
		min-width: 0;
	}

	.cv-social-link-label {
		color: #8a8a86;
		font-size: 0.68rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	.cv-social-link-text-wrapper {
		min-width: 0;
		overflow-wrap: anywhere;
	}

	.cv-social-link-text-wrapper > a {
		color: #1a1a1a;
	}

	.cv-left-date {
		grid-column: kicker;
		text-align: right;
		font-size: 0.68rem;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		padding-top: 0.18rem;
		color: #8a8a86;
		font-family: "SF Mono", "Geist Mono", "JetBrains Mono", monospace;
	}

	.cv-entry-title {
		color: #111;
		font-size: 1rem;
		font-weight: 600;
		line-height: 1.45;
	}

	.cv-entry-meta {
		line-height: 1.45;
	}

	.cv-description {
		color: #737373;
		font-size: 0.9rem;
		font-weight: 400;
		line-height: 1.55;
		margin-top: 0.18rem;
	}

	.cv-spacer-large {
		height: 1.15rem;
		display: block;
	}

	.cv-spacer {
		height: 0.95rem;
		display: block;
	}

	.cv-spacer-small {
		height: 0.25rem;
		display: block;
	}

	.pub-misc {
		font-size: 0.7rem;
		margin-top: 0.3rem;
		display: flex;
		flex-wrap: wrap;
		gap: 0.3rem;
		align-items: center;
	}

	.pub-misc a {
		color: #737373;
		white-space: nowrap;
		background-color: #fff;
		border: 1px solid #deded9;
		padding: 0.15rem 0.45rem;
		border-radius: 9999px;
		transition:
			background-color 0.2s ease,
			color 0.2s ease;
	}

	.pub-misc a:hover {
		color: #1a1a1a;
		text-decoration: none;
		background-color: #f7f7f5;
	}

	.cv-skill-row {
		margin: 0.35rem 0;
	}

	@media screen and (max-width: 768px) {
		main#cv {
			grid-template-columns:
				[screen-start] 8px
				[page-start kicker-start text-start gutter-start middle-start] repeat(
					8,
					1fr
				)
				[text-end page-end gutter-end kicker-end middle-end] 8px
				[screen-end];
			grid-column-gap: 0.5rem;
		}

		.cv-left-date {
			text-align: left;
			grid-column: text-start / page-end;
			margin-top: 0.6rem;
		}

		.cv-image-links-wrapper {
			display: grid;
			gap: 1rem;
		}

		.cv-contact-grid {
			grid-template-columns: 1fr;
		}

		.cv-headshot {
			width: 104px;
			flex-basis: 104px;
			margin-bottom: 1rem;
		}

		.cv-headshot img {
			width: 104px;
			height: 104px;
		}

		.cv-social-link {
			grid-template-columns: 4.25rem minmax(0, 1fr);
		}
	}

	@media all and (max-width: 700px) {
		main#cv {
			padding-top: 1rem;
			padding-bottom: 3rem;
		}

		.cv-header-card {
			border-radius: 20px;
			padding: 1.35rem;
		}

		#cv-title {
			font-size: 2.15rem;
		}

		#cv-subtitle {
			font-size: 0.85rem;
		}
	}
</style>

<script lang="ts">
	const profile = {
		name: 'Mohammed Batis',
		subtitle: 'ML researcher',
		location: 'Wenzhou University, Wenzhou, China',
		email: 'batis2019@gmail.com',
		phone: '(+86) 15658563280',
		cv: './mainCV.pdf',
		github: 'https://github.com/batis1',
		scholar: 'https://scholar.google.com/citations?user=7lz2lbUAAAAJ&hl=en',
		image: './profile_picture.jpg'
	};

	const education = [
		{
			date: '2022 - 2025',
			degree: 'MSc Computer Science and Technology',
			school: 'Wenzhou University',
			location: 'Wenzhou, China',
			detail:
				'Final grade: 4.5. Thesis: Research on the Improved RIME Optimization Algorithm and Its Application for Wrapper-based Feature Selection in Biomedical Data.'
		},
		{
			date: '2018 - 2022',
			degree: 'BSc Computer Science and Technology',
			school: 'Wenzhou University',
			location: 'Wenzhou, China',
			detail:
				'Final grade: 4.03 GPA. Thesis: Design and Implementation of a Chinese HSK Test Preparation Platform.'
		},
		{
			date: '2014 - 2017',
			degree: 'Secondary School',
			school: 'Mukalla Model Secondary School',
			location: 'Mukalla, Yemen',
			detail: 'Final grade: 98.63%.'
		}
	];

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

	const projects = [
		{
			date: '2022 - Present',
			title: 'WHSK: Interactive HSK Preparation Platform',
			detail:
				'A gamified web platform for Chinese HSK preparation with interactive practice, progress tracking, and software copyright registration in China (2025SR0444242).',
			link: 'https://whsk.tech/'
		}
	];

	const awards = [
		{
			date: '2022',
			title: 'Chinese Government Scholarship at Wenzhou University'
		},
		{
			date: '2022',
			title: 'Excellent Graduation Design Award at Wenzhou University'
		},
		{
			date: '2021',
			title: 'Zhejiang Government Scholarship at Wenzhou University'
		},
		{
			date: '2017',
			title: 'Second Place in Mukalla Model Secondary School Rankings'
		},
		{
			date: '2013',
			title: '9th Best Middle School Graduate in the Province of Wadi Hadramout'
		}
	];

	const skillGroups = [
		{
			category: 'Programming and ML',
			skills: 'Python, PyTorch, MATLAB'
		},
		{
			category: 'Web and Software',
			skills: 'React, Svelte, D3.js, Node.js, MongoDB, MySQL'
		},
		{
			category: 'Tools',
			skills: 'Git and GitHub'
		},
		{
			category: 'Languages',
			skills: 'Arabic, English, Chinese'
		}
	];
</script>

<svelte:head>
	<title>Mohammed Batis - Machine learning</title>
	<meta
		name="description"
		content="Academic CV website for Mohammed Batis, focused on mechanistic interpretability, ML visualizations, and trustworthy AI."
	/>
	<link rel="stylesheet" href="https://use.typekit.net/qyo6xht.css" />
	<link
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
		rel="stylesheet"
	/>
</svelte:head>

<main id="cv">
	<h1 id="cv-title"><a href="./">Mohammed Batis</a></h1>

	<div class="cv-image-links-wrapper">
		<div class="cv-headshot">
			<img src={profile.image} alt={profile.name} />
		</div>

		<div class="cv-image-links">
			<div class="cv-social-link">
				<div class="cv-social-link-icon-wrapper"><i class="fas fa-home icon"></i></div>
				<div class="cv-social-link-text-wrapper">{profile.location}</div>
			</div>
			<div class="cv-social-link">
				<div class="cv-social-link-icon-wrapper"><i class="fas fa-envelope icon"></i></div>
				<div class="cv-social-link-text-wrapper">
					<a href={`mailto:${profile.email}`}>{profile.email}</a>
				</div>
			</div>
			<div class="cv-social-link">
				<div class="cv-social-link-icon-wrapper"><i class="far fa-file-pdf icon"></i></div>
				<div class="cv-social-link-text-wrapper"><a href={profile.cv}>CV PDF</a></div>
			</div>
		</div>

		<div class="cv-image-links">
			<div class="cv-social-link">
				<div class="cv-social-link-icon-wrapper"><i class="fab fa-github icon"></i></div>
				<div class="cv-social-link-text-wrapper"><a href={profile.github}>@batis1</a></div>
			</div>
			<div class="cv-social-link">
				<div class="cv-social-link-icon-wrapper"><i class="fas fa-phone icon"></i></div>
				<div class="cv-social-link-text-wrapper">{profile.phone}</div>
			</div>
			<div class="cv-social-link">
				<div class="cv-social-link-icon-wrapper">
					<i class="fa fa-graduation-cap icon"></i>
				</div>
				<div class="cv-social-link-text-wrapper">
					<a href={profile.scholar}>Google Scholar</a>
				</div>
			</div>
		</div>
	</div>

	<div class="cv-intro">
		My research focuses on making <strong class="cv-ai">machine learning</strong> models more
		<strong class="cv-ai-2">interpretable</strong> and <strong class="cv-ai-2">trustworthy</strong>
		through <strong class="cv-vis">ML visualizations</strong> and mechanistic understanding.
	</div>

	<hr />

	<h2 id="education">Education</h2>
	{#each education as item}
		<div class="cv-left-date">{item.date}</div>
		<b>{item.degree}</b>
		<div>{item.school}, {item.location}</div>
		<div class="cv-description">{item.detail}</div>
		<div class="cv-spacer"></div>
	{/each}

	<h2 id="publications">Publications</h2>
	{#each publications as publication}
		<div class="cv-left-date">{publication.year}</div>
		<div>
			{#if publication.link}
				<a href={publication.link}><b>{publication.title}</b></a>
			{:else}
				<b>{publication.title}</b>
			{/if}
		</div>
		<div class="cv-description"><i>{publication.venue}. {publication.status}.</i></div>
		<div class="cv-spacer-large"></div>
	{/each}

	<h2 id="projects">Projects</h2>
	{#each projects as project}
		<div class="cv-left-date">{project.date}</div>
		<div><a href={project.link}><b>{project.title}</b></a></div>
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
		<p style="margin: 5px 0">
			<strong>{group.category}:</strong> {group.skills}
		</p>
	{/each}
</main>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}

	:global(body) {
		margin: 0;
		background: #fff;
		color: #414141;
		font-family:
			-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
	}

	:global(*) {
		box-sizing: border-box;
	}

	:global(a) {
		color: inherit;
		text-decoration: none;
	}

	main#cv {
		font-family:
			-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
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
		padding-top: 1rem;
		padding-bottom: 3rem;
		line-height: 1.5;
		color: #414141;
		-webkit-font-smoothing: antialiased;
	}

	main#cv > * {
		grid-column: text-start / page-end;
	}

	main#cv h1 {
		font-size: 2.25rem;
		margin-top: 1rem;
		line-height: 1.25;
	}

	main#cv h2 {
		font-size: 2rem;
		margin-top: 1rem;
		margin-bottom: 0.5rem;
		font-weight: 400;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		padding-bottom: 0.35rem;
	}

	main#cv hr {
		margin: 1.5rem 0;
		border: 0;
		border-top: 1px solid #ddd;
	}

	#cv-title {
		font-weight: 600;
		line-height: 1;
		font-size: 2.5rem;
		letter-spacing: -0.08rem;
		color: #1a1a1a;
		margin-bottom: 0;
		font-family: 'Akzidenz Grotesk', 'Newsreader', sans-serif;
	}

	#cv-title a,
	#cv-title a:hover {
		color: #1a1a1a;
		font-weight: 600;
		text-decoration: none;
	}

	.cv-intro {
		margin-top: 0.75rem;
		margin-bottom: 0.75rem;
		line-height: 1.5;
	}

	.cv-ai,
	.cv-ai-2,
	.cv-vis {
		border-radius: 1rem;
		padding: 0 0.5rem;
	}

	.cv-ai {
		background-color: #bbf6e2;
		color: #36876c;
	}

	.cv-ai-2 {
		background-color: #56b2e5;
		color: white;
	}

	.cv-vis {
		background-color: #ffd7f1;
		color: #995081;
	}

	.cv-image-links-wrapper {
		display: flex;
		font-size: 0.85rem;
		gap: 1.5rem;
		align-items: flex-start;
	}

	.cv-headshot {
		width: 120px;
		flex: 0 0 120px;
	}

	.cv-headshot img {
		width: 120px;
		height: 120px;
		object-fit: cover;
		object-position: center top;
		border-radius: 100%;
		display: block;
	}

	.cv-image-links {
		flex: 1;
	}

	.cv-social-link {
		display: flex;
		margin-bottom: 0.2rem;
	}

	.cv-social-link-icon-wrapper {
		flex: 0 0 25px;
		text-align: center;
		margin-right: 0.5rem;
	}

	.cv-social-link-icon-wrapper i {
		color: #515151;
	}

	.cv-social-link-text-wrapper > a {
		color: #414141;
	}

	.cv-left-date {
		grid-column: kicker;
		text-align: right;
		font-size: 0.7rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		color: #666;
	}

	.cv-description {
		color: #666;
		font-size: 0.9rem;
		font-weight: 300;
	}

	.cv-spacer-large {
		height: 1rem;
		display: block;
	}

	.cv-spacer {
		height: 0.75rem;
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
		color: #777;
		white-space: nowrap;
		background-color: #f4f4f4;
		padding: 0.15rem 0.4rem;
		border-radius: 1rem;
		transition: all 0.2s ease;
	}

	.pub-misc a:hover {
		color: #414141;
		text-decoration: none;
		background-color: #e8e8e8;
	}

	@media screen and (max-width: 768px) {
		main#cv {
			grid-template-columns:
				[screen-start] 8px
				[page-start kicker-start text-start gutter-start middle-start] repeat(8, 1fr)
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
			display: block;
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
	}

	@media all and (max-width: 700px) {
		#cv-title {
			font-size: 2.2rem;
		}

	}
</style>

import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		// Keep the small CV styles in the HTML to avoid blocking CSS requests.
		inlineStyleThreshold: 8192,
		paths: {
			base: '/batis1'
		}
	}
};

export default config;

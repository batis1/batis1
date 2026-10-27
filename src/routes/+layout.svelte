<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import publicSans from '$lib/assets/public-sans-latin.woff2';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preload" href={publicSans} as="font" type="font/woff2" crossorigin="anonymous" />
</svelte:head>

{@render children()}

<style>
	@font-face {
		font-family: 'Public Sans';
		font-style: normal;
		font-weight: 400 700;
		font-display: swap;
		src: url('../lib/assets/public-sans-latin.woff2') format('woff2');
	}
</style>

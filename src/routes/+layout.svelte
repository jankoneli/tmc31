<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>
<style>
	@import "tailwindcss";
	@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css");
</style>
<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

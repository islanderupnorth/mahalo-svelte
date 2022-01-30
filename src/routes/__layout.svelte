<script>
	import '../app.css';
</script>

<svelte:head>
	<title>MahaloTV</title>
</svelte:head>

<slot />
<footer class="max-7xl flex flex-col items-center py-4">
	<span class="text-xs"
		>This product uses the TMDB API but is not endorsed or certified by TMDB.</span
	>
	<a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer" class="h-6 my-2">
		<img src="/tmdb-logo.svg" alt="the movie database logo" class="h-full w-full" />
	</a>
</footer>

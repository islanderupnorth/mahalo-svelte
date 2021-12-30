<script lang="ts">
	import searchResults from '../stores/search';
	import Header from '../components/header.svelte';
	import HeroSearch from '../components/hero-search.svelte';
	import SearchResults from '../components/search-results.svelte';
</script>

<Header />
<main class:is-searching={$searchResults.length > 0}>
	<HeroSearch />
	<SearchResults />
</main>

<style>
	main {
		@apply transition-transform transform;
	}
	.is-searching {
		transform: translateY(-13%);
	}
</style>

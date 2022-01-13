<script lang="ts">
	import searchResults from '../stores/search';
	import CurtainIntro from '../components/curtain-intro.svelte';
	import Header from '../components/header.svelte';
	import HeroSearch from '../components/hero-search.svelte';
	import SearchResults from '../components/search-results.svelte';
</script>

<CurtainIntro />
<div class="intro-fadein">
	<Header />
	<main class:is-searching={$searchResults.length > 0}>
		<HeroSearch />
		<!-- <h1>Get inspired by: Show the top 10 trendings in Denmark (All subscriptions)</h1> -->
		<!-- Remembers your choices -->
		<!-- Filtering -->
		<!-- Airtable "Get early access" database - on success Mahalo (Thank you!) -->
		<!-- Add credit to TMDB <3 -->
		<!-- Starting image folding out - Danni has images! -->
		<SearchResults />
	</main>
</div>

<style>
	main {
		@apply transition-transform transform;
	}
	.is-searching {
		transform: translateY(-13%);
	}

	.intro-fadein {
		opacity: 0.025;
		animation: introFadeIn 1000ms ease-in 3200ms forwards;
	}

	@keyframes introFadeIn {
		0% {
			opacity: 0.025;
		}
		100% {
			opacity: 1;
		}
	}
</style>

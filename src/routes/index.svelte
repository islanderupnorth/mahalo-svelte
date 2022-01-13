<script lang="ts">
	import searchResults from '../stores/search';
	import Header from '../components/header.svelte';
	import HeroSearch from '../components/hero-search.svelte';
	import SearchResults from '../components/search-results.svelte';
</script>

<div class="curtain">
	<ul class="left">
		<li class="netflix"><img src="/curtain/NETFLIX_IMAGE-min.png" alt="netflix" /></li>
		<li class="disney"><img src="/curtain/DISNEY_IMAGE-min.png" alt="disney" /></li>
		<li class="prime"><img src="/curtain/PRIME_IMAGE-min.png" alt="amazone prime" /></li>
	</ul>
	<ul class="right">
		<li class="hbo"><img src="/curtain/HBO_IMAGE-min.png" alt="hbo max" /></li>
		<li class="bb"><img src="/curtain/BLOCKBUSTER_IMAGE-min.png" alt="blockbuster" /></li>
		<li class="apple"><img src="/curtain/APPLE_IMAGE-min.png" alt="apple tv" /></li>
	</ul>
</div>
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
	.curtain {
		@apply fixed inset-0 z-50 h-screen w-screen flex;
	}

	ul {
		width: 60vw;
		@apply relative;
	}

	li {
		z-index: 100;
		position: absolute;
		height: 100vh;
		width: 100%;
		width: 20vw;
	}

	img {
		object-fit: cover;
		height: 100%;
		width: 100%;
	}

	.left img {
		animation: slideOutLeft 1000ms ease-in 0s forwards;
	}
	.right img {
		animation: slideOutRight 1000ms ease-in 0s forwards;
	}

	.netflix {
		left: 30vw;
	}
	.disney {
		left: 15vw;
	}
	.netflix img,
	.hbo img {
		animation-delay: 2333ms;
	}
	.disney img,
	.bb img {
		animation-delay: 2667ms;
	}
	.prime img,
	.apple img {
		animation-delay: 3000ms;
	}

	.hbo {
		right: 30vw;
	}
	.bb {
		right: 15vw;
	}
	.apple {
		right: 0;
	}

	@keyframes slideOutLeft {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-100vh);
		}
	}

	@keyframes slideOutRight {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(100vh);
		}
	}

	.intro-fadein {
		opacity: 0.025;
		animation: introFadeIn 1000ms ease-in 3600ms forwards;
	}

	main {
		@apply transition-transform transform;
	}
	.is-searching {
		transform: translateY(-13%);
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

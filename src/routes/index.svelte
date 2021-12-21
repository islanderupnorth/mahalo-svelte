<script lang="ts">
	import { searchResults, queryApi } from '../stores/input';
	// import PROVIDERS from '../constants/providers.json';
	import Logo from '../components/logo.svelte';

	const INPUT_TIMER = 200;

	let searchValue: string = '';
	let timer: null | ReturnType<typeof setTimeout>;

	const debounceInput = () => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			return queryApi(searchValue);
		}, INPUT_TIMER);
	};
</script>

<header>
	<div class="inner py-10 flex justify-between">
		<div class="h-12">
			<Logo />
		</div>
		<nav class="flex items-center font-semibold text-md">
			<a href="/product-roadmap">Product Roadmap</a>
			<a href="#get-early-access" style="color: #6dbfff">Get Early Access</a>
		</nav>
	</div>
</header>
<main class:is-searching={$searchResults.length > 0}>
	<section class="hero-bg">
		<div
			class="section-inner min-h-screen flex-center transition-colors will-change-transform"
			class:is-searching={$searchResults.length > 0}
		>
			<div class="inner">
				<h1 class="text-5xl text-center font-thin transition-colors">
					Skip the <strong class="font-bold">search headache</strong>
				</h1>
				<div class="input-container my-8">
					<input
						id="search-input"
						type="text"
						bind:value={searchValue}
						on:input={debounceInput}
						autofocus
						placeholder="Search for any title"
					/>
				</div>
			</div>
		</div>
	</section>
	<section class="inner relative">
		<ul class="search-results" class:is-searching={$searchResults.length > 0}>
			{#each $searchResults as mediaItem}
				{#if mediaItem.poster_path}
					<li>
						<img
							src={`https://image.tmdb.org/t/p/w200${mediaItem.poster_path}`}
							alt={mediaItem.original_name}
						/>
						<!-- <ul class="absolute bottom-0 flex flex-row">
							{#if mediaItem.providers}
								{#each mediaItem.providers.flatrate as provider}
									<li class="w-16 h-16 relative">
										<img src={`https://image.tmdb.org/t/p/original${provider.logo_path}`} alt="" />
									</li>
								{/each}
							{/if}
						</ul> -->
					</li>
				{/if}
			{/each}
		</ul>
	</section>
</main>

<style>
	header {
		@apply absolute w-full;
	}
	input {
		background-color: var(--black);
		@apply text-center rounded-full text-5xl shadow-md p-2 pb-3 appearance-none outline-none caret-purple-500;
	}
	nav a {
		@apply ml-5;
	}
	main {
		@apply transition-transform;
	}
	.is-searching {
		@apply transform;
		transform: translateY(-13%);
	}
	.section-inner.is-searching {
		background-color: var(--black);
	}
	.input-container {
		background: var(--gradient-primary);
		padding: 3px;
		@apply rounded-full flex items-center justify-center;
	}
	.search-results {
		@apply absolute top-0 w-full grid grid-cols-6 gap-4 justify-start transition-transform;
	}
	.search-results.is-searching {
		@apply transform;
		transform: translateY(-45vh);
	}
</style>

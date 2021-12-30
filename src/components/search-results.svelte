<script lang="ts">
	import searchResults from '../stores/search';
</script>

<section class="inner relative">
	<ul class="results" class:is-searching={$searchResults.length > 0}>
		{#each $searchResults as media}
			{#if media.poster_path}
				<li class="relative">
					<img
						src={`https://image.tmdb.org/t/p/w200${media.poster_path}`}
						alt={media.original_name}
					/>
					<ul class="providers">
						{#if media?.providers?.flatrate?.length > 0}
							{#each media.providers.flatrate as provider}
								<li class="w-12 h-12 relative rounded-md overflow-hidden">
									<img src={`https://image.tmdb.org/t/p/original${provider.logo_path}`} alt="" />
								</li>
							{/each}
						{/if}
					</ul>
				</li>
			{/if}
		{/each}
	</ul>
</section>

<style>
	ul.results {
		@apply absolute top-0 w-full grid grid-cols-6 gap-4 justify-start transition-transform;
	}
	ul.providers {
		@apply absolute bottom-1 left-1 flex flex-row gap-1 z-10;
	}
	.is-searching {
		transform: translateY(-45vh);
	}
</style>

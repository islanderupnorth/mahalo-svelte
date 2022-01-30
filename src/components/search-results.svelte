<script lang="ts">
	import searchResults from '../stores/search';
	import services from '../stores/services';

	let selectedServices = [];

	$services.map((s) => {
		if (s.isSelected) selectedServices = [...selectedServices, s];
	});

	$: myResults = [];
	$: allRestResults = [];

	$: $searchResults.map((result) => {
		if (result.providers?.flatrate?.length > 0) {
			result.providers?.flatrate.map((provider) => {
				if (selectedServices.find((sS) => sS.provider_id === provider.provider_id)) {
					myResults = [...myResults, result];
				} else {
					if (!allRestResults.includes(result)) {
						allRestResults = [...allRestResults, result];
					}
				}
			});
		} else {
			allRestResults = [...allRestResults, result];
		}
	});
</script>

<section class="inner relative">
	<ul class="results" class:is-searching={$searchResults.length > 0}>
		{#each myResults as media}
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
		{#each allRestResults as media}
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
		transform: translateY(-40vh);
	}
</style>

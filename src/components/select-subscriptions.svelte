<script lang="ts">
	import subscriptions from '../stores/toggle-subscriptions';
	import services from '../stores/services';

	$: console.log('suuuuubs?', $subscriptions);
</script>

<div class="relative w-full">
	{#if $subscriptions}
		<ul class="grid grid-cols-8 gap-5 bg-black/90 p-5 rounded-xl text-white">
			{#each $services as service}
				<li class="flex justify-center m-4">
					<button
						class="service-btn"
						class:is-selected={service.isSelected}
						on:click={() => services.select(service.provider_id)}
					>
						<div class="div w-12 h-12 mb-2">
							<img src={`https://image.tmdb.org/t/p/original${service.logo_path}`} alt="" />
						</div>
						<span class="text-xs">{service.provider_name}</span>
					</button>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	.service-btn {
		@apply flex flex-col items-center opacity-50;
	}
	.is-selected {
		@apply opacity-100;
	}
</style>

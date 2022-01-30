<script lang="ts">
	import subscriptions from '../stores/toggle-subscriptions';
	import services from '../stores/services';
</script>

<div class="w-screen h-screen z-[99999999] fixed inset-0 flex items-center justify-center">
	{#if $subscriptions}
		<ul class="grid grid-cols-10 gap-4 bg-black/90 p-5 rounded-xl text-white">
			{#each $services as service}
				<li class="flex justify-center p-1" class:is-selected={service.isSelected}>
					<button
						class="service-btn w-full h-full"
						on:click={() => services.select(service.provider_id)}
					>
						<div class="inner-btn">
							<div class="div w-12 h-12 mb-2">
								<img src={`https://image.tmdb.org/t/p/original${service.logo_path}`} alt="" />
							</div>
							<span class="text-sm font-bold">{service.provider_name}</span>
						</div>
					</button>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	.inner-btn {
		@apply flex flex-col items-center justify-between bg-black py-3 w-full h-full;
	}
	.is-selected {
		@apply rounded-lg;
		background: var(--gradient-primary);
	}
</style>

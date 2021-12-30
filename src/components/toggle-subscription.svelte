<script lang="ts">
	import subscriptions from '../stores/toggle-subscriptions';
	import services from '../stores/services';
</script>

<div class="flex flex-col items-center w-full">
	<div class="border-2 border-purple-600 rounded-lg bg-purple-800">
		<button
			class="toggle-btn"
			class:is-active={$subscriptions}
			on:click={() => subscriptions.toggle(true)}>My Subscriptions</button
		>
		<button
			class="toggle-btn"
			class:is-active={!$subscriptions}
			on:click={() => subscriptions.toggle(false)}>All Subscriptions</button
		>
	</div>

	<div class="relative bg-red-500 w-full">
		{#if $subscriptions}
			<ul class="grid grid-cols-8 gap-6 absolute -top-2 z-[-1] bg-black/90 p-5 rounded-xl">
				{#each $services as service}
					<li class="flex justify-center">
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
</div>

<style>
	.service-btn {
		@apply flex flex-col items-center opacity-75;
	}
	.is-selected {
		@apply opacity-100;
	}
	.toggle-btn {
		@apply py-2 px-4 text-xl border-2 border-transparent text-purple-200;
	}
	.is-active {
		@apply bg-purple-500 text-white rounded-lg;
	}
</style>

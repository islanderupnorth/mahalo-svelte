<script lang="ts">
	import subscriptions from '../stores/toggle-subscriptions';
	import SelectSubscriptions from './select-subscriptions.svelte';

	import { getContext } from 'svelte';

	const { open } = getContext('simple-modal');

	const showSubscriptions = () => {
		subscriptions.toggle(true);
		open(SelectSubscriptions);
	};
</script>

<div class="flex flex-col items-center w-full">
	<div class="border-2 border-slate-800 rounded-lg bg-black">
		<button class="toggle-btn" class:is-active={$subscriptions} on:click={showSubscriptions}
			>Only My Services</button
		>
		<button
			class="toggle-btn"
			class:is-active={!$subscriptions}
			on:click={() => subscriptions.toggle(false)}>All Services</button
		>
	</div>
</div>

<style>
	.toggle-btn {
		@apply py-2 px-4 text-sm uppercase font-semibold border-2 border-transparent;
	}
	.is-active {
		background: var(--gradient-primary);
		@apply text-white rounded-lg border-white/70;
	}
</style>

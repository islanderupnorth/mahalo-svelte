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
	<div class="border-2 border-purple-600 rounded-lg bg-purple-800">
		<button class="toggle-btn" class:is-active={$subscriptions} on:click={showSubscriptions}
			>My Subscriptions</button
		>
		<button
			class="toggle-btn"
			class:is-active={!$subscriptions}
			on:click={() => subscriptions.toggle(false)}>All Subscriptions</button
		>
	</div>
</div>

<style>
	.toggle-btn {
		@apply py-2 px-4 text-xl border-2 border-transparent text-purple-200;
	}
	.is-active {
		@apply bg-purple-500 text-white rounded-lg;
	}
</style>

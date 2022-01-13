<script lang="ts">
	import searchResults, { queryApi } from '../stores/search';
	import ToggleSubscription from './toggle-subscription.svelte';
	import Modal from './modal.svelte';
	import { modal } from '../stores/modal';

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

<section class="hero-bg">
	<div
		class="section-inner min-h-screen flex-center transition-colors will-change-transform"
		class:is-searching={$searchResults.length > 0}
	>
		<div class="inner flex flex-col items-center">
			<h1 class="text-5xl text-center font-thin transition-colors">
				All <strong>streaming</strong> <br /> services <strong>in one place</strong>
			</h1>
			<div class="input-container my-8">
				<input
					id="search-input"
					type="text"
					bind:value={searchValue}
					on:input={debounceInput}
					autofocus
					placeholder="Search"
				/>
			</div>
			<Modal show={$modal}>
				<ToggleSubscription />
			</Modal>
		</div>
	</div>
</section>

<style>
	strong {
		@apply font-semibold;
	}
	input {
		background-color: var(--black);
		@apply text-center rounded-full text-5xl shadow-md p-2 pb-3 appearance-none outline-none caret-purple-500;
	}
	input::placeholder {
		@apply font-extralight text-4xl text-white/30;
	}
	.is-searching {
		background-color: var(--black);
		transform: translateY(-13%);
	}
	.input-container {
		background: var(--gradient-primary);
		padding: 3px;
		@apply rounded-full flex items-center justify-center;
	}
</style>

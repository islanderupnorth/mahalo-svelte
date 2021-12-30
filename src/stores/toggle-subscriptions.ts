import { writable } from 'svelte/store';

const toggleSubscriptions = () => {
	const { subscribe, update } = writable(true);

	return {
		subscribe,
		toggle: (boolean) => update(() => boolean)
	};
};

const subscriptions = toggleSubscriptions();

export default subscriptions;

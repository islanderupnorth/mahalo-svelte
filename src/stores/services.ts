import { writable } from 'svelte/store';
import STREAMING_SERVICES from '../constants/providers.json';

export const initialServices = STREAMING_SERVICES.map((service) => ({
	...service,
	isSelected: false
}));

const selectService = () => {
	const { subscribe, update } = writable(initialServices);

	const select = (id) =>
		update((n) => {
			return n.map((s) => {
				if (s.provider_id === id) return { ...s, isSelected: !s.isSelected };
				return s;
			});
		});

	return {
		subscribe,
		select
	};
};

const services = selectService();

export default services;

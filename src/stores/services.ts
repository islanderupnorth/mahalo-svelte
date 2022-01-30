import { writable } from 'svelte/store';
import STREAMING_SERVICES from '../constants/providers.json';

let localStorageServices = null;

if (typeof window !== 'undefined') {
	localStorageServices = window?.localStorage.getItem('services');
}

export const initialServices =
	JSON.parse(localStorageServices) ||
	STREAMING_SERVICES.map((service) => ({
		...service,
		isSelected: false
	}));

const selectService = () => {
	const { subscribe, update } = writable(initialServices);

	const select = (id) =>
		update((n) => {
			const updateArr = n.map((s) => {
				if (s.provider_id === id) return { ...s, isSelected: !s.isSelected };
				return s;
			});
			const stringifyArr = JSON.stringify(updateArr);
			if (typeof window !== 'undefined') {
				window?.localStorage.setItem('services', stringifyArr);
			}
			return updateArr;
		});

	return {
		subscribe,
		select
	};
};

const services = selectService();

export default services;

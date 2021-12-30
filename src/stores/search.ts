import { writable } from 'svelte/store';
import { variables } from '$lib/variables';

const searchResults = writable([]);

export default searchResults;

interface Params {
	query?: string;
	id?: number;
}

const request = async (slug: string, params: Params) => {
	let url = variables.baseUrl + slug;

	if (params?.query) url += `?api_key=${variables.apiKey}` + `&query=${params.query}`;
	else if (params?.id)
		url += `/${params.id}?api_key=${variables.apiKey}&append_to_response=watch/providers&language=en-US&watch_region=DK`;
	else url += variables.apiKey;

	return await fetch(url).then((response) => response.json());
};

export const queryApi = async (searchValue: string) => {
	if (searchValue === '') return searchResults.update(() => []);

	const query = searchValue.trim().replace(/\ /g, '+');
	const searchQuery = await request('/search/multi', { query });
	const requests = await searchQuery.results?.map(({ id, media_type }) =>
		request(`/${media_type}`, { id })
	);
	const allRequests = await Promise.all(requests);
	const results = allRequests.map((item) => ({
		...item,
		providers: item['watch/providers']?.results.DK || null
	}));

	return searchResults.update(() => results);
};

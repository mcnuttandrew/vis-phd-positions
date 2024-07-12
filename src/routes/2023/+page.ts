import { tsvParse } from 'd3-dsv';

import { base } from '$app/paths';
import type { PageLoad } from './$types';
import type { Position2324 } from '$lib/app-types';

export const load: PageLoad = async ({ fetch }) => {
	const data = await fetch(`${base}/positions-23-24.tsv`)
		.then((x) => x.text())
		.then((x) => tsvParse(x))
		.then((x) => {
			return x.sort((a, b) =>
				a['University '].localeCompare(b['University '])
			) as unknown as Position2324[];
		});

	return { data };
};

import { tsvParse } from 'd3-dsv';

import { base } from '$app/paths';
import type { PageLoad } from './$types';
import type { Position2425 } from '$lib/app-types';

export const load: PageLoad = async ({ fetch }) => {
	const data = await fetch(`${base}/positions-24-25.tsv`)
		.then((x) => x.text())
		.then((x) => tsvParse(x))
		.then((x) =>
			(x as unknown as Position2425[])
				.sort((a, b) => a['University'].localeCompare(b['University']))
				.filter((x) => x['University'] !== '')
		);

	return { data };
};

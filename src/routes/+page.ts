import { tsvParse } from 'd3-dsv';

import { base } from '$app/paths';
import type { PageLoad } from './$types';
import type { Position2425 } from '$lib/app-types';

const termMap: Record<string, string> = {
	Timestamp: 'Timestamp',
	"What is your name? (don't include your title)": 'Name',
	'Do you have a personal website to direct students to? If so, what is it? If not, leave blank':
		'Personal Website',
	'What university are you affiliated with?': 'University',
	"What is your University's relevant website? E.g. departement/school/etc": 'University Website',
	'Do you have a lab website to direct students to? If so, what is it? If not, leave blank':
		'Lab Website',
	'What email address should (potential) students use to contact you? ': 'Email',
	'What positions are you offering? ': 'Positions',
	'What is the timeline for hiring? E.g. Fall25 for positions starting fall 25': 'Timeline',
	'What topics are relevant to the position? E.g. Perception, ML Interpretability, Visual Analytics, etc':
		'Topics'
};

export const load: PageLoad = async ({ fetch }) => {
	const data = await fetch(`${base}/positions-24-25.tsv`)
		.then((x) => x.text())
		.then((x) => tsvParse(x))
		.then((x) =>
			(x as unknown as any[])
				.map((x) => {
					const y = { ...x };
					for (const key in x) {
						y[termMap[key]] = x[key];
					}
					return y as Position2425;
				})
				.sort((a, b) => a['University'].localeCompare(b['University']))
				.filter((x) => x['Timestamp'] !== '')
		);

	return { data };
};

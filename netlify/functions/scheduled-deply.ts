import fetch from 'node-fetch';
import { schedule } from '@netlify/functions';

const BUILD_HOOK = 'https://api.netlify.com/build_hooks/669154ae0eec97140b14bff7';

const handler = schedule('0 0 * * *', async () => {
	await fetch(BUILD_HOOK, {
		method: 'POST'
	}).then((response) => {
		console.log('Build hook response:', response);
	});

	return {
		statusCode: 200
	};
});

export { handler };

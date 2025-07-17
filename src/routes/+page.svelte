<script lang="ts">
	import type { Position2425 } from '$lib/app-types';

	export let data: { data: Position2425[] };

	$: schools = Object.entries(
		data.data.reduce(
			(acc, row) => {
				acc[row['University']] = (acc[row['University']] || []).concat(row);
				return acc;
			},
			{} as Record<string, Position2425[]>
		)
	);
</script>

<div class="header full-width">
	<h1>Open Grad Positions in Visualization</h1>
	<h3>
		Previous years: <div><a href="./2023">2023-24</a><a href="./2024">2024-25</a></div>
	</h3>
</div>
<div class="container">
	<div>
		This site has been retired and is now maintained for archival purposes. See <a
			href="https://www.vispositions.com/">vispositions.com/</a
		> for a similar resource that is actively maintained.
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}
	.container > div {
		max-width: 800px;
		margin: 20px;
		padding: 10px;
		background: #f0f0f0;
		border-radius: 5px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}
	.header {
		align-items: center;
		background: #009688;
		color: white;
		display: flex;
		justify-content: center;
		flex-direction: column;
		padding: 45px;
		box-sizing: border-box;
	}

	h1 {
		font-size: 4em;
		font-weight: 100;
		margin: 0;
		padding: 0;
		text-align: center;
	}

	.full-width {
		width: 100%;
	}

	.header a {
		margin-left: 20px;
	}

	@media (max-width: 640px) {
		main {
			overflow-x: hidden;
			margin: 0;
		}
		.header {
			padding: 20px;
		}
		.header h1 {
			font-size: 2em;
			text-align: center;
		}
	}
</style>

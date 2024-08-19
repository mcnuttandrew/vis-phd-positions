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
	<h2>Current Year: 2024-25</h2>
	<h3>Previous years: <a href="./2023">2023-24</a></h3>
</div>
<main>
	<div class="full-width">
		<p>
			Are you considering a Ph.D. in visualization? Or some related position (MS, PostDoc, etc)? Not
			sure who is hiring? Not sure where to start looking for positions? This is an actively
			maintained (
			<i>for Fall 2024-Spring 2025</i>
			) page describing some open positions in this field. There are doubtless other locations hiring,
			but we hope that this will give you a nice start in your search.
		</p>
		<h3 class="thick-line">FAQ</h3>
		<p>
			<b>What if I like other things besides visualization?</b>
			The set of postings refer
			<i>very</i>
			broadly to the field of visualization and you should look at each persons work to see how they
			understand it and if your interests are shared. There's also a
			<a
				target="_blank"
				href="https://www.andrewkuz.net/public/dashboards/cs-hci-phd-opportunities/2024/html/cs-hci-phd-opportunities-2024.html"
			>
				similar list
			</a>
			for people seeking students in HCI more broadly.
		</p>
		<p>
			<b>I would like to list an position on this page, how do I do that?</b>
			If you would like to include a link to a position at your institution please
			<a target="_blank" href="https://forms.gle/tN6ihqEnrEoE7XwN7"> fill out this form. </a>
			The positions on this page should confer a Ph.D. (or other graduate degree) in the field of visualization
			(broadly defined). It is free to post!
		</p>
		<p>
			<b>I have another question, how do I ask it?</b>
			Please
			<a href="https://github.com/mcnuttandrew/vis-phd-positions/issues/new"> file an issue </a>
			and we'll get back to you as soon as we can!
		</p>
	</div>
	<rule />
	<h3 class="thick-line full-width">Open Positions</h3>
	<ul class="positions full-width">
		{#each schools as [schoolName, positions]}
			<li>
				<h3 class="school-name">
					{#if positions[0]['University Website']}
						<a target="_blank" href={positions[0]['University Website']}>
							{schoolName}
						</a>
					{:else}
						{schoolName}
					{/if}
				</h3>
				<ul>
					{#each positions as position}
						<li class="position-row">
							<div>
								<b>
									{`🎓 Professor${position.Name.includes(',') ? 's' : ''}:`}
								</b>

								{#if position['Personal Website']}
									<a target="_blank" href={position['Personal Website']}>
										{position.Name}
									</a>
								{:else}
									{position.Name}
								{/if}
								{#if position['Lab Website'].length}
									<a target="_blank" href={position['Lab Website']}>(Lab Website)</a>
								{/if}
							</div>
							{#if position.Email}
								<div>
									<b>🗣️ Contact:</b>
									{position.Email}
								</div>
							{/if}

							<div>
								🔭
								<b>Positions sought:</b>
								{position.Positions}{#if position['Timeline']}<span class="ml-1">
										({position['Timeline']})</span
									>{/if}
							</div>
							<div>
								📚
								<b>Topics:</b>
								{position.Topics}
							</div>
						</li>
					{/each}
				</ul>
			</li>
		{/each}
	</ul>
	<footer class="full-width thick-line">
		We are grateful to Evan Peck's <a target="_blank" href={'https://cs-pui.github.io/'}>
			PUI page
		</a>
		for inspiration for the form of this page, its content, and its design.
	</footer>
</main>

<style>
	li {
		margin-bottom: 1em;
	}
	main {
		display: flex;
		align-items: center;
		flex-direction: column;
		height: calc(100% + 200px);
		margin: 0 auto;
		/* max-width: 240px; */
		padding: 1em;
		max-width: 600px;
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
	h2 {
		padding: 0;
		margin: 0;
	}

	.full-width {
		width: 100%;
	}

	.positions {
		display: flex;
		flex-direction: column;
	}

	.thick-line {
		border-top: 2px solid black;
	}

	.school-name {
		margin-bottom: 0;
		margin-top: 0;
	}

	footer {
		margin-top: 20px;
		margin-bottom: 20px;
		/* height: 200px; */
	}

	.ml-1 {
		margin-left: 2px;
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

<script>
	import Scroller from "@sveltejs/svelte-scroller";
	// 	import { setContext, onMount } from "svelte";
	import BarChart from "./BarChart.svelte";
	import SplitChart from "./SplitChart.svelte";

	// SCROLLYTELLING CONFIG
	// Config

	let index;
	let top = 0.1;
	let threshold = 0.8;
	let bottom = 0.9;
</script>

<main>
	<section class="intro">
		<a href="https://alexandrakhoo.com"> <img src="media/logo.svg" alt="Click to go back to homepage" width="40"> </a>
		<h1>2020 Census: <br />
Gender Roles, Marriage, and Work</h1>
		<p>
			July 2021
		</p>
		<p>How do these forces play out in Singapore? The latest census data gives us a chance to find out</p>
		<div class="scroll-arrow">
			<div class="arrow-text">
				↓<br> scroll
			</div>
			<img style="display:inline;" width=100% src="media/census_illustration_1.png" alt="A crowd of people" />
		</div>
	</section>

	<Scroller {top} {threshold} {bottom} bind:index>
		<div slot="background">
			<SplitChart frameIndex={index} />
		</div>

		<div slot="foreground">
			<section>
				<div class="col-medium">
					<p>
						Let's see how the workforce divides between the sexes. It's almost even, just slightly more men than women.
					</p>
				</div>
			</section>
			<section>
				<div class="col-medium">
					<p>
						If we take a look at the <span class="em" style="background-color: lightgrey"> top-earners</span>, those with a gross monthly income of $15,000 or more, majority are <span class="em" style="background-color: lightgrey">men</span>.
					</p>
				</div>
			</section>
			<section>
				<div class="col-medium">
					<p>
						But the split looks rather different if we zoom in on <span class="em" style="background-color: lightgrey">singles</span> within this <span class="em" style="background-color: lightgrey">same group</span> of top-earners.
					</p>
				</div>
			</section>
		</div>
	</Scroller>

	<section>

		<p>What about people outside the workforce?</p>
		<p>There are a variety of reasons why some may not be working.</p>
		<img style="display:inline;" width=100% src="media/census_illustration_2.png" alt="A collection of items representing reasons for not working like cooking wok and walking stick" />

	</section>

	<Scroller {top} {threshold} {bottom} bind:index>

		<div slot="background">
			<BarChart frameIndex={index} />
		</div>

		<div slot="foreground">
			<section>
				<div class="col-medium">
					<p>
						If you're a <span class="em" style="background-color: lightgrey">woman</span> outside the workforce, chances are it's because you're taking care of the household in some way.
					</p>
				</div>
			</section>
			<section>
				<div class="col-medium">
					<p>
						This pattern holds especially for <span class="em" style="background-color: lightgrey">married woman</span> .
					</p>
				</div>
			</section>
			<section>
				<div class="col-medium">
					<p>
						What about <span class="em" style="background-color: lightgrey">married men</span> ? The most common reason for not working is due to retirement or old age.
					</p>
				</div>
			</section>
		</div>

	</Scroller>



	<p>
		Of course, numbers aren't the same thing as people's lived experience; they can only tell part of the story. </p>
	<p>

		However, they show that women today still have a delicate balancing act between married life and work if they choose both.
	</p>


	<section class="outro">
			<p>
			<strong>Data Source:</strong> <a href="https://www.singstat.gov.sg/census2020/census-2020">2020 Census of Population</a>
			by Department of Statistics Singapore
		</p>
		<p>
			The first dataviz looks at the breakdown of employed residents by sex from three different angles: first, the employed in the aggregate, then those within the highest income bracket, and finally, those who within the bracket who
			have never been married (the census definition of "single" status).
		</p>
		<p>
			The second dataviz looks at the breakdown of unemployed residents by their main reason for not working, focusing on one demographic at a time: women in general, married women, and married men.
			As the census samples residents aged 15 years old and above, the singles demographic includes residents of schooling age. Unsurprisingly, education/training is this segment's main reason for not working, whether men or women, and this aspect is
			not shown in the story.
		</p>
		<p>
			<strong>Produced by:</strong> Alexandra Khoo
		</p>
		<p>
			Special thanks to the following folks for generously sharing their insights and code:
			<br />
			- Ahmad Barclay on <a href="https://digitalblog.ons.gov.uk/2021/06/02/how-we-build-scrollytelling-articles/">using Svelte for scrollytelling</a>
			<br /> - Russell Goldenberg and Amelia Wattenberg on <a href="https://github.com/russellgoldenberg/svelte-bar-chart-race">creating a bar chart race</a>
		</p>
		<p>
		<a href="https://alexandrakhoo.com"> <img src="media/logo.svg" alt="Click to go back to homepage" width="40"> <br />	Return to homepage </a>

		</p>



	</section>

</main>

<style>
	main {
		/* text-align: center; */
		padding: 1em;
		max-width: 500px;
		margin: 0 auto;
	}


	section {
		height: 100vh;
	}

	.outro {
		margin-top: 5em;
		border-top: 1px solid gray;
	}

	.outro p {
		line-height: 1.4;
		font-size: 0.9em;
	}

	p {
		font-size: 1.1em;
	}




	[slot="foreground"] section {
		padding: 100vh 0 100vh 0;
	}

	[slot="foreground"] section+section {
		padding: 0 0 100vh 0;
	}
</style>

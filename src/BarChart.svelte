<script>
  import { scaleLinear } from "d3";
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import { tweened } from "svelte/motion";

  import Bars from "./Bars.svelte";
  import Axis from "./Axis.svelte";
  import Labels from "./Labels.svelte";


  import keyframes from "./keyframes.js";

  const duration = 300; // ms between keyframes
  const barCount = 6; // how many bars to show
  const barMargin = 4; // space between bars
  const keyframeCount = keyframes.length; // number of keyframes
  const reasons = keyframes[0][1].map((d) => d.reason); // all data labels

  const dimensions = writable({});
  const scales = writable({});
  const data = tweened(null, { duration });
  const xMax = tweened(null, { duration });

  let figureWidth = 0;
  let figureHeight = 0;
  let currentKeyframe = 0;
  let isEnabled = false;
	export let frameIndex = 0;

  // update dimensions
  $: width = figureWidth;
  $: height = figureHeight;
  $: barHeight = height / barCount - barMargin;

  // update data
  $: isEnabled = currentKeyframe < keyframeCount;
//   $: frameIndex = Math.min(currentKeyframe, keyframeCount - 1);
  $: frame = keyframes[frameIndex];
  $: keyframeDemographic = frame[0];
  $: keyframeData = frame[1];
  $: currentData = reasons.map((reason) => ({
    ...keyframeData.find((d) => d.reason == reason),
  }));

  // update stores and context
  $: data.set(currentData);
  $: dimensions.set({
    width,
    height,
    barHeight,
    barMargin,
  });
  $: xMax.set(Math.max(...keyframeData.map((d) => d.value))*1.4);
  $: scales.set({
    x: scaleLinear().domain([0, $xMax]).range([0, $dimensions.width]),
    y: scaleLinear().domain([0, barCount]).range([0, $dimensions.height]),
  });
  $: chartContext = { dimensions, scales, data, reasons };
  $: setContext("BarChart", chartContext);
</script>

<h2>
	{keyframeDemographic}'s Main Reason for Not Working
</h2>
  <figure bind:offsetWidth="{figureWidth}" bind:offsetHeight="{figureHeight}">
    <div class="bars">
      <Bars barCount="{barCount}" />
    </div>

    <div class="axis">
      <Axis />
    </div>

    <div class="labels">
      <Labels barCount="{barCount}" />
    </div>

  </figure>


<style>
  figure {
    display: block;
    position: relative;
    width: 100%;
    height: 50vh;
    min-height: 420px;
    margin: 0;
    user-select: none;
  }

  figure > * {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .axis {
    overflow: visible;
  }
</style>

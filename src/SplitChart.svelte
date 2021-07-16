<script>
  import {
    format
  } from "d3";
  import {
    writable
  } from "svelte/store";
  import {
    tweened
  } from "svelte/motion";

  import earnings from "./earnings.js";

  const duration = 300;
  const dimensions = writable({});
  const scales = writable({});
  const menPercent = tweened(0, {
    duration
  });
  const womenPercent = tweened(0, {
    duration
  });
  const formatNumber = (d) => format(",.0f")(d * 100);

  let figureWidth = 0;
  let figureHeight = 0;

  export let frameIndex = 0;

  // update dimensions
  $: width = figureWidth;
  $: height = figureHeight;

  // update data
  $: frame = earnings[frameIndex];
  $: keyframeData = frame[1];

  // update stores
  $: dimensions.set({
    width,
    height
  });

  $: menPercent.set(keyframeData[1].value)
  $: womenPercent.set(keyframeData[0].value)
</script>

<h2>
  Makeup of the Workforce
</h2>
<figure bind:offsetWidth="{figureWidth}" bind:offsetHeight="{figureHeight}">
  <div class="parent-box">
    <div class="left-box"></div>
    <div class="right-box"></div>
  </div>
  <div class="middle-parent-box">
    <div class="left-box">
      <div class="men-box" style="width:{formatNumber($menPercent)}%">
      </div>
    </div>
    <div class="right-box">
      <div class="women-box" style="width:{formatNumber($womenPercent)}%">
      </div>
    </div>
  </div>
  <div class="parent-box">
    <div class="left-box">
      <p class="label">
        Men
      </p>
      <p class="value">
        {formatNumber($menPercent)}%
      </p>
    </div>
    <div class="right-box">
      <p class="label">

        Women
      </p>
      <p class="value">
        {formatNumber($womenPercent)}%
      </p>
    </div>
  </div>
</figure>

<style>


  .parent-box {
    height: 40px;
    display: flex;

  }

  .middle-parent-box {
    display: flex;

  }

  .left-box {
    text-align: right;
    width: 50%;

  }

  .right-box {
    width: 50%;
    border-left: 3px solid #000;
  }

  .men-box {
    float: right;
    background-color: #1B909D;
    height: 200px;
  }

  .women-box {
    background-color: #FF571F;
    height: 200px;
  }

  .label {
    font-weight: bold;
  }

  .value {
    font-weight: bold;
    font-size: 0.75em;
    /* font-feature-settings: "tnum"1; */
  }

  p {
    margin: 2% 5% 0 5%;
  }
</style>

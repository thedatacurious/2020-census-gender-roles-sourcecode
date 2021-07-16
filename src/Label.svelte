<script>
  import { getContext } from "svelte";
  import { format } from "d3";
  export let value;
  export let rank;
  export let i;
  const { reasons, scales, dimensions } = getContext("BarChart");
  const formatNumber = (d) => format(",.0f")(d * 100) + "%";
  $: x = $scales.x(value);
  $: y = $scales.y(rank) + $dimensions.barMargin / 2;
  $: height = $dimensions.barHeight;
</script>

<div
  class="label"
  style="height: {height}px; transform: translate({x}px, {y}px);"
>
  <div class="inner">
    <p class="label">{reasons[i]}</p>
    <p class="value">{formatNumber(value)}</p>
  </div>
</div>

<style>
  .label {
    position: absolute;
    left: 0;
    top: 0;
  }
  .inner {
    transform: translate(5%, 0);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 0.9em;
    height: 100%;
  }
  p {
    margin: 0;
    font-size: 1em;
    text-align: left;
  }

  .label {
    font-weight: 600;
  }

  .value {
    margin: auto 0 0 0;
    font-size: 0.75em;
    /* font-feature-settings: "tnum" 1; */
  }
</style>

<script>
  import { getContext } from "svelte";
  import Bar from "./Bar.svelte";
  import colors from "./colors.js";
  const { data } = getContext("BarChart");
  const colorCount = colors.length;
  export let barCount;
</script>

{#each $data as { value, rank }, i (i)}
  {#if rank < barCount}
    <Bar value="{value}" rank="{rank}" fill="{colors[i % colorCount]}" />
  {/if}
{/each}

<script>
  import { createEventDispatcher, onMount } from "svelte";
  import { fly } from "svelte/transition";
  import viewport from "../../utils/useViewportAction";

  const dispatch = createEventDispatcher();

  let tipShow = false;

  export let id;
  export let img;
  export let title;
  export let desc;

  // Positioning...
  export let ecosystem;
  export let top;
  export let left;
  export let mouseCoord;

  onMount(() => {
    console.log({ img, title, top, left });
  });
</script>

<a
  href="/job-page?id={id}&ecosystem={ecosystem}"
  class="absolute flex flex-col items-center justify-center text-center rounded-full text-white text-xs"
  style="top: {top}%; left: {left}%;"
  on:mouseenter={() => (tipShow = true)}
  on:mouseleave={() => (tipShow = false)}
  use:viewport
  on:enterViewport={(e) => e.target.classList.add("xyz-in")}
  on:exitViewport={(e) => e.target.classList.remove("xyz-in")}
>
  <div class="">
    <img class="w-16" src={img} alt={img} />
  </div>
  <div class="">
    {title}
  </div>
</a>

{#if tipShow}
  <div
    class="fixed bg-green-500 py-2"
    style="left: {mouseCoord.x}px; top: {mouseCoord.y}px;"
  >
    <div
      transition:fly={{ duration: 250, y: 200 }}
      class="clippy absolute top-8 -left-10 w-[10rem] md:w-[16rem] px-2 py-2 text-xs rounded-md shadow-lg bg-black/70 text-white h-font border border-white/50"
    >
      <div class="flex items-center no-pt-8 now pt-1">
        {desc}
      </div>
    </div>
  </div>
{/if}

<style>
  @media (max-width: 600px) {
    ::-webkit-scrollbar {
      width: 0px;
      height: 0px;
    }
  }

  /* .clippy {
    clip-path: polygon(18% 0, 96% 31%, 100% 100%, 0 100%, 0 26%);
  } */
</style>

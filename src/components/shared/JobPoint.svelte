<script>
  import { createEventDispatcher, onMount } from "svelte";
  import { fly } from "svelte/transition";
  import viewport from "../../utils/useViewportAction";

  const dispatch = createEventDispatcher();

  let tipShow = false;

  export let id;
  // export let img;
  export let title;
  export let desc;

  // Positioning...
  export let ecosystem;
  export let mouseCoord;
  // ...
  let top;
  let left;

  let MAPPER = [
    {
      id: 1, // Environmental practitioner
      top: "55",
      left: "15",
    },
    {
      id: 2, // Energy Catcher
      top: "20",
      left: "84.5",
    },
    {
      id: 3, // Water treatment Operator
      top: "45",
      left: "11.75",
    },
    {
      id: 4, // Digital Twin Ecosystem Architect
      top: "45",
      left: "40",
    },
    {
      id: 5, // Digital Twin Ecosystem manager
      top: "50",
      left: "30",
    },
    {
      id: 6, // Sustainable packaging technologist
      top: "20",
      left: "56",
    },
    {
      id: 7, // Supply safety consultant
      top: "58.5",
      left: "22.5",
    },
    {
      id: 8, // Circulated economy designer
      top: "27.5",
      left: "62.5",
    },
    {
      id: 9, // Food plant cybersecurity specialist
      top: "55",
      left: "75",
    },
    {
      id: 10, // Food logistics specialist
      top: "54.5",
      left: "26",
    },
    {
      id: 11, // Food waste recycling specialist
      top: "46",
      left: "74",
    },
    {
      id: 12, // Architect of blockchain platforms for food & be
      top: "13.5",
      left: "41.5",
    },
    {
      id: 13, // System modernization engineer
      top: "45",
      left: "52.5",
    },
    {
      id: 14, // Designer of robotic systems for plants
      top: "57.5",
      left: "46.5",
    },
    {
      id: 15, // Climate change data analyst
      top: "14",
      left: "52.25",
    },
    {
      id: 16, // Environmental evangelist
      top: "20",
      left: "47.5",
    },
    {
      id: 17, // Cost accounting manager
      top: "10",
      left: "66.5",
    },
    {
      id: 18, // Agriculture sustainability analyst
      top: "16.5",
      left: "12.5",
    },
    {
      id: 19, // Food biochemist
      top: "48",
      left: "86",
    },
    {
      id: 20, // System risk manager
      top: "16.5",
      left: "72",
    },
  ];

  onMount(() => {
    top = MAPPER.find((coord) => coord.id == id).top;
    left = MAPPER.find((coord) => coord.id == id).left;
  });
</script>

<a
  href="/job-page?id={id}&ecosystem={ecosystem}"
  class="absolute flex flex-col items-center justify-center text-center rounded-full text-xs"
  style="top: {top}%; left: {left}%;"
  on:mouseenter={() => (tipShow = true)}
  on:mouseleave={() => (tipShow = false)}
  on:enterViewport={(e) => e.target.classList.add("xyz-in")}
  on:exitViewport={(e) => e.target.classList.remove("xyz-in")}
  use:viewport
>
  <ion-icon name="location" class="text-white text-2xl mr-1" />
  <div class="max-w-[8.5rem] text-white font-bold">
    {title}
  </div>
</a>

{#if tipShow}
  <div
    class="fixed bg-green-500 py-2 z-50"
    style="left: {mouseCoord.x}px; top: {mouseCoord.y}px;"
  >
    <div
      transition:fly={{ duration: 100, y: 200 }}
      class="clippy absolute top-8 -left-10 w-[10rem] md:w-[16rem] px-2 py-2 text-xs rounded-md shadow-lg bg-black/70 text-white h-font border border-white/50"
    >
      <div class="flex items-center line-clamp-6 pt-8 no-pt-1">
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

  .clippy {
    clip-path: polygon(18% 0, 96% 31%, 100% 100%, 0 100%, 0 26%);
  }
</style>

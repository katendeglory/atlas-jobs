<script>
  import get from "lodash.get";
  import { createEventDispatcher, onMount } from "svelte";
  import { fly } from "svelte/transition";
  import viewport from "../../utils/useViewportAction";

  const dispatch = createEventDispatcher();

  let tipShow = false;

  export let id;
  // export let img;
  export let title;
  export let desc;
  export let isAtRisk;
  export let isTransforming;

  // Positioning...
  export let ecosystem;
  export let mouseCoord;
  // ...
  let top;
  let left;

  let MAPPER = [
    /**
     *
     *  20 JOBS
     *
     **/
    {
      id: 1, // Environmental practitioner
      top: "55",
      left: "15",
    },
    {
      id: 2, // Energy Catcher
      top: "22.5",
      left: "75",
    },
    {
      id: 3, // Water Manager
      top: "46",
      left: "16",
    },
    {
      id: 4, // Digital Twin Ecosystem Architect
      top: "45",
      left: "40",
    },
    {
      id: 5, // Digital Twin Ecosystem manager
      top: "44",
      left: "27.5",
    },
    {
      id: 6, // Sustainable packaging technologist
      top: "21",
      left: "56",
    },
    {
      id: 7, // Supply safety consultant
      top: "55",
      left: "62.5",
    },
    {
      id: 8, // Circular economy designer
      top: "58.5",
      left: "35",
    },
    {
      id: 9, // Food plant cybersecurity specialist
      top: "55",
      left: "75",
    },
    {
      id: 10, // Food logistics specialist
      top: "57.5",
      left: "46.5",
    },
    {
      id: 11, // Food waste recycling specialist
      top: "46",
      left: "74",
    },
    {
      id: 12, // Architect of blockchain platforms for food & be
      top: "18.5",
      left: "30",
    },
    {
      id: 13, // System modernization engineer
      top: "45",
      left: "52.5",
    },
    {
      id: 14, // Designer of robotic systems for plants
      top: "53",
      left: "26",
    },
    {
      id: 15, // Climate change data analyst
      top: "37.5",
      left: "55",
    },
    {
      id: 16, // Environmental evangelist
      top: "21",
      left: "47.5",
    },
    {
      id: 17, // Carbon Cost accounting manager
      top: "35",
      left: "30",
    },
    {
      id: 18, // FOOD SUPPLY SUSTAINABILITY ANALYST
      top: "12.5",
      left: "20",
    },
    {
      id: 19, // Food biochemist
      top: "34",
      left: "75",
    },
    {
      id: 20, // AI SYSTEMS RISK ANALYST
      top: "15",
      left: "65",
    },
    {
      id: 36, // ESG Specialist
      top: "27.5",
      left: "45",
    },
    /**
     *
     *  JOBS AT RISK
     *
     **/
    {
      id: 21, // Operations Supervisor
      top: "55",
      left: "15",
    },
    {
      id: 22, // L & D Facilitators
      top: "22.5",
      left: "50.5",
    },
    {
      id: 23, // Warehouse Pickers
      top: "45",
      left: "11.75",
    },
    {
      id: 24, // Stock-takers
      top: "45",
      left: "40",
    },
    {
      id: 25, // Production Planner/buyer
      top: "45",
      left: "52.5",
    },
    {
      id: 26, // Courier
      top: "57.5",
      left: "46.5",
    },
    {
      id: 27, // Maintenance Staff
      top: "55",
      left: "75",
    },
    {
      id: 28, // Supply chain to put the product to market
      top: "46",
      left: "74",
    },
    /**
     *
     * TRANSFORMING JOBS
     *
     *
     **/
    {
      id: 29, // Operator + Artisan → Equipment Operational specialist
      top: "22.5",
      left: "18.5",
    },
    {
      id: 30, // Food scientist / Nutritionist
      top: "35",
      left: "11",
    },
    {
      id: 31, // Marketing Manager
      top: "38",
      left: "20",
    },
    {
      id: 32, // E-commerce designer → Integration software engineer
      top: "40",
      left: "66.5",
    },
    {
      id: 33, // Farmworker → farm technician
      top: "28.5",
      left: "25",
    },
    {
      id: 34, // Logistics planner
      top: "37.5",
      left: "45",
    },
    {
      id: 35, // R&D Manager
      top: "27.5",
      left: "35",
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
  {#if isTransforming}
    <ion-icon name="location-outline" class="text-white text-2xl mr-1" />
  {:else}
    <ion-icon name="location" class="text-white text-2xl mr-1" />
  {/if}
  <div class="max-w-[8.5rem] text-white font-semibold !capitalize line-clamp-2">
    {title.toLowerCase().split("→")[0]}
  </div>
</a>

{#if tipShow}
  <div
    class="hidden sm:block fixed bg-green-500 py-2 z-50"
    style="left: {mouseCoord.x}px; top: {mouseCoord.y}px;"
  >
    <div
      transition:fly={{ duration: 100, y: 200 }}
      class="clippy absolute top-8 -left-10 w-[10rem] md:w-[16rem] px-2 py-2 text-xs rounded-md shadow-lg black-glassmorph text-white h-font border-0 border-black/50"
    >
      <div class="flex items-center line-clamp-6 pt-10 px-1">
        {#if isAtRisk}
          <div class="h-font font-semibold mb-1 text-sm">
            Rationale behind the decrease:
          </div>
        {/if}
        {#if isTransforming}
          {#if get(title.split("→"), `[1]`)}
            <div class="h-font mb-1 pr-2">
              Turning into
              <span class="ml-1 underline capitalize">
                {get(title.toLowerCase().split("→"), `[1]`)}.
              </span>
            </div>
          {/if}
        {/if}
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

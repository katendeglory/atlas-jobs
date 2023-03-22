<script>
  import MAPPER from "./../../utils/MAPPER";
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

  onMount(() => {
    let C = MAPPER.find((x) => x.id == ecosystem).mapper.find(
      (m) => m.id == id
    );

    top = C.top;
    left = C.left;
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

{#if tipShow && Number.parseInt(top) < 50}
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
        <div class="line-clamp-6">
          {desc}
        </div>
      </div>
    </div>
  </div>
{:else if tipShow && Number.parseInt(top) >= 50}
  <div
    class="hidden sm:block fixed bg-green-500 py-2 z-50"
    style="left: {mouseCoord.x}px; top: {mouseCoord.y}px;"
  >
    <div
      transition:fly={{ duration: 100, y: -200 }}
      class="clippy-inversed absolute top-[-12rem] -left-10 w-[10rem] md:w-[16rem] px-2 py-2 text-xs rounded-md shadow-lg black-glassmorph text-white h-font border-0 border-black/50"
    >
      <div class="flex items-center line-clamp-6 pb-10 px-1">
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
        <div class="line-clamp-6">
          {desc}
        </div>
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

  .clippy-inversed {
    clip-path: polygon(0 0, 100% 0, 100% 75%, 18% 100%, 0 75%);
  }
</style>

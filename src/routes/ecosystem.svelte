<script>
  import { onMount } from "svelte";
  import viewport from "../utils/useViewportAction";
  import Container from "../components/utils/Container.svelte";
  import { fly } from "svelte/transition";

  let mouseCoord = { x: 0, y: 0 };
  let background;
  let tipShow = false;

  onMount(() => {
    background.addEventListener("mousemove", (e) => {
      mouseCoord.x = e.clientX;
      mouseCoord.y = e.clientY;
    });
  });
</script>

<!-- ASPECT RATIO -->
<!-- https://github.com/katendeglory/atlas-jobs/blob/cc91509ebf4ca88313e7d54818c13d8cd01f9029/src/routes/farm.svelte -->

<svelte:head>
  <title>Ecosystem Processor | Atlas of Emerging Jobs</title>
</svelte:head>

<div class="bg-black text-white fixed top-0 left-0 w-full z-[60]">
  <Container>
    <div class="h-14 flex items-center justify-between uppercase">
      <a class="nav-link flex items-center" href="/#home"> ATLAS </a>
      <h1 class="text-sm">Ecosystem Processor</h1>
      <div class="" />
    </div>
  </Container>
</div>

<div class="pt-14">
  <div class="map-container w-screen overflow-x-auto">
    <div
      class="relative aspect-[3/2] min-h-screen bg-black/30 bg-blend-overlay"
      style="background-image: url(/images/field.png); background-size: cover;"
      bind:this={background}
      xyz="fade-100% down-3 stagger-2"
    >
      <div
        class="fixed z-0 top-16 w-screen !text-gray-300 text-xs text-center animate-pulse flex items-center justify-center"
      >
        <ion-icon name="compass-outline" class="mr-1 text-xl" /> Scroll to pan the
        map
      </div>

      <div
        class="fixed z-0 top-16 pl-2 text-xs flex items-center justify-start"
      >
        <button
          class="mb-4 flex items-center text-gray-300"
          on:click={() => history.back()}
        >
          <ion-icon name="chevron-back-outline" class="text-lg mr-1" />
          Back
        </button>
      </div>

      <a
        href="/job-page"
        class="absolute top-[12.5%] left-[25%] flex flex-col items-center justify-center text-center rounded-full text-white text-xs"
        on:mouseenter={() => (tipShow = true)}
        on:mouseleave={() => (tipShow = false)}
        use:viewport
        on:enterViewport={(e) => e.target.classList.add("xyz-in")}
        on:exitViewport={(e) => e.target.classList.remove("xyz-in")}
      >
        <ion-icon name="location" class="text-2xl" />
        <div class="">
          Environmental<br />Practictioner
        </div>
      </a>
      <a
        href="/job-page"
        class="absolute top-[45%] left-[37.5%] flex flex-col items-center justify-center text-center rounded-full text-white text-xs"
        on:mouseenter={() => (tipShow = true)}
        on:mouseleave={() => (tipShow = false)}
        use:viewport
        on:enterViewport={(e) => e.target.classList.add("xyz-in")}
        on:exitViewport={(e) => e.target.classList.remove("xyz-in")}
      >
        <ion-icon name="location" class="text-2xl" />
        <div class="">
          Supply safety <br />consultant
        </div>
      </a>
      <a
        href="/job-page"
        class="absolute top-[35%] left-[25%] flex flex-col items-center justify-center text-center rounded-full text-white text-xs"
        on:mouseenter={() => (tipShow = true)}
        on:mouseleave={() => (tipShow = false)}
        use:viewport
        on:enterViewport={(e) => e.target.classList.add("xyz-in")}
        on:exitViewport={(e) => e.target.classList.remove("xyz-in")}
      >
        <ion-icon name="location" class="text-2xl" />
        <div class="">
          Energy
          <br />Catcher
        </div>
      </a>
      <a
        href="/job-page"
        class="absolute top-[29%] left-[75%] flex flex-col items-center justify-center text-center rounded-full text-white text-xs"
        on:mouseenter={() => (tipShow = true)}
        on:mouseleave={() => (tipShow = false)}
        use:viewport
        on:enterViewport={(e) => e.target.classList.add("xyz-in")}
        on:exitViewport={(e) => e.target.classList.remove("xyz-in")}
      >
        <ion-icon name="location" class="text-2xl" />
        <div class="">
          Climate change
          <br />
          data analyst
        </div>
      </a>
      <a
        href="/job-page"
        class="absolute top-[55%] left-[75%] flex flex-col items-center justify-center text-center rounded-full text-white text-xs"
        on:mouseenter={() => (tipShow = true)}
        on:mouseleave={() => (tipShow = false)}
        use:viewport
        on:enterViewport={(e) => e.target.classList.add("xyz-in")}
        on:exitViewport={(e) => e.target.classList.remove("xyz-in")}
      >
        <ion-icon name="location" class="text-2xl" />
        <div class="">
          Designer robotic
          <br />
          systems for plants
        </div>
      </a>
      <a
        href="/job-page"
        class="absolute top-[10%] left-[65%] flex flex-col items-center justify-center text-center rounded-full text-white text-xs"
        on:mouseenter={() => (tipShow = true)}
        on:mouseleave={() => (tipShow = false)}
        use:viewport
        on:enterViewport={(e) => e.target.classList.add("xyz-in")}
        on:exitViewport={(e) => e.target.classList.remove("xyz-in")}
      >
        <ion-icon name="location" class="text-2xl" />
        <div class="">
          Sustainable
          <br />
          packing technologist
        </div>
      </a>
      <a
        href="/job-page"
        class="absolute top-[30%] left-[50%] flex flex-col items-center justify-center text-center rounded-full text-white text-xs"
        on:mouseenter={() => (tipShow = true)}
        on:mouseleave={() => (tipShow = false)}
        use:viewport
        on:enterViewport={(e) => e.target.classList.add("xyz-in")}
        on:exitViewport={(e) => e.target.classList.remove("xyz-in")}
      >
        <ion-icon name="location" class="text-2xl" />
        <div class="">
          Food plant
          <br />
          cybersecurity specialist
        </div>
      </a>
      <a
        href="/job-page"
        class="absolute top-[20%] left-[40%] flex flex-col items-center justify-center text-center rounded-full text-white text-xs"
        on:mouseenter={() => (tipShow = true)}
        on:mouseleave={() => (tipShow = false)}
        use:viewport
        on:enterViewport={(e) => e.target.classList.add("xyz-in")}
        on:exitViewport={(e) => e.target.classList.remove("xyz-in")}
      >
        <ion-icon name="location" class="text-2xl" />
        <div class="">
          Circulated
          <br />
          economy designer
        </div>
      </a>
    </div>
  </div>
</div>

{#if tipShow}
  <div
    class="fixed bg-green-500 py-2"
    style="left: {mouseCoord.x}px; top: {mouseCoord.y}px;"
  >
    <div
      transition:fly={{ duration: 250, y: 200 }}
      class="clippy absolute top-8 -left-10 w-[10rem] md:w-[14rem] px-2 py-2 text-xs rounded-md shadow-lg bg-black/70 text-white h-font border border-white/50"
    >
      <div class="flex items-center pt-8">
        Assesses, improves, and gives advice to companies on environmental
        strategies. Measures the carbon footprint being left by logistics in the
        FoodBev industry.
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

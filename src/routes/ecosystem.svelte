<script context="module">
  import queryString from "query-string";
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ url, params }) {
    let { id } = queryString.parse(window.location.search);
    if (!id) id = "0";
    // window.location = "/";
    return {
      props: {
        id: id,
        qs: queryString,
      },
    };
  }
</script>

<script>
  import { onMount } from "svelte";
  import Container from "../components/utils/Container.svelte";
  import { fly } from "svelte/transition";
  import { valueChains, jobs } from "../stores/data";
  import JobPoint from "../components/shared/JobPoint.svelte";

  let POSITIONS = [
    { top: "05", left: "10" },
    { top: "10", left: "30" },
    { top: "14", left: "50" },
    { top: "18", left: "20" },

    { top: "06", left: "80" },
    { top: "06", left: "50" },
    { top: "22", left: "40" },
    { top: "26", left: "60" },

    { top: "26", left: "80" },
    { top: "30", left: "30" },
    { top: "34", left: "50" },
    { top: "38", left: "70" },

    { top: "55", left: "10" },
    { top: "50", left: "30" },
    { top: "60", left: "50" },
    { top: "64", left: "30" },

    { top: "78", left: "50" },
    { top: "78", left: "70" },
    { top: "80", left: "20" },
    { top: "90", left: "50" },
  ];

  export let id;
  export let qs;

  let valueChain = $valueChains.find((el) => el.id == id);
  let job = $jobs.filter((el) => el.valueChains.find((vc) => vc == id));

  console.log(job);

  job = job.map((j, i) => ({ ...j, ...POSITIONS[i] }));

  let mouseCoord = { x: 0, y: 0 };
  let background;

  onMount(() => {
    // console.log({ valueChain, job });

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

{#if !valueChain}
  <!-- <EcosystemTemp /> -->
  <div class="text-4xl h-screen uppercase flex items-center justify-center">
    Page Not Found
  </div>
{:else}
  <div class="bg-black text-white w-[90vw] fixed top-0 left-0 z-[60]">
    <Container>
      <div class="h-14 flex items-center justify-between uppercase">
        <a class="nav-link flex items-center mr-4" href="/#home"> ATLAS </a>
        <h1 class="text-sm">{valueChain.name}</h1>
        <div class="" />
      </div>
    </Container>
  </div>

  <div class="pt-14">
    <div class="map-container w-screen overflow-x-auto">
      <div
        class="relative aspect-[3/2] min-h-screen bg-black/30 bg-blend-overlay"
        style="background-image: url({valueChain.map}); background-size: cover;"
        bind:this={background}
        xyz="fade-100% down-3 stagger-2"
      >
        <div
          class="fixed z-0 top-16 w-screen !text-gray-300 text-xs text-center animate-pulse flex items-center justify-center"
        >
          <ion-icon name="compass-outline" class="mr-1 text-xl" /> Scroll to pan
          the map
        </div>

        <div
          class="fixed z-0 top-16 pl-2 text-xs flex items-center justify-start"
        >
          <a href="/explore" class="mb-4 flex items-center text-gray-300">
            <ion-icon name="chevron-back-outline" class="text-lg mr-1" />
            Back
          </a>
        </div>

        {#each job as j}
          <JobPoint {...j} {mouseCoord} ecosystem={id} />
        {/each}
      </div>
    </div>
  </div>
{/if}

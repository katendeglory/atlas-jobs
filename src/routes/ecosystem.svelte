<script context="module">
  import queryString from "query-string";
  import axios from "axios";

  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ url, params }) {
    let { id } = queryString.parse(window.location.search);
    if (!id) id = "0";
    // HERE HERE : Make the API Call........................
    // .....................................................
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
  import { valueChains, jobs } from "../stores/data";
  import JobPoint from "../components/shared/JobPoint.svelte";
  import TopNav from "../components/utils/TopNav.svelte";

  export let id;
  export let qs;

  let valueChain = $valueChains.find((el) => el.id == id);
  let job = $jobs.filter((el) => el.valueChains.find((vc) => vc == id));

  job = job.map((j, i) => ({ ...j }));

  let mouseCoord = { x: 0, y: 0 };
  let background;

  const playVideo = (id) => {
    let vid = document.getElementById(id);
    vid.src = "/images/globe-2.mp4";
    vid.preload = "auto";
    vid.muted = true;
    vid.autoplay = true;
    vid.loop = true;
    vid.playsinline = true;
    vid["webkit-playsinline"] = true;
    vid.play();
  };

  onMount(() => {
    // console.log({ valueChain, job });

    background.addEventListener("mousemove", (e) => {
      mouseCoord.x = e.clientX;
      mouseCoord.y = e.clientY;
    });

    playVideo("hero");

    particlesJS.load(
      "particles-js",
      "/js/particlesjs-config-3.json",
      function () {
        console.log("particles.js loaded - callback");
      }
    );
  });
</script>

<!-- ASPECT RATIO -->
<!-- https://github.com/katendeglory/atlas-jobs/blob/cc91509ebf4ca88313e7d54818c13d8cd01f9029/src/routes/farm.svelte -->

<svelte:head>
  <title>Ecosystem Processor | Atlas of Emerging Jobs</title>
</svelte:head>

{#if !valueChain}
  <div class="text-4xl h-screen uppercase flex items-center justify-center">
    Page Not Found
  </div>
{:else}
  <TopNav subtitle={valueChain.name} />

  <div class="pt-14">
    <div class="h-screen w-screen overflow-auto no-gradient">
      <div
        class="[16:9] w-[184vh] h-[103.5vh] md:w-[100vw] md:h-[56.25vw] relative"
        bind:this={background}
      >
        <div class="absolute top-0 left-0 z-0 w-full h-full">
          <div class="w-full h-full">
            <video id="hero" muted autoplay loop playsinline>
              <source src="/images/globe-2.mp4" type="video/mp4" />
            </video>
          </div>
          <div
            class="absolute top-0 left-0 z-0 w-full h-full"
            id="particles-js"
          />
        </div>
        <img
          class="[16:9] w-[184vh] h-[103.5vh] md:w-[100vw] md:h-[56.25vw] absolute top-0 left-0 right-0 bottom-0"
          src="/images/{valueChain.map}"
          alt="map"
          style="background-image: url(/images/map.png); background-size: cover; filter: brightness(70%);"
        />
        <div
          class="[16:9] w-[184vh] h-[103.5vh] md:w-[100vw] md:h-[56.25vw] relative bg-black/0"
          xyz="fade-100% down-3 stagger-2"
        >
          <div
            class="fixed z-0 top-16 w-screen !text-gray-300 text-xs text-center animate-pulse flex lg:hidden items-center justify-center"
          >
            <ion-icon name="compass-outline" class="mr-1 text-xl" /> Scroll to pan
            the map
          </div>

          <div
            class="fixed z-0 top-16 pl-2 text-xs flex items-center justify-start"
          >
            <button
              on:click={() => window.history.back()}
              class="mb-4 flex items-center text-gray-300"
            >
              <ion-icon name="chevron-back-outline" class="text-lg mr-1" />
              Back
            </button>
          </div>

          {#each job as j}
            <JobPoint {...j} {mouseCoord} ecosystem={id} />
          {/each}
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  .gradient {
    background-image: linear-gradient(
      81.48deg,
      #000000 27.21%,
      #8ef680 104.74%
    );
  }
</style>

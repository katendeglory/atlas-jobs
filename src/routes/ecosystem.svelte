<script context="module">
  import queryString from "query-string";

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

  function cancelFullScreen() {
    var el = document;
    var requestMethod =
      el.cancelFullScreen ||
      el.webkitCancelFullScreen ||
      el.mozCancelFullScreen ||
      el.exitFullscreen ||
      el.webkitExitFullscreen;
    if (requestMethod) {
      // cancel full screen.
      requestMethod.call(el);
    } else if (typeof window.ActiveXObject !== "undefined") {
      // Older IE.
      var wscript = new ActiveXObject("WScript.Shell");
      if (wscript !== null) {
        wscript.SendKeys("{F11}");
      }
    }
  }

  function requestFullScreen(el) {
    // Supports most browsers and their versions.
    var requestMethod =
      el.requestFullScreen ||
      el.webkitRequestFullScreen ||
      el.mozRequestFullScreen ||
      el.msRequestFullscreen;

    if (requestMethod) {
      // Native full screen.
      requestMethod.call(el);
    } else if (typeof window.ActiveXObject !== "undefined") {
      // Older IE.
      var wscript = new ActiveXObject("WScript.Shell");
      if (wscript !== null) {
        wscript.SendKeys("{F11}");
      }
    }
    return false;
  }

  function toggleFullScreen(el) {
    if (!el) {
      el = document.body; // Make the body go full screen.
    }
    var isInFullScreen =
      (document.fullScreenElement && document.fullScreenElement !== null) ||
      document.mozFullScreen ||
      document.webkitIsFullScreen;

    if (isInFullScreen) {
      cancelFullScreen();
    } else {
      requestFullScreen(el);
    }
    return false;
  }

  const onFullScreen = () => {
    toggleFullScreen(document.body);
  };

  onMount(() => {
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
            <video id="hero">
              <source src="" type="video/mp4" />
              <track kind="captions" />
            </video>
          </div>
          <div
            class="absolute top-0 left-0 z-0 w-full h-full"
            id="particles-js"
          />
        </div>
        <img
          class="[16:9] w-[184vh] h-[103.5vh] md:w-[100vw] md:h-[56.25vw] absolute top-0 left-0 right-0 bottom-0"
          src={valueChain.map}
          alt="map"
          style="background-image: url(/images/map.png); background-size: cover; filter: brightness(70%);"
        />
        <div
          class="[16:9] w-[184vh] h-[103.5vh] md:w-[100vw] md:h-[56.25vw] relative bg-black/0"
          xyz="fade-100% down-3 stagger-1"
        >
          <div
            class="fixed z-0 top-16 w-screen !text-white text-sm text-center animate-pulse flex items-center justify-center"
          >
            <ion-icon name="compass-outline" class="mr-1 text-xl" /> Scroll to pan
            the map
          </div>

          <button
            on:click={() => window.history.back()}
            class="fixed z-0 top-16 left-2 mb-4 flex items-center text-gray-300 !text-sm"
          >
            <ion-icon name="chevron-back-outline" class="text-lg mr-1" />
            Back
          </button>

          <!-- <button
            on:click={onFullScreen}
            class="fixed z-0 top-16 right-4 mb-4 flex items-center text-gray-300 !text-sm"
          >
            <ion-icon name="scan-outline" class="text-lg" />
          </button> -->

          {#each job as j}
            <JobPoint {...j} {mouseCoord} ecosystem={id} />
          {/each}
        </div>
      </div>
    </div>
  </div>
{/if}

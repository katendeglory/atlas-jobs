<script>
  // https://stackoverflow.com/questions/12813573/position-icons-into-circle
  import VcCenter from "../components/shared/VCCenter.svelte";
  import VCRotator from "../components/shared/VCRotator.svelte";
  import VCPoint from "../components/shared/VCPoint.svelte";
  import { onMount } from "svelte";

  const playVideo = (id) => {
    let vid = document.getElementById(id);
    vid.src = "/images/globe-1.mp4";
    vid.preload = "auto";
    vid.muted = true;
    vid.autoplay = true;
    vid.loop = true;
    vid.playsinline = true;
    vid["webkit-playsinline"] = true;
    vid.play();
  };

  let sectionEL;

  onMount(() => {
    playVideo("hero");
    particlesJS.load(
      "particles-js",
      "/js/particlesjs-config.json",
      function () {
        console.log("particles.js loaded - callback");
      }
    );

    let W = window.innerWidth;
    let D = W * 0.9;
    sectionEL.scrollBy((W - D) * 2, 0);
  });

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
</script>

<svelte:head>
  <title>
    Explore the food and beverage manufacturing industry - Atlas of Emerging
    Jobs
  </title>
</svelte:head>

<section
  class="fixed top-0 left-0 bottom-0 right-0 h-screen w-screen overflow-hidden"
>
  <div class="video-container">
    <video id="hero" muted autoplay loop playsinline>
      <source src="/images/globe-1.mp4" type="video/mp4" />
    </video>
  </div>
  <div
    class="content text-gray-50 overflow-x-auto overflow-y-hidden"
    id="eco-section"
    bind:this={sectionEL}
  >
    <div
      class="absolute top-0 left-0 h-screen w-[140vw] sm:w-screen z-0"
      id="particles-js"
    />
    <div
      class="absolute top-0 left-0 bottom-0 right-0 h-screen w-[140vw] sm:w-screen z-10 flex items-center justify-center"
      style="background-color: rgba(0, 0, 0, .2)"
    >
      <!-- Tips -->
      <div
        class="absolute z-0 top-[4.5rem] w-screen !text-white text-sm text-center animate-pulse flex lg:hidden items-center justify-center"
      >
        <ion-icon name="compass-outline" class="mr-1 text-xl" />
        Scroll to pan the diagram
      </div>

      <!-- <button
        on:click={onFullScreen}
        class="absolute z-0 top-[4.75rem] right-4 mb-4 flex items-center text-gray-300 !text-sm"
      >
        <ion-icon name="scan-outline" class="text-lg" />
      </button> -->

      <button
        on:click={() => (window.location = "/ecosystem?id=11")}
        class="absolute z-0 bottom-4 lg:bottom-[45%] right-4 px-2 py-1 text-xs bg-black/80 rounded-md flex items-center shadow-xl border border-white/10"
      >
        What jobs are at risk
        <ion-icon name="help-circle" class="ml-1 text-xl" />
      </button>

      <div
        class="hidden lg:flex absolute text-gray-400 text-xs z-0 bottom-16 sm:bottom-4 left-0 right-0 items-center justify-center"
      >
        This diagram shows the Food & Beverage Manufacturing Ecosystem. Each box
        represents elements in the journey “from farm to fork”
      </div>
      <!-- End Tips -->

      <div
        class="text-xs md:text-sm h-font absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <div class="circle-container rotating">
          <VCRotator deg={0} />
          <VCRotator deg={30} />
          <VCRotator deg={60} />
          <VCRotator deg={90} />
          <VCRotator deg={120} />
          <VCRotator deg={150} />
          <VCRotator deg={180} />
          <VCRotator deg={210} />
          <VCRotator deg={240} />
          <VCRotator deg={270} />
          <VCRotator deg={300} />
          <VCRotator deg={330} />
        </div>
      </div>

      <div
        class="text-xs md:text-sm h-font absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        xyz="fade-100% down-3 stagger-3"
      >
        <div class="circle-container">
          <VcCenter vc_id="0" deg="none" icon="person" customN="Consumer" />
          <VCPoint vc_id="1" deg={280 + 20} icon="compost" />
          <VCPoint vc_id="2" deg={320 + 20} icon="settings" />
          <VCPoint vc_id="3" deg={0 + 10} icon="store" />
          <VCPoint vc_id="6" deg={40 - 0} icon="recycling" />
          <VCPoint vc_id="8" deg={80 + 10} icon="local_shipping" />
          <VCPoint vc_id="4" deg={120 + 20} icon="shopping_cart" />
          <VCPoint vc_id="10" deg={160 + 10} icon="tips_and_updates" />
          <VCPoint vc_id="7" deg={200 - 0} icon="storefront" />
          <VCPoint vc_id="9" deg={240 - 0} icon="restaurant" />
        </div>
      </div>
    </div>
  </div>
</section>

<!-- {/if} -->
<style>
  /* TODO, Fallback background here */
  .video-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: var(--primary-color)
      url("./https://traversymedia.com/downloads/cover.jpg") no-repeat center
      center/cover;
  }
  .video-container video {
    min-width: 100%;
    min-height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
  }

  .video-container:after {
    content: "";
    z-index: 1;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.05);
    position: absolute;
  }

  .content {
    box-shadow: inset 50vw 0 70px -7px rgba(0, 0, 0, 0.05);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: rgba(0, 0, 0, 0.15);
  }
</style>

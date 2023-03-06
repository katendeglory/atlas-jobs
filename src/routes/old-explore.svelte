<script>
  import { valueChains } from "../stores/data";
  import { onMount } from "svelte";
  // https://stackoverflow.com/questions/12813573/position-icons-into-circle

  // let is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
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

  onMount(() => {
    playVideo("hero");

    particlesJS.load(
      "particles-js",
      "/js/particlesjs-config.json",
      function () {
        console.log("particles.js loaded - callback");
      }
    );
  });

  const goTo = (id) => {
    window.location = `/ecosystem?id=${id}`;
  };
</script>

<section
  class="fixed top-0 left-0 bottom-0 right-0 h-screen w-screen overflow-hidden"
>
  <div class="video-container">
    <video id="hero" muted autoplay loop playsinline>
      <source src="/images/globe-1.mp4" type="video/mp4" />
    </video>
  </div>
  <div class="content text-gray-50 overflow-x-auto overflow-y-hidden">
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
        class="absolute z-0 top-20 w-screen !text-gray-300 text-xs text-center animate-pulse flex md:hidden items-center justify-center"
      >
        <ion-icon name="compass-outline" class="mr-1 text-xl" />
        Scroll to pan the diagram
      </div>

      <button
        class="absolute z-0 bottom-16 sm:bottom-4 right-4 px-2 py-1 text-xs bg-black/80 rounded-md flex items-center shadow-xl border border-white/10"
      >
        What jobs are at risk
        <ion-icon name="help-circle" class="ml-1 text-xl" />
      </button>
      <!-- End Tips -->

      <div class="text-xs md:text-sm h-font" xyz="fade-100% down-3 stagger-3">
        <div class="circle-container">
          <div
            class="vc-box xyz-in center justify-center"
            style="height: 11em !important; border-radius: 9999px !important; margin-top: -5em;"
          >
            <span class="flex items-center justify-center mr-1">
              <span class="material-symbols-outlined text-3xl md:text-4xl">
                person
              </span>
            </span>
            Consumer
          </div>
          <div on:click={goTo($valueChains[0].id)} class="vc-box xyz-in deg280">
            <span class="flex items-center justify-center mr-2">
              <span class="material-symbols-outlined text-3xl md:text-4xl">
                compost
              </span>
            </span>
            Raw Materials
          </div>
          <div on:click={goTo($valueChains[1].id)} class="vc-box xyz-in deg330">
            <span class="flex items-center justify-center mr-2">
              <span class="material-symbols-outlined text-3xl md:text-4xl">
                settings
              </span>
            </span>
            {$valueChains[1].name}
          </div>
          <div on:click={goTo($valueChains[2].id)} class="vc-box xyz-in deg0">
            <span class="flex items-center justify-center mr-2">
              <span class="material-symbols-outlined text-3xl md:text-4xl">
                storefront
              </span>
            </span>
            {$valueChains[2].name}
          </div>
          <div on:click={goTo($valueChains[5].id)} class="vc-box xyz-in deg30">
            <span class="flex items-center justify-center mr-2">
              <span class="material-symbols-outlined text-3xl md:text-4xl">
                recycling
              </span>
            </span>
            {$valueChains[5].name}
          </div>
          <div on:click={goTo($valueChains[7].id)} class="vc-box xyz-in deg80">
            <span class="flex items-center justify-center mr-2">
              <span class="material-symbols-outlined text-3xl md:text-4xl">
                local_shipping
              </span>
            </span>
            {$valueChains[7].name}
          </div>
          <div on:click={goTo($valueChains[3].id)} class="vc-box xyz-in deg130">
            <span class="flex items-center justify-center mr-2">
              <span class="material-symbols-outlined text-3xl md:text-4xl">
                shopping_cart
              </span>
            </span>
            {$valueChains[3].name}
          </div>
          <div on:click={goTo($valueChains[9].id)} class="vc-box xyz-in deg160">
            <span class="flex items-center justify-center mr-2">
              <span class="material-symbols-outlined text-3xl md:text-4xl">
                tips_and_updates
              </span>
            </span>
            {$valueChains[9].name}
          </div>
          <div on:click={goTo($valueChains[6].id)} class="vc-box xyz-in deg200">
            <span class="flex items-center justify-center mr-2">
              <span class="material-symbols-outlined text-3xl md:text-4xl">
                storefront
              </span>
            </span>
            {$valueChains[6].name}
          </div>
          <div on:click={goTo($valueChains[8].id)} class="vc-box xyz-in deg230">
            <span class="flex items-center justify-center mr-2">
              <span class="material-symbols-outlined text-3xl md:text-4xl">
                restaurant
              </span>
            </span>
            {$valueChains[8].name}
          </div>
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

  .vc-box {
    display: flex !important;
    align-items: center !important;
    cursor: pointer;
  }

  .center {
    transform: rotate(0deg) translate(0vh) rotate(0deg);
  }

  /* Desktop */
  @media (min-width: 700px) {
    .circle-container {
      position: relative;
      width: 75vh;
      height: 75vh;
      padding: 2.8em;
      border: dashed 1px;
      border-radius: 50%;
      border-color: #ffffff50;
      margin: 1.75em auto 0;
    }

    .circle-container div {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 11em;
      margin-left: -5.5em;
      height: 4em;
      margin-top: -2em;
    }

    .deg0 {
      transform: translate(37.5vh);
    } /* 37.5vh = half the width of the wrapper */
    .deg30 {
      transform: rotate(30deg) translate(37.5vh) rotate(-30deg);
    }
    .deg80 {
      transform: rotate(80deg) translate(37.5vh) rotate(-80deg);
    }
    .deg130 {
      transform: rotate(130deg) translate(37.5vh) rotate(-130deg);
    }
    .deg160 {
      transform: rotate(160deg) translate(37.5vh) rotate(-160deg);
    }
    .deg200 {
      transform: rotate(200deg) translate(37.5vh) rotate(-200deg);
    }
    .deg230 {
      transform: rotate(230deg) translate(37.5vh) rotate(-230deg);
    }
    .deg280 {
      transform: rotate(280deg) translate(37.5vh) rotate(-280deg);
    }
    .deg330 {
      transform: rotate(330deg) translate(37.5vh) rotate(-330deg);
    }
  }

  /* Mobile */
  @media (max-width: 699px) {
    .circle-container {
      position: relative;
      width: 90vw;
      height: 90vw;
      padding: 2.8em;
      border: dashed 1px;
      border-radius: 50%;
      border-color: #ffffff50;
      margin: 1.75em auto 0;
    }

    .circle-container div {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 11em;
      margin-left: -5.5em;
      height: 4em;
      margin-top: -2em;
    }

    .deg0 {
      transform: translate(45vw);
    }

    /* 45vw = half the width of the wrapper */
    .deg30 {
      transform: rotate(30deg) translate(45vw) rotate(-30deg);
    }

    .deg80 {
      transform: rotate(80deg) translate(45vw) rotate(-80deg);
    }

    .deg130 {
      transform: rotate(130deg) translate(45vw) rotate(-130deg);
    }

    .deg160 {
      transform: rotate(160deg) translate(45vw) rotate(-160deg);
    }

    .deg200 {
      transform: rotate(200deg) translate(45vw) rotate(-200deg);
    }

    .deg230 {
      transform: rotate(230deg) translate(45vw) rotate(-230deg);
    }

    .deg280 {
      transform: rotate(280deg) translate(45vw) rotate(-280deg);
    }

    .deg330 {
      transform: rotate(330deg) translate(45vw) rotate(-330deg);
    }
  }
</style>

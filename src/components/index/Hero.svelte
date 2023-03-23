<script>
  import utils from "../../stores/utils";
  import { fly } from "svelte/transition";
  import { onMount } from "svelte";
  import Container from "../utils/Container.svelte";
  // let is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  let id = "hero";

  const loadVideo = () => {
    let vid = document.getElementById(id);
    vid.src = "/images/farm-vid.mp4";
    vid.preload = "auto";
    vid.muted = false;
    vid.playsinline = true;
    vid["webkit-playsinline"] = true;
  };

  const playVideo = () => {
    let vid = document.getElementById(id);
    vid.play();
  };

  const pauseVideo = () => {
    let vid = document.getElementById(id);
    vid.pause();
  };

  let RE_RENDER = Math.random();
  let mouseCoord = { x: -100, y: -100 };
  let parent;

  onMount(() => {
    loadVideo();

    var textWrapper = document.querySelector(".hero-text");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime.timeline({ loop: false }).add({
      targets: ".hero-text .letter",
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 5000,
      delay: (el, i) => 500 + 30 * i,
    });

    parent.addEventListener("mousemove", (e) => {
      mouseCoord.x = e.clientX;
      mouseCoord.y = e.clientY;
    });
  });

  const onPauseVideo = () => {
    setTimeout(() => {
      pauseVideo();
      utils.update((prev) => ({
        ...prev,
        PAUSED: true,
      }));
      RE_RENDER = Math.random();
    }, 10);
  };

  const onPlayVideo = () => {
    setTimeout(() => {
      playVideo();
      utils.update((prev) => ({
        ...prev,
        PAUSED: false,
      }));
    }, 10);
  };
</script>

<section
  bind:this={parent}
  class="showcase overflow-x-hidden h-screen overflow-hidden"
  id="home"
>
  <div class="video-container !bg-black flex items-end">
    {#key RE_RENDER}
      <video
        id="hero"
        poster="/images/neon-city.jpg"
        class:add-ratio={$utils.PAUSED == false}
      >
        <track kind="captions" />
        <source src="/images/farm-vid.mp4" type="video/mp4" />
      </video>
    {/key}
  </div>

  {#if $utils.PAUSED}
    <div
      transition:fly={{ duration: 200, y: 200, delay: 50 }}
      class:some-hidden={!$utils.PAUSED}
      class="content text-white"
    >
      <Container>
        <div class="flex flex-col md:flex-row relative">
          <div
            class="w-full h-screen lg:w-7/12 flex flex-col justify-center relative z-10"
          >
            <h1
              class="hero-text h-font mb-4 md:pt-20 text-4xl sm:text-5xl md:text-5xl lg:text-7xl break-words"
            >
              Food & Beverage Manufacturing Industry
            </h1>

            <div
              class="mb-5 text-white"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="1500"
              data-aos-offset="0"
              data-aos-duration="500"
            >
              Want to learn about the exciting jobs of the future? Let us help
              you prepare for the future skills needed in the marketplace.
            </div>

            <a
              href="/explore"
              on:click={onPauseVideo}
              class="btn btn-primary"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="2000"
              data-aos-offset="0"
              data-aos-duration="500"
            >
              See the future
              <span class="material-symbols-outlined text-xl ml-2">
                trending_flat
              </span>
            </a>
          </div>
          <div
            class="w-full pb-12 md:pb-0 md:h-screen lg:w-5/12 flex items-center justify-center relative z-10"
          >
            <!--  -->
          </div>
        </div>
      </Container>
    </div>
  {/if}

  <div
    class="absolute left-[75%] translate-x-[-50%] bottom-[50%] translate-y-[50%] z-[20]"
  >
    <div
      class="play_button hidden md:flex items-center justify-center text-gray-300 text-sm"
    >
      {#if $utils.PAUSED}
        <div
          class="flex items-center justify-center cursor-pointer"
          on:click={onPlayVideo}
        >
          <button class="ripple-block">
            <ion-icon name="play-circle" class="fa-play-circle" />
            <div class="ripple ripple-1" />
            <div class="ripple ripple-2" />
            <div class="ripple ripple-3" />
          </button>
        </div>
      {/if}
    </div>
    <button
      transition:fly={{ duration: 250, y: 200, delay: 250 }}
      class="tip mt-24 opacity-0 duration-700 transition-all w-[20rem] px-4 py-2 glassmorph-2 rounded-xl border border-gray-100/10"
    >
      <div class="flex items-center text-white text-base">
        <ion-icon name="help-circle" class="text-3xl mr-2 text-black" />
        What does this future look like?
      </div>
    </button>
  </div>

  <div class="absolute left-[50%] translate-x-[-50%] bottom-8 z-[20]">
    {#if $utils.PAUSED}
      <div
        class="md:hidden flex cursor-pointer items-center justify-center text-gray-500 text-sm animate-pulse mb-4"
        on:click={onPlayVideo}
      >
        <ion-icon name="play-circle" class="text-2xl mr-2" />
        Click here play
      </div>
    {:else}
      <div
        class="flex cursor-pointer items-center justify-center text-gray-500 text-sm animate-pulse mb-4"
        on:click={onPauseVideo}
      >
        <ion-icon name="pause-circle" class="text-2xl mr-2" />
        Click here stop
      </div>
    {/if}

    <a
      href="#about"
      class="flex items-center justify-center"
      on:click={onPauseVideo}
    >
      <img class="w-[3rem]" src="/images/mouse.gif" alt="arrow" />
    </a>
  </div>

  <button
    transition:fly={{ duration: 250, y: 200, delay: 250 }}
    class="hidden md:block- absolute w-[20rem] px-4 py-2 glassmorph-4 rounded-xl border border-gray-100/10"
    style="left: {mouseCoord.x - 50}px; top: {mouseCoord.y - 0}px;"
  >
    <div class="flex items-center text-black font-semibold text-base">
      {#if $utils.PAUSED}
        <ion-icon name="play-circle" class="text-3xl mr-2 text-brand-green-1" />
        What does this future look like?
      {:else}
        <ion-icon
          name="pause-circle"
          class="text-3xl mr-2 text-brand-green-1"
        />
        Click to stop the video
      {/if}
    </div>
  </button>
</section>

<div class="hidden add-ratio" />

<!-- {/if} -->
<style>
  .showcase {
    position: relative;
  }
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
    aspect-ratio: 16 / 9 !important;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
  }

  /* Desktop */
  @media (min-width: 700px) {
    .add-ratio {
      min-height: 100% !important;
      min-width: auto !important;
    }
  }

  /* Mobile */
  @media (max-width: 699px) {
    .add-ratio {
      min-height: auto !important;
      min-width: 100% !important;
    }
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
    background: rgba(0, 0, 0, 0.3);
  }

  .play_button:hover + .tip {
    opacity: 1;
  }

  /* Ripple Effect */
  .ripple-block {
    position: relative;
    width: 12em;
    height: 12em;
  }

  .fa-play-circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 25%);
    font-size: 8em;
    color: white;
    transition: color 1500ms ease;
  }
  .ripple-block:hover .fa-play-circle,
  .ripple-block:active .fa-play-circle,
  .ripple-block:focus .fa-play-circle {
    color: #ffffffaa;
  }

  .ripple {
    position: absolute;
    width: 12em;
    height: 12em;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    animation: ripple 5s ease-in-out infinite;
    transition: background 1500ms ease;
  }
  .ripple-block:hover .ripple,
  .ripple-block:active .ripple,
  .ripple-block:focus .ripple {
    background: rgba(255, 255, 255, 0.2);
  }

  .ripple-block .ripple-1 {
    animation-delay: 0s;
  }

  .ripple-block .ripple-2 {
    animation-delay: 1.6666666667s;
  }

  .ripple-block .ripple-3 {
    animation-delay: 3.3333333333s;
  }

  @keyframes ripple {
    0% {
      transform: scale(0.2);
      opacity: 0;
    }
    50% {
      opacity: 0.9;
    }
    100% {
      transform: scale(12em);
      opacity: 0;
    }
  }
</style>

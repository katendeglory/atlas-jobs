<script>
  import { fly } from "svelte/transition";
  import { onMount } from "svelte";
  import Container from "../utils/Container.svelte";
  // let is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const playVideo = (id) => {
    let vid = document.getElementById(id);
    vid.src = "/images/farm-vid.mp4";
    vid.preload = "auto";
    vid.muted = true;
    vid.autoplay = true;
    vid.loop = true;
    vid.playsinline = true;
    vid["webkit-playsinline"] = true;
    vid.play();
    // console.log(vid);
  };

  let MUTED = true;
  let mouseCoord = { x: -100, y: -100 };
  let parent;

  onMount(() => {
    playVideo("hero");

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
</script>

<section
  bind:this={parent}
  class="showcase"
  id="home"
  on:click={() => {
    let newState = !document.getElementById("hero").muted;
    document.getElementById("hero").muted = newState;
    MUTED = newState;
  }}
>
  <div class="video-container">
    <video id="hero" muted autoplay loop playsinline>
      <source src="/images/trailer.mp4" type="video/mp4" />
    </video>
  </div>
  <div class="content text-gray-50">
    <Container>
      <div class="flex flex-col md:flex-row relative">
        <div
          class="w-full h-screen lg:w-7/12 flex flex-col justify-center relative z-10"
        >
          <h1
            class="hero-text h-font mb-5 md:pt-20 text-6xl sm:text-6xl md:text-7xl lg:text-8xl uppercase break-words"
          >
            Food & Beverage Manufacturing Industry
          </h1>

          <a
            href="/explore"
            class="btn btn-primary"
            data-aos="fade-right"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="1500"
            data-aos-offset="0"
            data-aos-duration="500"
          >
            See the future
            <ion-icon name="arrow-forward-outline" class="text-xl ml-2" />
          </a>
          <div
            class="md:hidden flex items-center text-gray-500 text-sm animate-pulse mt-4"
          >
            {#if MUTED}
              <ion-icon name="volume-mute" class="text-xl mr-2" />
              Click anywhere unmute
            {:else}
              <ion-icon name="volume-high" class="text-xl mr-2" />
              Click anywhere to mute
            {/if}
          </div>
        </div>
        <div
          class="w-full pb-12 md:pb-0 md:h-screen lg:w-5/12 flex items-center justify-center relative z-10"
        >
          <!--  -->
        </div>
      </div>
    </Container>
  </div>

  <a
    href="#about"
    class="absolute left-[50%] translate-x-[-50%] bottom-8 z-[800]"
  >
    <img class="w-[3rem]" src="/images/mouse.gif" alt="arrow" />
  </a>
</section>

<!-- {#if WIDTH >= 800} -->
<button
  transition:fly={{ duration: 250, y: 200, delay: 250 }}
  class="hidden md:block fixed w-[15rem] px-4 py-4"
  style="left: {mouseCoord.x - 50}px; top: {mouseCoord.y - 0}px;"
>
  <div class="flex items-center text-gray-300 ">
    {#if MUTED}
      <ion-icon name="volume-mute" class="text-2xl mr-2" />
      Click to unmute
    {:else}
      <ion-icon name="volume-high" class="text-2xl mr-2" />
      Click to mute
    {/if}
  </div>
</button>

<!-- {/if} -->
<style>
  .showcase {
    height: 100vh;
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

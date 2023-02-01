<script>
  import { onMount } from "svelte";
  import Container from "../utils/Container.svelte";
  // let is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const playVideo = (id) => {
    let vid = document.getElementById(id);
    vid.src = "/images/trailer.mp4";
    vid.preload = "auto";
    vid.muted = true;
    vid.autoplay = true;
    vid.loop = true;
    vid.playsinline = true;
    vid["webkit-playsinline"] = true;
    vid.play();
    console.log(vid);
  };
  onMount(() => {
    playVideo("hero");
  });
</script>

<section class="showcase" id="home">
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
            class="h-font mb-5 md:pt-20 text-6xl sm:text-6xl md:text-7xl lg:text-7xl"
            data-aos="fade-down"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="50"
            data-aos-offset="0"
            data-aos-duration="500"
          >
            FOOD AND BEVERAGE INDUSTRY
          </h1>

          <a
            href="/explore"
            class="btn btn-primary"
            data-aos="fade-right"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="500"
            data-aos-offset="0"
            data-aos-duration="500"
          >
            See the future
            <ion-icon name="arrow-forward-outline" class="text-xl ml-2" />
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

  <img
    class="absolute left-[50%] translate-x-[-50%] bottom-8 z-[800] w-[2rem]"
    src="/images/arrow.svg"
    alt="arrow"
  />
</section>

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

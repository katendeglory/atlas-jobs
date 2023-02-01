<script>
  import Gallery from "./../components/index/Gallery.svelte";
  import Container from "./../components/utils/Container.svelte";
  import { onMount } from "svelte";
  import Hero from "../components/index/Hero.svelte";
  import Sliders from "../components/index/Sliders.svelte";
  // import axios from "axios";

  onMount(async () => {});
</script>

<svelte:head>
  <title>Atlas of Emerging Jobs - Home</title>
</svelte:head>

<Hero />

<div class="max-w-full overflow-x-hidden">
  <Sliders />
</div>

<div class="bg-black py-10 text-white">
  <Container>
    <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between">
      <h1
        class="text-6xl md:text-8xl"
        data-aos="fade-right"
        data-aos-anchor-placement="top-bottom"
        data-aos-delay="50"
        data-aos-offset="0"
        data-aos-duration="500"
      >
        FOOD<span class="text-brand-green-1">&</span>
        <br />
        BEVERAGE
      </h1>

      <div
        class="mt-6 sm:mt-0"
        data-aos="fade-left"
        data-aos-anchor-placement="top-bottom"
        data-aos-delay="250"
        data-aos-offset="0"
        data-aos-duration="500"
      >
        <a href="/explore" class="btn btn-primary">
          See the future
          <ion-icon name="arrow-forward-outline" class="text-xl ml-2" />
        </a>
      </div>
    </div>
  </Container>
</div>

<Gallery />

<div class="bg-black py-10 text-white">
  <Container>
    <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between">
      <h1
        class="text-6xl md:text-8xl"
        data-aos="fade-right"
        data-aos-anchor-placement="top-bottom"
        data-aos-delay="50"
        data-aos-offset="0"
        data-aos-duration="500"
      >
        PREPARE FOR THE
        <br />
        FUTURE
        <span class="text-brand-green-1">NOW.</span>
      </h1>

      <div
        class="mt-6 sm:mt-0"
        data-aos="fade-left"
        data-aos-anchor-placement="top-bottom"
        data-aos-delay="250"
        data-aos-offset="0"
        data-aos-duration="500"
      >
        <a href="/explore" class="btn btn-primary">
          See the future
          <ion-icon name="arrow-forward-outline" class="text-xl ml-2" />
        </a>
      </div>
    </div>
  </Container>
</div>

<script>
  import Container from "./../utils/Container.svelte";
  import { onMount } from "svelte";
  import Slide from "./Slide.svelte";

  onMount(() => {
    const swiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 0,
      autoplay: {
        delay: 15000,
      },
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });
</script>

<div class="!overflow-visible">
  <div class="relative">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide min-h-screen w-full">
          <Slide number="1" />
        </div>
        <div class="swiper-slide min-h-screen w-full">
          <Slide number="2" />
        </div>
        <div class="swiper-slide min-h-screen w-full">
          <Slide number="3" />
        </div>
        <div class="swiper-slide min-h-screen w-full">
          <Slide number="4" />
        </div>
      </div>

      <div
        class="swiper-button-next absolute top-[50%] right-[-5px] md:right-0 lg:right-2 text-gray-800"
      >
        <ion-icon name="chevron-forward-outline" class="!text-6xl" />
      </div>
      <div
        class="swiper-button-prev absolute top-[50%] left-[-5px] md:left-0 lg:left-2 text-gray-800"
      >
        <ion-icon name="chevron-back-outline" class="!text-6xl" />
      </div>
      <div class="swiper-pagination" />
    </div>
  </div>
</div>

<div class="!overflow-visible">
  <div class="relative">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide min-h-screen w-full">
          <Slide
            number="1"
            class_="bg-white text-gray-800"
            reversed
            title="FOOD AND BEVERAGE INDUSTRY FUTURE JOBS"
            subtitle="Environmental Practitioner"
            img="/images/scientist.png"
            desc="Assesses, improves, and gives advice to companies on environmental strategies. Measures the carbon footprint..."
          />
        </div>
        <div class="swiper-slide min-h-screen w-full">
          <Slide
            number="2"
            class_="bg-white text-gray-800"
            reversed
            title="FOOD AND BEVERAGE INDUSTRY FUTURE JOBS"
            subtitle="Environmental Practitioner"
            img="/images/scientist.png"
            desc="Assesses, improves, and gives advice to companies on environmental strategies. Measures the carbon footprint..."
          />
        </div>
        <div class="swiper-slide min-h-screen w-full">
          <Slide
            number="3"
            class_="bg-white text-gray-800"
            reversed
            title="FOOD AND BEVERAGE INDUSTRY FUTURE JOBS"
            subtitle="Environmental Practitioner"
            img="/images/scientist.png"
            desc="Assesses, improves, and gives advice to companies on environmental strategies. Measures the carbon footprint..."
          />
        </div>
        <div class="swiper-slide min-h-screen w-full">
          <Slide
            number="4"
            class_="bg-white text-gray-800"
            reversed
            title="FOOD AND BEVERAGE INDUSTRY FUTURE JOBS"
            subtitle="Environmental Practitioner"
            img="/images/scientist.png"
            desc="Assesses, improves, and gives advice to companies on environmental strategies. Measures the carbon footprint..."
          />
        </div>
      </div>

      <div
        class="swiper-button-next absolute top-[50%] right-[-5px] md:right-0 lg:right-2 text-gray-800"
      >
        <ion-icon name="chevron-forward-outline" class="!text-6xl" />
      </div>
      <div
        class="swiper-button-prev absolute top-[50%] left-[-5px] md:left-0 lg:left-2 text-gray-800"
      >
        <ion-icon name="chevron-back-outline" class="!text-6xl" />
      </div>
      <div class="swiper-pagination" />
    </div>
  </div>
</div>

<style>
  .swiper-button-next::after {
    content: "" !important;
  }
  .swiper-button-prev::after {
    content: "" !important;
  }
</style>

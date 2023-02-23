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
          <Slide number="1" img="/images/home/1.jpg" />
        </div>
        <div class="swiper-slide min-h-screen w-full">
          <Slide number="2" img="/images/home/2.jpg" />
        </div>
        <div class="swiper-slide min-h-screen w-full">
          <Slide number="3" img="/images/home/8.jpg" />
        </div>
        <div class="swiper-slide min-h-screen w-full">
          <Slide number="4" img="/images/home/11.jpg" />
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
            class_="bg-white text-gray-800"
            reversed
            title="FOOD AND BEVERAGE MANUFACTURING INDUSTRY FUTURE JOBS"
            subtitle="Cost accounting manager"
            img="/images/home/job-02.jpg"
            desc="A professional who develops cost standards for materials and labor, etc., designs and implements cost accounting systems, analyzes production costs and recommends changes, and oversees annual physical inventory. He also hires, trains, and supervises cost and inventory accounting staff."
            url="/job-page?id=17&ecosystem=2"
          />
        </div>
        <div class="swiper-slide min-h-screen w-full">
          <Slide
            class_="bg-white text-gray-800"
            reversed
            title="FOOD AND BEVERAGE MANUFACTURING INDUSTRY FUTURE JOBS"
            subtitle="Designer of robotic systems for plants"
            img="/images/home/job-03.jpg"
            desc="An IT specialist who designs industrial robots and cyber-physical systems for food and beverage plants to optimize the process of production"
            url="/job-page?id=14&ecosystem=2"
          />
        </div>
        <div class="swiper-slide min-h-screen w-full">
          <Slide
            class_="bg-white text-gray-800"
            reversed
            title="FOOD AND BEVERAGE MANUFACTURING INDUSTRY FUTURE JOBS"
            subtitle="Food biochemist"
            img="/images/home/job-04.jpg"
            desc="Plans and conducts complex projects in basic and applied research of organic substances used for food and beverage preparation, manages laboratory teams and monitors the quality of their work, and presents new solutions to food technologists and management."
            url="/job-page?id=19&ecosystem=2"
          />
        </div>
        <div class="swiper-slide min-h-screen w-full">
          <Slide
            class_="bg-white text-gray-800"
            reversed
            title="FOOD AND BEVERAGE MANUFACTURING INDUSTRY FUTURE JOBS"
            subtitle="Energy Catcher"
            img="/images/home/job-05.jpg"
            desc="A professional who advises on how to capture and use the energy from alternative sources (solar, wind, hydro, kinetic, etc.) effectively"
            url="/job-page?id=2&ecosystem=2"
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

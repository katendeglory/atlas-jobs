<script>
  import { onMount } from "svelte";
  import Slide from "./Slide.svelte";
  import config from "../../stores/config";

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
        {#each $config.hVcs as vc}
          <div class="swiper-slide min-h-screen w-full">
            <Slide
              subtitle={vc.Ecosystem}
              title={vc.PrimaryTitle}
              title2={vc.SecondaryTitle}
              img={vc.EcosystemImage}
              link={`/ecosystem?id=${vc.id}`}
              desc=""
            />
          </div>
        {/each}
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
        {#each $config.hJbs as jb}
          <div class="swiper-slide min-h-screen w-full">
            <Slide
              class_="bg-white text-gray-800"
              reversed
              title={jb.PrimaryTitle}
              title2={jb.SecondaryTitle}
              subtitle={jb.JobTitle}
              img={jb.JobImage}
              desc={jb.JobDescription}
              link={`/job-page?id=${jb.id}`}
            />
          </div>
        {/each}
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

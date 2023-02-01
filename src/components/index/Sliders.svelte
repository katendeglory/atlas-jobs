<script>
  import Container from "./../utils/Container.svelte";
  import { onMount } from "svelte";

  onMount(() => {
    const swiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 30,
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
    <div class="swiper-container h-screen">
      <div class="swiper-wrapper">
        <section class="swiper-slide">
          <div class="green-grad h-full w-full flex items-center px-2">
            <Container>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="flex items-center">
                  <div>
                    <h1 class="h-font mb-6 text-3xl text-black">
                      FOOD AND BEVERAGE INDUSTRY SECTORS
                    </h1>
                    <h2 class="mb-6 text-xl text-[#00000080]">Processor</h2>
                    <p class="mb-6 text-white">
                      Transform agriculture product received from different
                      producer in their region
                    </p>
                    <a href="/explore" class="btn btn-secondary">
                      Discover
                      <ion-icon
                        name="chevron-forward-circle-outline"
                        class="text-2xl ml-2"
                      />
                    </a>
                  </div>
                </div>
                <div class="flex items-center justify-end">
                  <img
                    class="md:w-[35vw]"
                    src="/images/tomatoes.png"
                    alt="tomatoes"
                  />
                </div>
              </div>
            </Container>
          </div>
        </section>
        <section class="swiper-slide">
          <div class="green-grad h-full w-full flex items-center px-2">
            <Container>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="flex items-center">
                  <div>
                    <h1 class="h-font mb-6 text-3xl text-black">
                      FOOD AND BEVERAGE INDUSTRY SECTORS
                    </h1>
                    <h2 class="mb-6 text-xl text-[#00000080]">Processor</h2>
                    <p class="mb-6 text-white">
                      Transform agriculture product received from different
                      producer in their region
                    </p>
                    <a href="/explore" class="btn btn-secondary">
                      Discover
                      <ion-icon
                        name="chevron-forward-circle-outline"
                        class="text-2xl ml-2"
                      />
                    </a>
                  </div>
                </div>
                <div class="flex items-center justify-end">
                  <img
                    class="md:w-[35vw]"
                    src="/images/tomatoes.png"
                    alt="tomatoes"
                  />
                </div>
              </div>
            </Container>
          </div>
        </section>
        <!-- <section class="swiper-slide">
        </section> -->
      </div>

      <div
        class="swiper-button-next absolute top-[50%] right-[-5px] text-white"
      >
        <ion-icon name="chevron-forward-outline" class="!text-6xl" />
      </div>
      <div class="swiper-button-prev absolute top-[50%] left-[-5px] text-white">
        <ion-icon name="chevron-back-outline" class="!text-6xl" />
      </div>
    </div>
  </div>
</div>

<div class="!overflow-visible">
  <div class="relative">
    <div class="swiper-container h-screen">
      <div class="swiper-wrapper">
        <section class="swiper-slide">
          <div class="h-full w-full flex items-center px-2">
            <Container>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="flex items-center justify-start">
                  <img
                    class="md:w-[35vw]"
                    src="/images/scientist.png"
                    alt="tomatoes"
                  />
                </div>
                <div class="flex items-center">
                  <div>
                    <h1 class="h-font mb-6 text-3xl text-black">
                      FOOD AND BEVERAGE INDUSTRY FUTURE JOBS
                    </h1>
                    <h2 class="mb-6 text-xl text-[#00000080]">
                      Environmental Practitioner
                    </h2>
                    <p class="mb-6">
                      Assesses, improves, and gives advice to companies on
                      environmental strategies. Measures the carbon footprint...
                    </p>
                    <a href="/explore" class="btn btn-primary">
                      Discover
                      <ion-icon
                        name="chevron-forward-circle-outline"
                        class="text-2xl ml-2"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </section>
        <section class="swiper-slide">
          <div class="h-full w-full flex items-center px-2">
            <Container>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="flex items-center justify-start">
                  <img
                    class="md:w-[35vw]"
                    src="/images/scientist.png"
                    alt="tomatoes"
                  />
                </div>
                <div class="flex items-center">
                  <div>
                    <h1 class="h-font mb-6 text-3xl text-black">
                      FOOD AND BEVERAGE INDUSTRY FUTURE JOBS
                    </h1>
                    <h2 class="mb-6 text-xl text-[#00000080]">
                      Environmental Practitioner
                    </h2>
                    <p class="mb-6">
                      Assesses, improves, and gives advice to companies on
                      environmental strategies. Measures the carbon footprint...
                    </p>
                    <a href="/explore" class="btn btn-primary">
                      Discover
                      <ion-icon
                        name="chevron-forward-circle-outline"
                        class="text-2xl ml-2"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </section>
        <!-- <section class="swiper-slide">
        </section> -->
      </div>

      <div
        class="swiper-button-next absolute top-[50%] right-[-5px] text-black"
      >
        <ion-icon name="chevron-forward-outline" class="!text-8xl" />
      </div>
      <div class="swiper-button-prev absolute top-[50%] left-[-5px] text-black">
        <ion-icon name="chevron-back-outline" class="!text-8xl" />
      </div>
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

<script>
  import Container from "../utils/Container.svelte";
</script>

<div
  class="relative"
  style="background-image: url(/images/farm.webp); background-size: cover; background-position: center;"
>
  <Container>
    <div class="h-screen relative flex flex-col md:flex-row justify-between">
      <div class="relative z-10 w-full lg:w-9/12 flex flex-col justify-center">
        <!--  -->
      </div>

      <div
        class="w-full pb-12 md:pb-0 lg:w-3/12 flex items-center justify-center lg:justify-end relative z-10"
      >
        <div
          class="bg-brand-blue/40 uppercase text-4xl px-6 py-10 md:text-5xl md:px-8 md:py-12 text-white text-right font-semibold"
        >
          FOOD & BEVERAGE INDUSTRY
        </div>
      </div>
    </div>
  </Container>

  <img
    src="/images/play.svg"
    class="w-[125px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
    alt="play"
  />

  <a
    href="/explore"
    class="mt-4 btn btn-primary uppercase absolute left-[50%] translate-x-[-50%] bottom-[0%] translate-y-[50%]"
  >
    Explore
    <img src="/images/compass.svg" class="ml-2 w-[1.5rem]" alt="compass" />
  </a>
</div>

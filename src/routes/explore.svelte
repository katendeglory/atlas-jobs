<script>
  import Container from "../components/utils/Container.svelte";
</script>

<svelte:head>
  <title>Explore the food & beverage industry | Atlas of Emerging Jobs</title>
</svelte:head>

<div class="bg-brand-blue text-white fixed top-0 left-0 w-full z-[60]">
  <Container>
    <div class="h-16 flex items-center pl-20 md:pl-10 uppercase">
      Explore the food & beverage industry
    </div>
  </Container>
</div>

<Container>
  <div class="pt-36 md:pt-24 max-w-xl mx-auto min-h-screen">
    <div class="mb-4 text-brand-blue flex items-center">
      Click on a bubble to learn more
      <ion-icon name="caret-forward-outline" class="text-lg ml-1" />
    </div>

    <div class="">
      <div class="1 flex items-center justify-center">
        <div class="">
          <a
            href="/farm"
            class="block relative h-24 w-24 sm:h-36 sm:w-36 rounded-full border-4 border-brand-blue"
            style="background-image: url(/images/farm.png); background-size: cover;"
          >
            <!--  -->
          </a>
          <div class="mt-1 text-center text-brand-blue uppercase font-semibold">
            farm
          </div>
        </div>
      </div>
      <!--  -->
      <!--  -->
      <div class="2 -mt-5 flex justify-between ">
        <div class="">
          <a
            href="#home"
            class="block relative h-24 w-24 sm:h-36 sm:w-36 rounded-full border-4 border-brand-blue"
            style="background-image: url(/images/distillery.png); background-size: cover;"
          >
            <img
              src="/images/left.svg"
              class="w-[100%] absolute bottom-[105%] left-[50%]"
              alt="arrow"
            />
          </a>
          <div class="mt-1 text-center text-brand-blue uppercase font-semibold">
            distillery
          </div>
        </div>
        <div class="">
          <a
            href="#home"
            class="block relative h-24 w-24 sm:h-36 sm:w-36 rounded-full border-4 border-brand-blue"
            style="background-image: url(/images/factory.png); background-size: cover;"
          >
            <img
              src="/images/right.svg"
              class="w-[100%] absolute bottom-[105%] right-[50%]"
              alt="arrow"
            />
          </a>
          <div class="mt-1 text-center text-brand-blue uppercase font-semibold">
            factory
          </div>
        </div>
      </div>
      <!--  -->
      <!--  -->
      <div class="relative 3 flex items-center justify-center">
        <div class="">
          <div class="mb-1 text-center text-brand-blue uppercase font-semibold">
            supermarket
          </div>
          <a
            href="#home"
            class="block relative h-24 w-24 sm:h-36 sm:w-36 rounded-full border-4 border-brand-blue"
            style="background-image: url(/images/supermarket.png); background-size: cover;"
          >
            <img
              src="/images/right.svg"
              class="w-[100%] absolute bottom-[75%] right-[105%]"
              alt="arrow"
            />
            <img
              src="/images/left.svg"
              class="w-[100%] absolute bottom-[75%] left-[105%]"
              alt="arrow"
            />
            <img
              src="/images/down.svg"
              class="h-[115%] absolute bottom-[140%] sm:bottom-[125%] left-[60%] sm:left-[50%]  translate-x-[-50%]"
              alt="arrow"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</Container>

<script>
  import Container from "../components/utils/Container.svelte";
</script>

<svelte:head>
  <title>Explore the farm | Atlas of Emerging Jobs</title>
</svelte:head>

<div class="bg-brand-blue text-white fixed top-0 left-0 w-[90vw] z-[60]">
  <Container>
    <div class="h-16 flex items-center pl-20 md:pl-10 uppercase">
      Explore the farm
    </div>
  </Container>
</div>

<Container>
  <div class="pt-36 md:pt-24 max-w-4xl mx-auto min-h-screen">
    <div class="mb-4 text-brand-blue flex items-center">
      Click on a bubble to learn more
      <ion-icon name="caret-forward-outline" class="text-lg ml-1" />
    </div>

    <div class="mt-6 flex items-center justify-center">
      <div
        class="aspect-[3/2] w-full md:w-[75vw] relative"
        style="background-image: url(/images/explore-farm.png); background-size: cover;"
      >
        <a
          href="/job-page"
          class="absolute top-[12.50%] left-[27.5%] flex items-center justify-center text-center h-[4rem] w-[4rem] rounded-full bg-brand-blue text-white text-xs"
        >
          FOOD<br />Designer
        </a>
        <a
          href="#home"
          class="absolute top-[30%] left-[50%] flex items-center justify-center text-center h-[4rem] w-[4rem] rounded-full bg-brand-blue text-white text-xs"
        >
          Food<br />Safety<br />Curator
        </a>
        <a
          href="#home"
          class="absolute bottom-[40%] right-[7.5%] flex items-center justify-center text-center h-[4rem] w-[4rem] rounded-full bg-brand-blue text-white text-xs"
        >
          GMO<br />Farmer
        </a>
      </div>
    </div>
  </div>
</Container>

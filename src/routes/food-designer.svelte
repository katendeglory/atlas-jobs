<script>
  import FrameCard from "./../components/utils/FrameCard.svelte";
  import Container from "../components/utils/Container.svelte";
</script>

<svelte:head>
  <title>Farm > Food designer | Atlas of Emerging Jobs</title>
</svelte:head>

<div class="bg-black text-white shadow-md-0 left-0 w-full relative z-[60]">
  <Container>
    <div class="h-14 flex items-center justify-between uppercase">
      <a class="nav-link flex items-center" href="/#home"> ATLAS </a>
      <h1 class="text-sm">Farm > ENVIRONMENTAL PRACTIONER</h1>
      <div class="" />
    </div>
  </Container>
</div>

<Container>
  <div class="pt-6 md:pt-4 min-h-screen">
    <button class="mb-4  flex items-center" on:click={() => history.back()}>
      <ion-icon name="chevron-back-outline" class="text-lg mr-1" />
      Back
    </button>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="flex justify-center items-start frame-parent">
        <FrameCard />
      </div>
      <div class="mt-6 sm:mt-0">
        <h1 class="text-2xl h-font uppercase mb-4 font-bold">
          JOB DESCRIPTION
        </h1>
        <div class=" mb-4">
          Assesses, improves, and gives advice to companies on environmental
          strategies. Measures the carbon footprint being left by logistics in
          the FoodBev industry and advises efficient practices to cut it back
        </div>
        <!--  -->
        <!--  -->
        <h2 class="text-2xl h-font font-bold mb-2">Hard Skills</h2>
        <!--  -->
        <!--  -->
        <div class="flex items-center flex-wrap">
          <div
            class="mr-2 mb-2 inline-block bg-white px-3 py-2 text-gray-700 shadow-md text-sm rounded-xl"
          >
            Risk management
          </div>
          <div
            class="mr-2 mb-2 inline-block bg-white px-3 py-2 text-gray-700 shadow-md text-sm rounded-xl"
          >
            IT
          </div>
          <div
            class="mr-2 mb-2 inline-block bg-white px-3 py-2 text-gray-700 shadow-md text-sm rounded-xl"
          >
            Data Science
          </div>
          <div
            class="mr-2 mb-2 inline-block bg-white px-3 py-2 text-gray-700 shadow-md text-sm rounded-xl"
          >
            Security
          </div>
          <div
            class="mr-2 mb-2 inline-block bg-white px-3 py-2 text-gray-700 shadow-md text-sm rounded-xl"
          >
            Documentation in foodBev
          </div>
          <div
            class="mr-2 mb-2 inline-block bg-white px-3 py-2 text-gray-700 shadow-md text-sm rounded-xl"
          >
            Documentation in foodBev
          </div>
        </div>
        <!--  -->
        <!--  -->
        <h2 class="text-2xl h-font font-bold mt-6 mb-2">Soft Skills</h2>
        <!--  -->
        <!--  -->
        <div class="flex items-center flex-wrap">
          <div
            class="mr-2 mb-2 inline-block bg-white px-3 py-2 text-gray-700 shadow-md text-sm rounded-xl"
          >
            Communication
          </div>
          <div
            class="mr-2 mb-2 inline-block bg-white px-3 py-2 text-gray-700 shadow-md text-sm rounded-xl"
          >
            System thinking
          </div>
          <div
            class="mr-2 mb-2 inline-block bg-white px-3 py-2 text-gray-700 shadow-md text-sm rounded-xl"
          >
            Analytical thinking
          </div>
        </div>
      </div>
    </div>
  </div>
</Container>

<style>
  @media (max-width: 699px) {
    .frame-parent {
      background-image: url(/images/parallels.svg);
      background-size: 125%;
      background-repeat: no-repeat;
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }

  @media (min-width: 700px) {
    .frame-parent {
      background-image: url(/images/parallels.svg);
      background-size: 90%;
      background-repeat: no-repeat;
    }
  }
</style>

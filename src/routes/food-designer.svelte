<script>
  import Container from "../components/utils/Container.svelte";
</script>

<svelte:head>
  <title>Farm > Food designer | Atlas of Emerging Jobs</title>
</svelte:head>

<div class="bg-black text-white fixed top-0 left-0 w-full z-[60]">
  <Container>
    <div class="h-14 flex items-center justify-between uppercase">
      <a class="nav-link flex items-center" href="/#home"> ATLAS </a>
      <h1 class="">Farm > Food designer</h1>
      <div class="" />
    </div>
  </Container>
</div>

<Container>
  <div class="pt-28 md:pt-20 min-h-screen">
    <button class="mb-4  flex items-center" on:click={() => history.back()}>
      <ion-icon name="chevron-back-outline" class="text-lg mr-1" />
      Back
    </button>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="flex items-center justify-start relative">
        <img
          src="/images/frame.svg"
          class="h-auto w-screen sm:h-screen sm:w-auto object-cover"
          alt="doctor"
        />
      </div>
      <div class="">
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
            class="mr-2 mb-2 inline-block bg-black px-3 py-2 text-white text-sm rounded-xl"
          >
            Risk management
          </div>
          <div
            class="mr-2 mb-2 inline-block bg-black px-3 py-2 text-white text-sm rounded-xl"
          >
            IT
          </div>
          <div
            class="mr-2 mb-2 inline-block bg-black px-3 py-2 text-white text-sm rounded-xl"
          >
            Data Science
          </div>
          <div
            class="mr-2 mb-2 inline-block bg-black px-3 py-2 text-white text-sm rounded-xl"
          >
            Security
          </div>
          <div
            class="mr-2 mb-2 inline-block bg-black px-3 py-2 text-white text-sm rounded-xl"
          >
            Documentation in foodBev
          </div>
          <div
            class="mr-2 mb-2 inline-block bg-black px-3 py-2 text-white text-sm rounded-xl"
          >
            Documentation in foodBev
          </div>
        </div>
        <!--  -->
        <!--  -->
        <h2 class="text-2xl h-font font-bold mt-6 mb-2">Soft Skills</h2>
        <!--  -->
        <!--  -->
        <div class="flex items-center flex-wrap space-x-2">
          <div
            class="mr-2 mb-2 inline-block bg-black px-3 py-2 text-white text-sm rounded-xl"
          >
            Communication
          </div>
          <div
            class="mr-2 mb-2 inline-block bg-black px-3 py-2 text-white text-sm rounded-xl"
          >
            System thinking
          </div>
          <div
            class="mr-2 mb-2 inline-block bg-black px-3 py-2 text-white text-sm rounded-xl"
          >
            Analytical thinking
          </div>
        </div>
      </div>
    </div>
  </div>
</Container>

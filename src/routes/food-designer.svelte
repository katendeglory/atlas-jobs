<script>
  import Container from "../components/utils/Container.svelte";
</script>

<svelte:head>
  <title>Farm > Food designer | Atlas of Emerging Jobs</title>
</svelte:head>

<div class="bg-brand-blue text-white fixed top-0 left-0 w-full z-[60]">
  <Container>
    <div class="h-16 flex items-center pl-20 md:pl-10 uppercase">
      Farm > Food designer
    </div>
  </Container>
</div>

<Container>
  <div class="pt-36 md:pt-24 max-w-4xl mx-auto min-h-screen">
    <button
      class="mb-4 text-brand-blue flex items-center"
      on:click={() => history.back()}
    >
      <ion-icon name="chevron-back-outline" class="text-lg mr-1" />
      Back
    </button>

    <div class="grid grid-cols-2 gap-4">
      <div class="flex items-center justify-center">
        <img src="/images/doctor.svg" class="h-[20rem]" alt="doctor" />
      </div>
      <div class="">
        <h1 class="text-3xl text-brand-blue uppercase mb-4 font-bold">
          FOOD DESIGNER
        </h1>
        <div class="text-brand-blue mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dicta
          exercitationem, sed quasi, totam aut accusamus sequi vel tenetur minus
          unde laudantium! Possimus, sed, nostrum cum voluptatum ducimus
          adipisci aut a, voluptates maxime quae fugiat voluptate aperiam
          dolorum rerum impedit?
        </div>
        <h1 class="text-xl text-brand-blue mb-4 font-bold">Skills</h1>
        <h2 class="text-base text-brand-blue mb-2">Soft Skills</h2>
        <div class="flex items-center">
          <div
            class="inline-block bg-brand-light-blue px-2 py-2 mr-4 text-white text-sm rounded-xl"
          >
            Systems thinking
          </div>
          <div
            class="inline-block bg-brand-light-blue px-2 py-2 mr-4 text-white text-sm rounded-xl"
          >
            Comms
          </div>
          <div
            class="inline-block bg-brand-light-blue px-2 py-2 mr-4 text-white text-sm rounded-xl"
          >
            Mgmt
          </div>
        </div>
        <h2 class="text-base text-brand-blue mt-6 mb-2">Hard Skills</h2>
        <div
          class="inline-block bg-brand-light-blue px-2 py-2 mr-4 text-white text-sm rounded-xl"
        >
          IT
        </div>
      </div>
    </div>

    <div class="">
      <h1 class="text-xl text-brand-blue mt-6 mb-4 font-bold">
        Study Pathways
      </h1>

      <div class="">
        <!--  -->
        <div
          class="flex items-center justify-between text-brand-blue font-semibold border border-gray-400/40 h-12 px-4"
        >
          <div class="flex items-center">
            <img
              src="/images/chemistry.svg"
              alt="path"
              class="w-[2.5rem] mr-2"
            />
            Chemistry
          </div>
          <ion-icon
            name="chevron-forward-outline"
            class="ml-2 text-lg text-brand-blue"
          />
        </div>
        <div
          class="flex items-center justify-between text-brand-blue font-semibold border border-gray-400/40 h-12 px-4"
        >
          <div class="flex items-center">
            <img src="/images/data.svg" alt="path" class="w-[2.5rem] mr-2" />
            Data Analytics
          </div>
          <ion-icon
            name="chevron-forward-outline"
            class="ml-2 text-lg text-brand-blue"
          />
        </div>
        <div
          class="flex items-center justify-between text-brand-blue font-semibold border border-gray-400/40 h-12 px-4"
        >
          <div class="flex items-center">
            <img src="/images/dev.svg" alt="path" class="w-[2.5rem] mr-2" />
            Software Development
          </div>
          <ion-icon
            name="chevron-forward-outline"
            class="ml-2 text-lg text-brand-blue"
          />
        </div>
      </div>

      <div
        class="mt-16 w-full h-[30rem] flex items-center justify-center"
        style="background-image: url(/images/food-designer.webp);"
      >
        <img src="/images/play.svg" class="w-[125px]" alt="play" />
      </div>
    </div>
  </div>
</Container>

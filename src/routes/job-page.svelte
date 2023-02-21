<script context="module">
  import queryString from "query-string";
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ url, params }) {
    let { id, ecosystem } = queryString.parse(window.location.search);
    if (!id) id = "0";
    // window.location = "/";
    return {
      props: {
        id: id,
        ecosystem: ecosystem,
        qs: queryString,
      },
    };
  }
</script>

<script>
  import { onMount } from "svelte";
  import FrameCard from "../components/utils/FrameCard.svelte";
  import Container from "../components/utils/Container.svelte";
  import viewport from "../utils/useViewportAction";
  import { jobs, valueChains } from "../stores/data";
  import JobPageTemp from "../components/temp/JobPageTemp.svelte";

  export let id;
  export let qs;
  export let ecosystem;

  let job = $jobs.find((el) => el.id == id);
  let valueChain = $valueChains.find((el) => el.id == ecosystem);

  onMount(() => {
    console.log(valueChain);
    console.log(job);
  });
</script>

<svelte:head>
  <title>Job Page | Atlas of Emerging Jobs</title>
</svelte:head>

{#if !job}
  <JobPageTemp />
{:else}
  <div
    class="bg-black text-white shadow-md-0 w-[90vw] fixed top-0 left-0 z-[60]"
  >
    <Container>
      <div class="h-14 flex items-center justify-between uppercase">
        <a class="nav-link flex items-center mr-4" href="/#home"> ATLAS </a>
        <h1 class="text-sm flex flex-col sm:flex-row items-center">
          <a class="mr-1 flex items-center" href="/ecosystem?id={ecosystem}">
            {valueChain.name} >
          </a>
          <a
            class="flex items-center"
            href="/job-page?id={job.id}&ecosystem={ecosystem}"
          >
            {job.title}
          </a>
        </h1>
        <div class="" />
      </div>
    </Container>
  </div>

  <!-- <Container> -->
  <div class="frame-parent pt-16 min-h-screen">
    <button class="mb-4  flex items-center" on:click={() => history.back()}>
      <ion-icon name="chevron-back-outline" class="text-lg mr-1" />
      Back
    </button>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="flex justify-center items-start -frame-parent">
        <FrameCard img={job.img} title={job.title} />
      </div>
      <div class="mt-6 sm:mt-0 pr-2 md:pr-4" xyz="fade-100% down-3 stagger-2">
        <h1
          class="text-2xl h-font uppercase mb-4 font-bold"
          use:viewport
          on:enterViewport={(e) => e.target.classList.add("xyz-in")}
          on:exitViewport={(e) => e.target.classList.remove("xyz-in")}
        >
          JOB DESCRIPTION
        </h1>
        <div
          class=" mb-4"
          use:viewport
          on:enterViewport={(e) => e.target.classList.add("xyz-in")}
          on:exitViewport={(e) => e.target.classList.remove("xyz-in")}
        >
          {job.desc}
        </div>
        <!--  -->
        <!--  -->
        <h2 class="text-2xl h-font font-bold mb-2">Hard Skills</h2>
        <!--  -->
        <!--  -->
        <div class="flex items-center flex-wrap">
          {#each job.hardSkills as hs}
            <div
              class="mr-2 mb-2 inline-block capitalize bg-white px-3 py-2 text-gray-700 shadow-md text-sm rounded-xl"
              use:viewport
              on:enterViewport={(e) => e.target.classList.add("xyz-in")}
              on:exitViewport={(e) => e.target.classList.remove("xyz-in")}
            >
              {hs}
            </div>
          {/each}
        </div>
        <!--  -->
        <!--  -->
        <h2 class="text-2xl h-font font-bold mt-6 mb-2">Soft Skills</h2>
        <div class="flex items-center flex-wrap">
          {#each job.softSkills as hs}
            <div
              class="mr-2 mb-2 inline-block capitalize bg-white px-3 py-2 text-gray-700 shadow-md text-sm rounded-xl"
              use:viewport
              on:enterViewport={(e) => e.target.classList.add("xyz-in")}
              on:exitViewport={(e) => e.target.classList.remove("xyz-in")}
            >
              {hs}
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
{/if}

<!-- </Container> -->
<style>
  @media (max-width: 699px) {
    .frame-parent {
      background-image: url(/images/parallels.svg);
      background-size: 125%;
      background-repeat: no-repeat;
      padding-left: 1rem;
      padding-right: 1rem;
      background-position-x: -10vw;
      background-position-y: 10vh;
    }
  }

  @media (min-width: 700px) {
    .frame-parent {
      background-image: url(/images/parallels.svg);
      background-size: 55%;
      background-repeat: no-repeat;
      background-position-x: -5vw;
      background-position-y: 10vh;
      /* background-size: cover; */
    }
  }
</style>

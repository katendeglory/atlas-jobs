<script context="module">
  import queryString from "query-string";
  import axios from "axios";

  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ url, params }) {
    let { id, ecosystem } = queryString.parse(window.location.search);
    if (!id) id = "0";
    // HERE HERE : Make the API Call........................
    // .....................................................
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
  import viewport from "../utils/useViewportAction";
  import { jobs, valueChains } from "../stores/data";
  import TopNav from "../components/utils/TopNav.svelte";

  export let id;
  export let qs;
  export let ecosystem;

  onMount(() => {
    particlesJS.load(
      "particles-js2",
      "/js/particlesjs-config-2.json",
      function () {
        console.log("particles.js loaded - callback");
      }
    );
  });

  let job = $jobs.find((el) => el.id == id);
  let valueChain = $valueChains.find((el) => el.id == ecosystem);
</script>

<svelte:head>
  <title>Job Page | Atlas of Emerging Jobs</title>
</svelte:head>

{#if !job}
  <div class="text-4xl h-screen uppercase flex items-center justify-center">
    Page Not Found
  </div>
{:else}
  {#if ecosystem}
    <TopNav
      subtitle={valueChain.name}
      url="/ecosystem?id={ecosystem}"
      crumb_last_child={job.title}
    />
  {:else}
    <TopNav subtitle="" crumb_last_child={job.title} />
  {/if}

  <div class="pt-0 min-h-screen text-gray-300">
    <button
      class="fixed top-16 left-2 mb-4 flex items-center !z-30 !text-base"
      on:click={() => history.back()}
    >
      <ion-icon name="chevron-back-outline" class="text-lg mr-1" />
      Back
    </button>

    <div class="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      <!-- Left -->
      <div
        class="frame-parent bg-gray-800/50 bg-blend-overlay flex justify-center items-center relative min-h-[75vh]"
      >
        <div
          id="particles-js2"
          class="absolute top-0 left-0 bottom-0 right-0 h-full w-full"
        />
        <div class="absolute top-0 left-0 bottom-0 right-0 h-full w-full" />
        <FrameCard img={job.img} />
      </div>
      <!-- Right -->
      <div
        class="pt-5 md:pt-20 pb-4 px-2 md:px-4 bg-black"
        xyz="fade-100% down-3 stagger-2"
      >
        <h1
          class="text-5xl md:text-4xl h-font uppercase mb-6 font-semibold"
          use:viewport
          on:enterViewport={(e) => e.target.classList.add("xyz-in")}
          on:exitViewport={(e) => e.target.classList.remove("xyz-in")}
        >
          {job.title}
        </h1>
        <h1
          class="text-2xl h-font uppercase mb-2 font-semibold"
          use:viewport
          on:enterViewport={(e) => e.target.classList.add("xyz-in")}
          on:exitViewport={(e) => e.target.classList.remove("xyz-in")}
        >
          {#if job.isAtRisk}
            The rationale behind the decrease
          {:else if job.isTransforming}
            What is changing and why?
          {:else}
            JOB DESCRIPTION
          {/if}
        </h1>
        <div
          class="mb-4"
          use:viewport
          on:enterViewport={(e) => e.target.classList.add("xyz-in")}
          on:exitViewport={(e) => e.target.classList.remove("xyz-in")}
        >
          {job.desc}
        </div>

        {#if !job.isAtRisk && !job.isTransforming}
          <h2 class="text-2xl h-font font-semibold mb-2">Hard Skills</h2>
          <div class="flex items-center flex-wrap">
            {#each job.hardSkills as hs}
              <div
                class="mr-2 mb-2 inline-block capitalize bg-gray-200 px-3 py-2 text-black shadow-md text-sm rounded-xl"
                use:viewport
                on:enterViewport={(e) => e.target.classList.add("xyz-in")}
                on:exitViewport={(e) => e.target.classList.remove("xyz-in")}
              >
                {hs}
              </div>
            {/each}
          </div>
          <h2 class="text-2xl h-font font-semibold mt-6 mb-2">Soft Skills</h2>
          <div class="flex items-center flex-wrap">
            {#each job.softSkills as hs}
              <div
                class="mr-2 mb-2 inline-block capitalize bg-gray-200 px-3 py-2 text-black shadow-md text-sm rounded-xl"
                use:viewport
                on:enterViewport={(e) => e.target.classList.add("xyz-in")}
                on:exitViewport={(e) => e.target.classList.remove("xyz-in")}
              >
                {hs}
              </div>
            {/each}
          </div>
        {/if}
        {#if job.isTransforming}
          <h2 class="text-2xl h-font font-semibold mt-6 mb-2">
            New Skills Needed
          </h2>
          <div class="flex items-center flex-wrap">
            {#each [...job.softSkills, ...job.hardSkills] as skill}
              <div
                class="mr-2 mb-2 inline-block capitalize bg-gray-200 px-3 py-2 text-black shadow-md text-sm rounded-xl"
                use:viewport
                on:enterViewport={(e) => e.target.classList.add("xyz-in")}
                on:exitViewport={(e) => e.target.classList.remove("xyz-in")}
              >
                {skill}
              </div>
            {/each}
          </div>
        {/if}
      </div>
    </div>
  </div>
{/if}

<style>
  .frame-parent {
    background-image: url(/images/bg-7.jpg);
    background-size: cover;
  }
</style>

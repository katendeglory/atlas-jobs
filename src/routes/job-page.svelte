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

  let job = $jobs.find((el) => el.id == id);
  let valueChain = $valueChains.find((el) => el.id == ecosystem);
  let vcCount = job.valueChains.length;

  onMount(() => {
    // job.valueChains.forEach((vc_id) => {
    //   console.log($valueChains.find((el) => el.id == vc_id).name);
    // });

    particlesJS.load(
      "particles-js2",
      "/js/particlesjs-config-2.json",
      function () {
        // console.log("particles.js loaded - callback");
      }
    );
  });
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
      crumb_last_child={job.title.toLowerCase().split("→")[0]}
    />
  {:else}
    <TopNav
      subtitle=""
      crumb_last_child={job.title.toLowerCase().split("→")[0]}
    />
  {/if}

  <div class="pt-0 min-h-screen text-gray-300">
    <button
      class="fixed top-16 left-2 mb-2 flex items-center !z-30 !text-sm"
      on:click={() => history.back()}
    >
      <ion-icon name="chevron-back-outline" class="text-lg mr-1" />
      Back
    </button>

    <div
      class="grid grid-cols-1 md:grid-cols-12 min-h-screen text-[0.9rem] leading-[1.3rem]"
    >
      <!-- Left -->
      <div
        class="col-span-6 frame-parent bg-gray-800/50 bg-blend-overlay flex justify-center items-center relative min-h-[75vh]"
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
        class="col-span-6 pt-5 md:pt-20 pb-4 px-2 md:px-4 bg-black"
        xyz="fade-100% down-3 stagger-2"
      >
        <h1
          class="text-[2.1rem] leading-[2.25rem] h-font uppercase mb-3 font-semibold"
          use:viewport
          on:enterViewport={(e) => e.target.classList.add("xyz-in")}
          on:exitViewport={(e) => e.target.classList.remove("xyz-in")}
        >
          {#if vcCount > 1}
            <div class="!text-sm mb-1 !normal-case text-gray-300 !font-normal">
              “Appears across the Ecosystem in multiple maps”
            </div>
          {/if}
          {job.title.toLowerCase().split("→")[0]}
        </h1>

        <h1
          class="text-[1.4rem] leading-[1.75rem] h-font uppercase mb-2 font-semibold"
          use:viewport
          on:enterViewport={(e) => e.target.classList.add("xyz-in")}
          on:exitViewport={(e) => e.target.classList.remove("xyz-in")}
        >
          {#if job.isAtRisk}
            DESCRIPTION OF CURRENT JOB
          {:else if job.isTransforming}
            What is changing ?
          {:else}
            JOB DESCRIPTION
          {/if}
        </h1>
        <div
          class="mb-2"
          use:viewport
          on:enterViewport={(e) => e.target.classList.add("xyz-in")}
          on:exitViewport={(e) => e.target.classList.remove("xyz-in")}
        >
          {#if job.isTransforming}
            <div class="mb-1">
              Changing into
              <span class="font-semibold">
                {job.title.toLowerCase().split("→")[1]}.
              </span>
            </div>
          {/if}
          {job.desc}
        </div>

        {#if job.isAtRisk}
          <h1
            class="mt-4 text-[1.4rem] leading-[1.75rem] h-font uppercase font-semibold"
            use:viewport
            on:enterViewport={(e) => e.target.classList.add("xyz-in")}
            on:exitViewport={(e) => e.target.classList.remove("xyz-in")}
          >
            Why is this Job at Risk?
          </h1>
          <div
            class="mb-2"
            use:viewport
            on:enterViewport={(e) => e.target.classList.add("xyz-in")}
            on:exitViewport={(e) => e.target.classList.remove("xyz-in")}
          >
            {job.why}
          </div>
          <h1
            class="mt-4 text-[1.4rem] leading-[1.75rem] h-font uppercase font-semibold"
            use:viewport
            on:enterViewport={(e) => e.target.classList.add("xyz-in")}
            on:exitViewport={(e) => e.target.classList.remove("xyz-in")}
          >
            Possible Alternative Jobs to reskill for
          </h1>
          <div
            class="mb-2"
            use:viewport
            on:enterViewport={(e) => e.target.classList.add("xyz-in")}
            on:exitViewport={(e) => e.target.classList.remove("xyz-in")}
          >
            <!-- {job.desc} -->
            ...
          </div>
        {/if}

        {#if job.isTransforming}
          <h1
            class="mt-4 text-[1.4rem] leading-[1.75rem] h-font uppercase font-semibold"
            use:viewport
            on:enterViewport={(e) => e.target.classList.add("xyz-in")}
            on:exitViewport={(e) => e.target.classList.remove("xyz-in")}
          >
            Why?
          </h1>
          <div
            class="mb-2"
            use:viewport
            on:enterViewport={(e) => e.target.classList.add("xyz-in")}
            on:exitViewport={(e) => e.target.classList.remove("xyz-in")}
          >
            {job.why}
          </div>
        {/if}

        {#if !job.isAtRisk}
          <h2 class="text-[1.4rem] leading-[1.75rem] h-font font-semibold mb-2">
            {job.isTransforming ? "New" : ""} Hard Skills
          </h2>
          <div class="flex items-center flex-wrap">
            {#each job.hardSkills as hs}
              <div
                class="mr-2 mb-2 inline-block capitalize bg-gray-200 px-3 py-[0.35rem] text-black shadow-md text-sm rounded-xl"
                use:viewport
                on:enterViewport={(e) => e.target.classList.add("xyz-in")}
                on:exitViewport={(e) => e.target.classList.remove("xyz-in")}
              >
                {hs}
              </div>
            {/each}
          </div>
          <h2
            class="text-[1.4rem] leading-[1.75rem] h-font font-semibold mt-2 mb-2"
          >
            {job.isTransforming ? "New" : ""} Soft Skills
          </h2>
          <div class="flex items-center flex-wrap">
            {#each job.softSkills as hs}
              <div
                class="mr-2 mb-2 inline-block capitalize bg-gray-200 px-3 py-[0.35rem] text-black shadow-md text-sm rounded-xl"
                use:viewport
                on:enterViewport={(e) => e.target.classList.add("xyz-in")}
                on:exitViewport={(e) => e.target.classList.remove("xyz-in")}
              >
                {hs}
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

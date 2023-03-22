<script>
  /* STYLES IMPORTS */
  import "../styles/app.css";
  import "../styles/utils.css";
  import "../styles/tailwind-output.css";
  /* JS IMPORTS */
  import NavBar from "../components/layout/NavBar.svelte";
  import config from "../stores/config";
  import { onMount } from "svelte";
  import axios from "axios";
  import get from "lodash.get";
  import Loading from "../components/utils/Loading.svelte";
  import { valueChains, jobs } from "../stores/data";

  let loading = true;

  const PAGE = "&pagination[pageSize]=100";

  const getImg = (el, property) => {
    return (
      $config.backendURL.replaceAll("/api", "") +
      el.attributes[property].data.attributes.url
    );
  };

  const prune = (el) => {
    let { createdAt, publishedAt, updatedAt, JobUrl, ...rest } = el.attributes;
    return { ...rest };
  };

  onMount(async () => {
    try {
      let response = await Promise.all([
        axios.get(
          `${$config.backendURL}/value-chains?populate=img,map&${PAGE}`
        ),
        axios.get(
          `${$config.backendURL}/jobs?populate=img,hardSkills,softSkills,valueChains&${PAGE}`
        ),
        axios.get(`${$config.backendURL}/about-us`),
      ]);

      // VCS
      let vcs = get(response[0], "data.data");
      vcs = vcs.map((vc) => ({
        id: vc.id,
        ...prune(vc),
        img: getImg(vc, "img"),
        map: getImg(vc, "map"),
      }));

      // JOBS
      let jbs = get(response[1], "data.data");
      jbs = jbs.map((job) => ({
        id: job.id,
        ...prune(job),
        img: getImg(job, "img"),
        valueChains: job.attributes.valueChains.data.map(({ id }) => id),
        softSkills: job.attributes.softSkills.data.map(
          ({ attributes }) => attributes.skill
        ),
        hardSkills: job.attributes.hardSkills.data.map(
          ({ attributes }) => attributes.skill
        ),
      }));

      valueChains.update((prev) => vcs);
      jobs.update((prev) => jbs);

      // About US
      let aboutUs = get(response[2], "data.data");
      aboutUs = { id: aboutUs.id, ...prune(aboutUs) };
      console.log(aboutUs);

      config.set((prev) => ({
        ...prev,
        aboutUs,
      }));

      loading = false;
    } catch (error) {
      loading = false;
      console.log(error);
    }
  });
</script>

<div
  class={`bg-brand-white text-gray-600 tracking-wide w-full layout`}
  id="home"
>
  <!-- {#if loading || true} -->
  {#if loading}
    <Loading />
  {:else}
    <NavBar />
    <slot />
  {/if}
</div>

<!-- For tailwind purge -->
<div class="scroll-smooth" />

<style>
  .layout {
    width: 100%;
  }
</style>

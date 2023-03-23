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
  import { CONFIG } from "../stores/seed";

  let BACKEND = true;

  let loading = true;

  const PAGE = "&pagination[pageSize]=100";

  const getImg = (el, property) => {
    let url =
      $config.backendURL.replaceAll("/api", "") +
      el.attributes[property].data.attributes.url;
    return url.replaceAll("https:/.", "https://api.");
  };

  const prune = (el) => {
    let { createdAt, publishedAt, updatedAt, JobUrl, ...rest } = el.attributes;
    return { ...rest };
  };

  onMount(async () => {
    if (BACKEND) {
      try {
        let response = await Promise.all([
          axios.get(
            `${$config.backendURL}/value-chains?populate=img,map&${PAGE}`
          ),
          axios.get(
            `${$config.backendURL}/jobs?populate=img,hardSkills,softSkills,valueChains&${PAGE}`
          ),
          axios.get(`${$config.backendURL}/about-us`),
          axios.get(
            `${$config.backendURL}/home-ecosystems?populate=EcosystemImage,value_chain&${PAGE}`
          ),
          axios.get(
            `${$config.backendURL}/home-jobs?populate=JobImage,job&${PAGE}`
          ),
          axios.get(
            `${$config.backendURL}/home-job-galleries?populate=JobImage,job_relation&${PAGE}`
          ),
        ]);

        // VCS ..................................................
        let vcs = get(response[0], "data.data");
        vcs = vcs.map((vc) => ({
          id: vc.id,
          ...prune(vc),
          img: getImg(vc, "img"),
          map: getImg(vc, "map"),
        }));

        // JOBS ..................................................
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

        // About US ..................................................
        let aboutUs = get(response[2], "data.data");
        aboutUs = { id: aboutUs.id, ...prune(aboutUs) };

        // Home Ecosystems .............................................
        let hVcs = get(response[3], "data.data");
        hVcs = hVcs.map((vc) => ({
          ...prune(vc),
          EcosystemImage: getImg(vc, "EcosystemImage"),
          id: prune(vc).value_chain.data.id,
        }));

        // Home Jobs ..................................................
        let hJbs = get(response[4], "data.data");
        hJbs = hJbs.map((jb) => ({
          ...prune(jb),
          JobImage: getImg(jb, "JobImage"),
          id: prune(jb).job.data.id,
        }));

        // Home Gallery ..................................................
        let hGal = get(response[5], "data.data");
        hGal = hGal.map((jb) => ({
          ...prune(jb),
          JobImage: getImg(jb, "JobImage"),
          id: prune(jb).job_relation.data.id,
        }));

        config.update((prev) => ({
          ...prev,
          aboutUs,
          hVcs,
          hJbs,
          hGal,
        }));

        // setTimeout(() => {
        //   console.log($config);
        //   console.log($valueChains);
        //   console.log($jobs);
        // }, 10000);

        loading = false;
      } catch (error) {
        loading = false;
        console.log(error);
      }
    } else {
      config.update(() => CONFIG);
      loading = false;
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
    <!-- {#if $utils.PAUSED} -->
    <NavBar />
    <!-- {/if} -->
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

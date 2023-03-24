<script>
  import SmallContainer from "../utils/SmallContainer.svelte";
  import { onMount } from "svelte";
  import viewport from "../../utils/useViewportAction";
  import config from "../../stores/config";

  let anim_class = [Array.from(Array(20).keys())];

  // const do_animation = (n) => {
  //   if (anim_class[n] != "animated") anim_class[n] = "animated";
  // };

  const do_animation = (n) => {
    if (anim_class[n] != "animated" && anim_class[n] != "after_animated")
      anim_class[n] = "animated";
    setTimeout(() => (anim_class[n] = "after_animated"), 2000);
  };
</script>

<div class="grid grid-cols-1 md:grid-cols-3">
  {#each $config.hGal as job}
    <button
      on:click={() => (window.location = `/job-page?id=${job.id}&from=/`)}
      class="image_container {anim_class[1]} h-[60vh] w-full | gallery-parent flex items-center justify-center text-center"
      use:viewport
      on:enterViewport={() => do_animation(1)}
    >
      <img src={job.JobImage} alt="background" />
      <div class="overlay" />
      <div
        class="gallery-text text-white drop-shadow-lg opacity-0 transition-all text-4xl font-bold"
      >
        {job.Job}
      </div>
    </button>
  {/each}
</div>

<style>
  .gallery-parent:hover .gallery-text {
    opacity: 1;
    position: relative;
    z-index: 3;
  }
</style>

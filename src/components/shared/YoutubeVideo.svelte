<script>
  import { fly } from "svelte/transition";
  import getVideoId from "get-video-id";
  import Loading from "../utils/Loading.svelte";
  import { Circle } from "svelte-loading-spinners";

  export let videoURL = "https://www.youtube.com/embed/3uVRGheutQA";

  export let title = "";

  let showTitle = true;
  let loaded = false;

  const handleOnLoad = () => {
    loaded = true;
  };

  const handleClick = () => {
    if (showTitle) {
      showTitle = false;
    } else {
      showTitle = true;
      setTimeout(() => {
        showTitle = false;
      }, 4000);
    }
  };
</script>

<div
  class="overflow-hidden shadow-sm h-full w-full min-h-screen relative bg-black"
>
  {#if showTitle}
    <div
      in:fly={{ y: -15 }}
      out:fly={{ y: -15 }}
      class="absolute left-0 top-0 w-full h-[3.5rem] z-30"
    >
      <h1
        on:click={handleClick}
        class="text-gray-700 bg-black w-full h-full text-sm uppercase tracking-wider flex items-center shadow-md text-center px-2 py-2"
      >
        <i class="fab text-3xl fa-youtube mr-2 text-gray-100" />
        <div class="block sm:hidden text-gray-100">
          {title.length < 25 ? title : title.substring(0, 35) + "..."}
        </div>
        <div class="hidden sm:block text-gray-100">
          {title.length < 55 ? title : title.substring(0, 55) + "..."}
        </div>
      </h1>
    </div>
  {/if}

  <div
    class:no-hidden={!loaded}
    class="h-[100vh] md:h-[100vh] w-[100vw] overflow-hidden shadow-sm relative z-10 pt-14"
  >
    <iframe
      on:click={handleClick}
      on:load={handleOnLoad}
      title="video"
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${
        getVideoId(videoURL).id
      }?rel=0&modestbranding=1?autoplay=1`}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>

  <!-- {#if loaded == false}
    <Loading />
  {/if} -->

  {#if loaded == false}
    <div
      class="flex items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%] animate-pulse"
    >
      <Circle size="25" color="rgb(255,255,255)" unit="px" />
      <span class="flex items-center ml-2"> Waiting for youtube... </span>
    </div>
  {/if}
</div>

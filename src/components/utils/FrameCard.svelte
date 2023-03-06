<script>
  import { onMount } from "svelte";
  import viewport from "../../utils/useViewportAction";
  export let img;
</script>

<div class="outside-frame flex items-center justify-center">
  <div
    class="frame flex flex-col items-center justify-center h-full px-8"
    xyz="fade-100% down-3 stagger-2"
  >
    <img
      src={img}
      alt="doctor"
      class="h-[100%] object-cover"
      use:viewport
      on:enterViewport={(e) => e.target.classList.add("xyz-in")}
      on:exitViewport={(e) => e.target.classList.remove("xyz-in")}
    />
  </div>
</div>

<style>
  .frame {
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    overflow: hidden;
    background-size: cover;
    background-image: url(/images/bg-3.jpg);
  }

  .outside-frame {
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    overflow: hidden;
    background-size: cover;
    background-image: url(/images/bg-3.jpg);
    background-color: rgb(0, 0, 0, 0.4);
    background-blend-mode: overlay;
  }

  /* Desktop */
  @media (min-width: 700px) {
    .frame {
      width: 30vw;
      height: 25vw;
      background-image: url(/images/bg-3.jpg);
    }

    .outside-frame {
      width: 35vw;
      height: 30vw;
    }
  }

  /* Mobile */
  @media (max-width: 699px) {
    .frame {
      width: 35vh;
      height: 30vh;
      background-image: url(/images/bg-3.jpg);
    }

    .outside-frame {
      width: 45vh;
      height: 40vh;
    }
  }
</style>

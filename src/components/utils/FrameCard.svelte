<script>
  import viewport from "../../utils/useViewportAction";
  export let img;
</script>

<div class="border-outside-frame flex items-center justify-center">
  <div class="outside-frame flex items-center justify-center">
    <div class="border-frame flex items-center justify-center">
      <div
        class="frame flex flex-col items-center justify-center h-full px-8"
        xyz="fade-100% down-3 stagger-2"
      >
        {#if img}
          <img
            src={img}
            alt="doctor"
            class="h-[100%] object-cover"
            use:viewport
            on:enterViewport={(e) => e.target.classList.add("xyz-in")}
            on:exitViewport={(e) => e.target.classList.remove("xyz-in")}
          />
        {/if}
      </div>
    </div>
  </div>
</div>

<style>
  .frame {
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    overflow: hidden;
    background-size: cover;
    background-image: url(/images/bg-1.jpg);
  }

  .outside-frame {
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    overflow: hidden;
    background-size: cover;
    background-image: url(/images/bg-1.jpg);
    background-color: rgb(0, 0, 0, 0.5);
    background-blend-mode: overlay;
  }

  .border-frame {
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    overflow: hidden;
    background-color: #c6810110;
  }

  .border-outside-frame {
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    overflow: hidden;
    background-color: #c6810110;
  }

  /* Desktop */
  @media (min-width: 700px) {
    .frame {
      width: 30vw;
      height: 25vw;
    }

    .border-frame {
      width: 30.35vw;
      height: 25.35vw;
    }

    .outside-frame {
      width: 35vw;
      height: 30vw;
    }

    .border-outside-frame {
      width: 35.35vw;
      height: 30.35vw;
    }
  }

  /* Mobile */
  @media (max-width: 699px) {
    .frame {
      width: 35vh;
      height: 30vh;
    }

    .border-frame {
      width: 35.35vh;
      height: 30.35vh;
    }

    .outside-frame {
      width: 45vh;
      height: 40vh;
    }

    .border-outside-frame {
      width: 45.35vh;
      height: 40.35vh;
    }
  }
</style>

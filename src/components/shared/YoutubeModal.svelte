<script>
  import { scale } from "svelte/transition";
  import { createEventDispatcher } from "svelte";

  export let show = false;

  const dispatch = createEventDispatcher();

  const onClose = () => {
    dispatch("modalClose");
  };
</script>

{#if show}
  <div
    on:click|self={onClose}
    transition:scale
    class="text-white fixed top-0 left-0 md:bottom-0 right-0 h-[100vh] md:h-full w-full z-[999] bg-black"
  >
    <button
      class="h-font nav-link flex items-center fixed top-[.5rem] left-0 md:left-[.5rem] z-[998] !px-3 !py-0 !h-[2.5rem]"
      on:click={() => onClose()}
    >
      ATLAS OF EMERGING JOBS
    </button>

    <button
      class="fixed top-[.5rem] right-[.5rem] z-[998] !px-3 !py-0 !h-[2.5rem]"
      on:click={() => onClose()}
    >
      <span class="material-symbols-outlined text-3xl"> cancel </span>
    </button>

    <div class="w-full">
      <slot />
    </div>
  </div>
{/if}

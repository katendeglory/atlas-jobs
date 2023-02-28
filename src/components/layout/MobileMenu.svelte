<script>
  import { fly } from "svelte/transition";

  let menuVisible = false;

  let toggleMenu = () => {
    menuVisible = !menuVisible;
  };

  let hideMenu = () => {
    menuVisible = false;
  };
</script>

{#if menuVisible}
  <div
    on:click|self={hideMenu}
    class="z-[850] bg-gray-500/5 fixed top-0 left-0 bottom-0 right-0"
  />
{/if}

<div class="block lg:block pt-2 pb-1 relative z-[999]">
  <button class="focus:outline-none" on:click={toggleMenu}>
    <ion-icon name="menu-outline" class="text-3xl" />
  </button>

  {#if menuVisible}
    <div
      transition:fly={{ duration: 250, x: 200 }}
      class={`fixed top-12 right-0 bottom-0 w-64 md:w-80 flex flex-col pt-4 pb-2 bg-black`}
    >
      <!-- <a href="/register" class="mb-5 btn btn-primary !w-[100%]">
        Sign Up Now
        <ion-icon name="arrow-forward-circle" class="text-2xl ml-2" />
      </a> -->

      <a class="px-8 mb-4 text-2xl" on:click={hideMenu} href="/"> ATLAS </a>
      <div class="mb-4 border border-b border-[#FFFFFF80]" />
      <div class="px-8 flex flex-col">
        <a class="a-nav mb-5" on:click={hideMenu} href="/">Home</a>
        <button
          class="a-nav mb-5 flex items-center justify-start"
          on:click={() => {
            window.location = "/about";
            hideMenu();
          }}
        >
          About
        </button>
        <button
          class="a-nav mb-5 flex items-center justify-start"
          on:click={() => {
            window.location = "/contact";
            hideMenu();
          }}
        >
          Contact us
        </button>
      </div>
    </div>
  {/if}
</div>

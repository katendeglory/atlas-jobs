<script>
  import { fly } from "svelte/transition";

  let menuVisible = false;

  let toggleMenu = () => {
    menuVisible = !menuVisible;
  };

  let hideMenu = () => {
    menuVisible = false;
  };

  let valueChains_ = [
    { id: 1, name: "Producers" },
    { id: 2, name: "Manufacturing & Processing" },
    { id: 3, name: "Wholesalers" },
    { id: 4, name: "Online Marketplace" },
    { id: 5, name: "Dark Store" },
    { id: 6, name: "Sustainability" },
    { id: 7, name: "Retail & Groceries" },
    { id: 8, name: "Transport & Delivery" },
    { id: 9, name: "Restaurant" },
    { id: 10, name: "New Product Development" },
  ];
</script>

{#if menuVisible}
  <div
    on:click|self={hideMenu}
    class="z-[850] bg-black/30 fixed top-0 left-0 bottom-0 right-0"
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
      <a class="px-8 mb-4 text-xl h-font" on:click={hideMenu} href="/">
        ATLAS OF EMERGING JOBS
      </a>
      <div class="mb-4 border border-b border-[#FFFFFF80]" />
      <div class="flex flex-col">
        <a class="px-8 a-nav py-2" on:click={hideMenu} href="/">Home</a>
        <button
          class="a-nav px-8 py-2 flex items-center justify-start"
          on:click={() => {
            window.location = "/about";
            hideMenu();
          }}
        >
          About
        </button>
        <button
          class="a-nav px-8 py-2 flex items-center justify-start"
          on:click={() => {
            window.location = "/jobs";
            hideMenu();
          }}
        >
          List of emerging jobs
        </button>
        <button class="px-8 menu py-2 hidden md:flex items-center">
          <span class="a-nav"> Ecosystems </span>
          <div
            class="submenu absolute right-0 translate-x-[-16rem] md:translate-x-[-20rem] px-2 py-2 hidden"
          >
            <div class="bg-black px-4 py-4 flex flex-col shadow-md">
              {#each valueChains_ as v}
                <button
                  class="a-nav text-sm tracking-wider py-1 text-right"
                  on:click={() => (window.location = `/ecosystem?id=${v.id}`)}
                >
                  {v.name}
                </button>
              {/each}
            </div>
          </div>
        </button>
        <button
          class="a-nav px-8 py-2 flex items-center justify-start"
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

<style>
  .menu:hover .submenu {
    display: block;
  }
</style>

<script>
  import Container from "./Container.svelte";

  export let title_desk = "ATLAS OF EMERGING JOBS";
  export let title_mobi = "";
  export let subtitle;
  export let url = null;
</script>

<div
  class="bg-black text-gray-100 shadow-md-0 w-[90vw] fixed top-0 left-0 z-[60]"
>
  <Container>
    <div class="h-14 flex items-center justify-between uppercase">
      <a class="h-font nav-link hidden md:flex items-center mr-4" href="/">
        {title_desk}
      </a>
      <a class="h-font nav-link flex md:hidden items-center mr-4" href="/">
        {title_mobi}
      </a>
      <h1 class="text-sm flex flex-col sm:flex-row items-center">
        {#if url}
          <a class="mr-1 flex items-center" href={url}>
            {subtitle}
          </a>
        {:else}
          <span class="mr-1 flex items-center"> {subtitle} </span>
        {/if}
      </h1>
      <div class="" />
    </div>
  </Container>
</div>

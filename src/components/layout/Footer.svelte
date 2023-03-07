<script>
  import Container from "../utils/Container.svelte";
</script>

<div class="text-gray-300 text-sm bg-black">
  <Container>
    <div
      class="py-8 grid grid-cols-2 md:grid-cols-5 md:justify-items-center gap-6"
    >
      <a class="a-nav" href="/">Home</a>
      <button
        class="a-nav flex justify-start"
        on:click={() => (window.location = "/about")}
      >
        About
      </button>
      <button
        class="a-nav flex justify-start"
        on:click={() => (window.location = "/contact")}
      >
        Contact Us
      </button>
      <button
        class="a-nav flex justify-start"
        on:click={() => (window.location = "/jobs")}
      >
        Emerging Jobs
      </button>
      <a class="a-nav col-span-full sm:col-span-1" href="#home">
        Global Team (Russia)
      </a>
    </div>
  </Container>
</div>

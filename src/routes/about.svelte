<script>
  import Container from "../components/utils/Container.svelte";
</script>

<svelte:head>
  <title>About US - Atlas of Emerging Jobs</title>
</svelte:head>

<div class="py-20 min-h-screen">
  <div class="py-2" />
  <Container>
    <h1
      class="pt-4 col-span-full text-center py-1 text-black uppercase h-font font-bold text-5xl md:text-6xl"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-delay="100"
      data-aos-offset="0"
      data-aos-duration="500"
    >
      About Us
    </h1>

    <!-- Bio Here -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
      <div class="flex items-center rounded-xl">
        <div
          class="w-full h-[25rem] relative rounded-md bg-center"
          style="background-image: url(/images/about.jpg); background-size: cover;"
          data-aos="fade-right"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="500"
          data-aos-offset="0"
          data-aos-duration="500"
        />
      </div>
      <div class="flex items-center tracking-wide">
        <div
          class=""
          data-aos="fade-left"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="500"
          data-aos-offset="0"
          data-aos-duration="500"
        >
          <div class="text-3xl uppercase tracking-wider flex items-center mb-4">
            Lorem ipsum dolor sit amet
          </div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident vel
          harum hic velit assumenda sequi debitis eius rem vero a. Lorem ipsum dolor
          sit amet.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laboriosam
          ipsum minus hic fuga fugit. Fugiat quaerat reiciendis corporis, eum ullam
          ratione! Rerum corrupti repellat alias ab odit illum itaque.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laborum
          blanditiis itaque ut! Sequi impedit harum commodi hic! Tempore ipsum quam
          laboriosam. Eligendi, vel, consectetur quos omnis non cumque neque ea iste
          mollitia aspernatur nulla hic? Culpa animi dicta consectetur!
          <br />
          <br />
          <button
            class="btn btn-black !w-full"
            data-aos="fade-left"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="600"
            data-aos-offset="0"
            data-aos-duration="500"
            on:click={() => (window.location = "/explore")}
          >
            Explore
            <span class="material-symbols-outlined text-xl ml-2">
              trending_flat
            </span>
          </button>
        </div>
      </div>
    </div>
  </Container>
</div>

<div class="pt-20 min-h-screen bg-black text-gray-200">
  <div class="py-2" />
  <Container>
    <!-- Bio Here -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
      <div class="flex items-center tracking-wide">
        <div
          class=""
          data-aos="fade-right"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="500"
          data-aos-offset="0"
          data-aos-duration="500"
        >
          <div class="text-3xl uppercase tracking-wider flex items-center mb-4">
            Lorem ipsum dolor sit amet
          </div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident vel
          harum hic velit assumenda sequi debitis eius rem vero a. Lorem ipsum dolor
          sit amet.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laboriosam
          ipsum minus hic fuga fugit. Fugiat quaerat reiciendis corporis, eum ullam
          ratione! Rerum corrupti repellat alias ab odit illum itaque.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laborum
          blanditiis itaque ut! Sequi impedit harum commodi hic! Tempore ipsum quam
          laboriosam. Eligendi, vel, consectetur quos omnis non cumque neque ea iste
          mollitia aspernatur nulla hic? Culpa animi dicta consectetur!
          <br />
          <br />
          <!-- <button
            data-aos="fade-right"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="600"
            data-aos-offset="0"
            data-aos-duration="500"
            class="btn btn-primary !w-full !rounded-2xl"
            on:click={() => (window.location = "/explore")}
          >
            Explore
            <span class="material-symbols-outlined text-xl ml-2">
              trending_flat
            </span>
          </button> -->
        </div>
      </div>
      <div class="flex items-center rounded-xl">
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="500"
          data-aos-offset="0"
          data-aos-duration="500"
          class="w-full h-[25rem] relative rounded-md bg-center"
          style="background-image: url(/images/about-2.jpg); background-size: cover;"
        />
      </div>
    </div>
  </Container>
</div>

<div class="py-20 min-h-screen">
  <div class="py-2" />
  <Container>
    <!-- Bio Here -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
      <div class="flex items-center rounded-xl">
        <div
          class="w-full h-[25rem] relative rounded-md bg-center"
          style="background-image: url(/images/about.jpg); background-size: cover;"
          data-aos="fade-right"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="500"
          data-aos-offset="0"
          data-aos-duration="500"
        />
      </div>
      <div class="flex items-center tracking-wide">
        <div
          class=""
          data-aos="fade-left"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="500"
          data-aos-offset="0"
          data-aos-duration="500"
        >
          <div class="text-3xl uppercase tracking-wider flex items-center mb-4">
            Lorem ipsum dolor sit amet
          </div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident vel
          harum hic velit assumenda sequi debitis eius rem vero a. Lorem ipsum dolor
          sit amet.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laboriosam
          ipsum minus hic fuga fugit. Fugiat quaerat reiciendis corporis, eum ullam
          ratione! Rerum corrupti repellat alias ab odit illum itaque.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laborum
          blanditiis itaque ut! Sequi impedit harum commodi hic! Tempore ipsum quam
          laboriosam. Eligendi, vel, consectetur quos omnis non cumque neque ea iste
          mollitia aspernatur nulla hic? Culpa animi dicta consectetur!
          <br />
          <br />
          <!-- <button
            class="btn btn-black !w-full"
            data-aos="fade-left"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="600"
            data-aos-offset="0"
            data-aos-duration="500"
            on:click={() => (window.location = "/explore")}
          >
            Explore
            <span class="material-symbols-outlined text-xl ml-2">
              trending_flat
            </span>
          </button> -->
        </div>
      </div>
    </div>
  </Container>
</div>

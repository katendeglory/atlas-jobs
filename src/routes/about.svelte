<script>
  import { onMount } from "svelte";
  import config from "../stores/config";
  import Container from "../components/utils/Container.svelte";

  onMount(() => {
    console.log($config.aboutUs);
  });
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
          style="background-image: url(http://3.253.128.228:1337/uploads/vc_06_22672d62db.png); background-size: cover;"
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
            {$config.aboutUs.FirstMainTitle}
          </div>

          {@html $config.aboutUs.FirstBlockOfText.replaceAll(
            "\n",
            `<div class="py-2" />`
          )}
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
            {$config.aboutUs.SecondMainTitle}
          </div>

          {@html $config.aboutUs.SecondBlockOfText.replaceAll(
            "\n",
            `<div class="py-2" />`
          )}
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
          style="background-image: url(http://3.253.128.228:1337/uploads/vc_01_9490c729db.png); background-size: cover;"
        />
      </div>
    </div>
  </Container>
</div>

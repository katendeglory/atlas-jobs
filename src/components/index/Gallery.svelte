<script>
  import SmallContainer from "../utils/SmallContainer.svelte";
  import { onMount } from "svelte";
  import viewport from "../../utils/useViewportAction";

  let anim_class = [Array.from(Array(20).keys())];

  // const do_animation = (n) => {
  //   if (anim_class[n] != "animated") anim_class[n] = "animated";
  // };

  const do_animation = (n) => {
    if (anim_class[n] != "animated" && anim_class[n] != "after_animated")
      anim_class[n] = "animated";
    setTimeout(() => (anim_class[n] = "after_animated"), 2000);
  };
</script>

<div class="grid grid-cols-1 md:grid-cols-2">
  <a
    href="#home"
    class="image_container {anim_class[1]} h-[60vh] w-full | col-span-full gallery-parent flex items-center justify-center text-center"
    use:viewport
    on:enterViewport={() => do_animation(1)}
  >
    <img src="/images/home/7.jpg" alt="background" />
    <div class="overlay" />
    <div
      class="gallery-text text-white drop-shadow-lg opacity-0 transition-all text-4xl font-bold"
    >
      Producer
    </div>
  </a>

  <a
    href="#home"
    class="image_container {anim_class[2]} h-[60vh] w-full | gallery-parent flex items-center justify-center text-center"
    use:viewport
    on:enterViewport={() => do_animation(2)}
  >
    <img src="/images/home/9.jpg" class="slow-1" alt="background" />
    <div class="overlay slow-1" />
    <div
      class="gallery-text text-white drop-shadow-lg opacity-0 transition-all text-4xl font-bold"
    >
      Designer Robotic
    </div>
  </a>
  <a
    href="#home"
    class="image_container {anim_class[3]} h-[60vh] w-full | gallery-parent flex items-center justify-center text-center"
    use:viewport
    on:enterViewport={() => do_animation(3)}
  >
    <img src="/images/home/8.jpg" class="slow-4" alt="background" />
    <div class="overlay slow-2" />
    <div
      class="gallery-text text-white drop-shadow-lg opacity-0 transition-all text-4xl font-bold"
    >
      Sustainable packaging
    </div>
  </a>

  <a
    href="#home"
    class="image_container {anim_class[4]} h-[60vh] w-full | col-span-full gallery-parent flex items-center justify-center text-center"
    use:viewport
    on:enterViewport={() => do_animation(4)}
  >
    <img src="/images/home/10.jpg" class="slow-1" alt="background" />
    <div class="overlay slow-1" />
    <div
      class="gallery-text text-white drop-shadow-lg opacity-0 transition-all text-4xl font-bold"
    >
      Environment practioner
    </div>
  </a>
</div>

<style>
  .gallery-parent:hover .gallery-text {
    opacity: 1;
    position: relative;
    z-index: 3;
  }
</style>

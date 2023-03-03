<script>
  import SmallContainer from "../utils/SmallContainer.svelte";
  import viewport from "../../utils/useViewportAction";

  // -----------------
  export let class_ = "green-grad text-black";
  export let reversed = false;

  // -----------------
  let anim_class = "";
  let anim_image = "";

  export let link = "/explore";
  export let img = "";
  export let title = "";
  export let title2 = "";
  export let subtitle = "Processor";
  export let desc =
    "Transform agriculture product received from different producer in their region";
</script>

<div class="item-group">
  <div class="square xyz-in" />
  <div class="square xyz-in" />
  <div class="square xyz-in" />
</div>

<!-- <div class="swiper-slide min-h-screen w-full"> -->
<div
  class="{class_} min-h-screen w-full flex items-center px-2 relative py-16 md:py-0"
>
  <SmallContainer>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="flex items-center" xyz="fade-100% down-3 stagger-2">
        <div>
          <h1
            class="{anim_class} h-font mb-3 text-5xl sm:text-6xl md:text-7xl font-bold capitalize"
            use:viewport
            on:enterViewport={() => (anim_class = "xyz-in")}
            on:exitViewport={() => (anim_class = "")}
          >
            {title}
          </h1>
          <h1
            class="{anim_class} h-font mb-4 text-xl md:text-2xl"
            use:viewport
            on:enterViewport={() => (anim_class = "xyz-in")}
            on:exitViewport={() => (anim_class = "")}
          >
            {title2}
          </h1>
          <h2
            class="{anim_class} tracking-wider font-semibold mb-4 text-lg md:text-xl"
            use:viewport
            on:enterViewport={() => (anim_class = "xyz-in")}
            on:exitViewport={() => (anim_class = "")}
          >
            {subtitle}
          </h2>
          <p
            class="{anim_class} mb-4"
            use:viewport
            on:enterViewport={() => (anim_class = "xyz-in")}
            on:exitViewport={() => (anim_class = "")}
          >
            {desc}
          </p>
          <button
            on:click={() => (window.location = link)}
            class="{anim_class} btn btn-third"
            use:viewport
            on:enterViewport={() => (anim_class = "xyz-in")}
            on:exitViewport={() => (anim_class = "")}
          >
            Discover
            <ion-icon name="chevron-forward-outline" class="text-2xl ml-2" />
          </button>
        </div>
      </div>
      <!--  -->
      <!--  -->
      <div
        class="{reversed && 'reversed'} flex items-stretch {reversed
          ? 'justify-start'
          : 'justify-end'} "
      >
        <div
          class="image_container {anim_image} h-[40vh] w-full md:h-[75vh] md:w-[85%]"
          use:viewport
          on:enterViewport={() => {
            anim_image = "animated";
          }}
        >
          <img src={img} alt="background" />
          <div class="overlay" />
        </div>
      </div>
    </div>
  </SmallContainer>
</div>

<!-- </div> -->
<style>
  @media (min-width: 600px) {
    .reversed {
      grid-column-start: 1;
      grid-row-start: 1;
    }
  }
</style>

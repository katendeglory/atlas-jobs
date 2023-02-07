<script>
  import { onMount } from "svelte";
  import Container from "../components/utils/Container.svelte";
  import { fly } from "svelte/transition";

  let WIDTH;
  let HEIGHT;
  let _3DGraphElement;
  let tipShow = false;
  let tipContent = "";
  let tipImg = "";

  onMount(() => {
    let positionInfo = _3DGraphElement.getBoundingClientRect();
    HEIGHT = positionInfo.height;
    WIDTH = positionInfo.width;

    console.log({ HEIGHT, WIDTH });

    const nodes = [
      { img: "01.png", id: 1, fx: -275, fy: 0, fz: 0 },
      { img: "02.png", id: 2, fx: -200, fy: 0, fz: 0 },
      { img: "03.png", id: 3, fx: -125, fy: 0, fz: 0 },
      { img: "04.png", id: 4, fx: -50, fy: -50, fz: 0 },
      { img: "05.png", id: 5, fx: -50, fy: 50, fz: 0 },
      { img: "06.png", id: 6, fx: 25, fy: 25, fz: 0 },
      { img: "07.png", id: 7, fx: 25, fy: 100, fz: 0 },
      { img: "08.png", id: 8, fx: 25, fy: -50, fz: 0 },
      { img: "09.png", id: 9, fx: 125, fy: 75, fz: 0 },
      { img: "10.png", id: 10, fx: 125, fy: -75, fz: 0 },
      { img: "11.png", id: 11, fx: 125, fy: 0, fz: 0 },
    ];

    const links = [
      { source: 1, target: 2 },
      { source: 2, target: 3 },
      { source: 3, target: 4 },
      { source: 3, target: 5 },
      { source: 4, target: 8 },
      { source: 5, target: 6 },
      { source: 6, target: 7 },
      { source: 6, target: 8 },
      { source: 6, target: 9 },
      { source: 6, target: 11 },
      { source: 8, target: 10 },
      { source: 11, target: 10 },
    ];

    // Connected graph
    const gData = { nodes, links };

    const Graph = ForceGraph3D()(_3DGraphElement)
      .nodeThreeObject(({ img }) => {
        const imgTexture = new THREE.TextureLoader().load(
          `./images/graph/${img}`
        );
        const material = new THREE.SpriteMaterial({ map: imgTexture });
        const sprite = new THREE.Sprite(material);

        if (WIDTH > 800) sprite.scale.set(25, 25);
        else sprite.scale.set(20, 20);
        return sprite;
      })
      .onNodeClick((node) => {
        console.log(node);
        // window.location = "/cool"
      })
      //.cameraPosition({x: 0,y: 0,z: 100,})
      .backgroundColor("#00000000")
      // .nodeLabel((node) => `IMAGE #${node.id}`)
      // .onNodeHover((node) => {
      //   console.log(node);

      //   if (node) {
      //     tipShow = true;
      //     tipContent = `This is the content of the node ${node.id}`;
      //     tipImg = `${node.img}`;
      //   } else {
      //     tipShow = false;
      //     tipImg = false;
      //   }
      // })
      .linkColor((link) => "#fff")
      .linkOpacity(0.25)
      .linkDirectionalParticles(5)
      .linkDirectionalParticleSpeed(0.03)
      .linkDirectionalParticleColor(() => "white")
      .linkDirectionalParticleWidth(2)
      .graphData(gData);

    // ------------------------------------------------------------------------------
    // ---- SPOTLIGHT EFFECT --------------------------------------------------------
    const spotlight = document.querySelector(".spotlight");
    console.log(spotlight);
    let spotlightSize = "transparent 160px, rgba(0, 0, 0, 0.85) 200px)";

    window.addEventListener("mousemove", (e) => updateSpotlight(e));

    window.addEventListener("mousedown", (e) => {
      spotlightSize = "transparent 130px, rgba(0, 0, 0, 0.95) 150px)";
      updateSpotlight(e);
    });

    window.addEventListener("mouseup", (e) => {
      spotlightSize = "transparent 160px, rgba(0, 0, 0, 0.85) 200px)";
      updateSpotlight(e);
    });

    function updateSpotlight(e) {
      spotlight.style.backgroundImage = `radial-gradient(circle at ${
        (e.pageX / window.innerWidth) * 100
      }% ${(e.pageY / window.innerHeight) * 100}%, ${spotlightSize}`;
    }
  });
</script>

<svelte:head>
  <title>Explore the food & beverage industry | Atlas of Emerging Jobs</title>
</svelte:head>

<div class="bg-black text-white fixed top-0 left-0 w-full z-[60]">
  <Container>
    <div class="h-14 flex items-center justify-between uppercase">
      <a class="nav-link flex items-center" href="/#home"> ATLAS </a>
      <h1 class="">Explore the food & beverage industry</h1>
      <div class="" />
    </div>
  </Container>
</div>

<Container>
  <div class="hidden pt-36 md:pt-24 max-w-xl mx-auto min-h-screen">
    <div class="mb-4 text-brand-blue flex items-center">
      Click on a bubble to learn more
      <ion-icon name="caret-forward-outline" class="text-lg ml-1" />
    </div>

    <div class="">
      <div class="1 flex items-center justify-center">
        <div class="">
          <a
            href="/farm"
            class="block relative h-24 w-24 sm:h-36 sm:w-36 rounded-full border-4 border-brand-blue"
            style="background-image: url(/images/farm.png); background-size: cover;"
          >
            <!--  -->
          </a>
          <div class="mt-1 text-center text-brand-blue uppercase font-semibold">
            farm
          </div>
        </div>
      </div>
      <!--  -->
      <!--  -->
      <div class="2 -mt-5 flex justify-between ">
        <div class="">
          <a
            href="#home"
            class="block relative h-24 w-24 sm:h-36 sm:w-36 rounded-full border-4 border-brand-blue"
            style="background-image: url(/images/distillery.png); background-size: cover;"
          >
            <img
              src="/images/left.svg"
              class="w-[100%] absolute bottom-[105%] left-[50%]"
              alt="arrow"
            />
          </a>
          <div class="mt-1 text-center text-brand-blue uppercase font-semibold">
            distillery
          </div>
        </div>
        <div class="">
          <a
            href="#home"
            class="block relative h-24 w-24 sm:h-36 sm:w-36 rounded-full border-4 border-brand-blue"
            style="background-image: url(/images/factory.png); background-size: cover;"
          >
            <img
              src="/images/right.svg"
              class="w-[100%] absolute bottom-[105%] right-[50%]"
              alt="arrow"
            />
          </a>
          <div class="mt-1 text-center text-brand-blue uppercase font-semibold">
            factory
          </div>
        </div>
      </div>
      <!--  -->
      <!--  -->
      <div class="relative 3 flex items-center justify-center">
        <div class="">
          <div class="mb-1 text-center text-brand-blue uppercase font-semibold">
            supermarket
          </div>
          <a
            href="#home"
            class="block relative h-24 w-24 sm:h-36 sm:w-36 rounded-full border-4 border-brand-blue"
            style="background-image: url(/images/supermarket.png); background-size: cover;"
          >
            <img
              src="/images/right.svg"
              class="w-[100%] absolute bottom-[75%] right-[105%]"
              alt="arrow"
            />
            <img
              src="/images/left.svg"
              class="w-[100%] absolute bottom-[75%] left-[105%]"
              alt="arrow"
            />
            <img
              src="/images/down.svg"
              class="h-[115%] absolute bottom-[140%] sm:bottom-[125%] left-[60%] sm:left-[50%]  translate-x-[-50%]"
              alt="arrow"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</Container>

<div class="green-grad min-h-screen">
  <div class="spotlight">
    <div bind:this={_3DGraphElement} />
  </div>
</div>

{#if tipShow}
  <div
    transition:fly={{ duration: 250, y: 200 }}
    class="fixed bottom-2 left-2 w-[15rem] px-4 py-4 text-sm rounded-md shadow-lg bg-black/75 text-white h-font"
  >
    {#if tipImg}
      <div class="mb-2 flex items-center uppercase">
        <img src="/images/graph/{tipImg}" class="w-6 mr-2" alt={tipImg} /> Icon Tip
      </div>
    {/if}
    {tipContent}
  </div>
{/if}

<!--  -->
<!--  -->

<!--  -->
<style>
  .spotlight {
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: radial-gradient(
      circle,
      transparent 160px,
      rgba(0, 0, 0, 0.85) 200px
    );
  }
</style>

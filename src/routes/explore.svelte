<script>
  import { onMount } from "svelte";
  import Container from "../components/utils/Container.svelte";
  import { fly } from "svelte/transition";

  let WIDTH;
  let HEIGHT;
  let _3DGraphElement;

  // ------
  let tipShow = false;
  let tipContent = "";
  let tipImg = "";
  let mouseCoord = { x: 0, y: 0 };

  onMount(() => {
    let positionInfo = _3DGraphElement.getBoundingClientRect();
    HEIGHT = positionInfo.height;
    WIDTH = positionInfo.width;

    // 500
    console.log({ HEIGHT, WIDTH });

    let NODE_START = -75;
    let LINK_WIDTH = 50;

    if (WIDTH > 1100) {
      NODE_START = -160;
      LINK_WIDTH = 115;
    } else if (WIDTH > 999) {
      NODE_START = -150;
      LINK_WIDTH = 100;
    } else if (WIDTH > 800) {
      NODE_START = -100;
      LINK_WIDTH = 80;
    } else if (WIDTH > 600) {
      NODE_START = -125;
      LINK_WIDTH = 80;
    }

    const nodes = [
      /*[0]*/ { img: "01.png", id: 1, fx: 0, fy: 100, fz: 0 },
      /*[1]*/ { img: "02.png", id: 2, fx: 0, fy: 50, fz: 0 },
      /*[2]*/ { img: "03.png", id: 3, fx: 0, fy: 0, fz: 0 },
      // .............................................. //
      // .............................................. //
      /*[3]*/ { img: "04.png", id: 4, fx: 0, fy: -30, fz: 0 },
      /*[4]*/ { img: "05.png", id: 5, fx: 0, fy: 30, fz: 0 },
      // .............................................. //
      /*[5]*/ { img: "06.png", id: 6, fx: 0, fy: 30, fz: 0 },
      /*[6]*/ { img: "07.png", id: 7, fx: 0, fy: 90, fz: 0 },
      /*[7]*/ { img: "08.png", id: 8, fx: 0, fy: -30, fz: 0 },
      // .............................................. //
      /*[8]*/ { img: "09.png", id: 9, fx: 0, fy: 90, fz: 0 },
      /*[9]*/ { img: "10.png", id: 10, fx: 0, fy: -30, fz: 0 },
      /*[10]*/ { img: "11.png", id: 11, fx: 0, fy: 30, fz: 0 },
    ];

    // ...................................
    nodes[0].fx = NODE_START;
    nodes[1].fx = NODE_START;
    nodes[2].fx = NODE_START;
    // ...................................
    // ...................................
    nodes[3].fx = nodes[2].fx + LINK_WIDTH;
    nodes[4].fx = nodes[2].fx + LINK_WIDTH;
    // ...................................
    nodes[5].fx = nodes[4].fx + LINK_WIDTH;
    nodes[6].fx = nodes[4].fx + LINK_WIDTH;
    nodes[7].fx = nodes[4].fx + LINK_WIDTH;
    // ...................................
    nodes[8].fx = nodes[7].fx + LINK_WIDTH;
    nodes[9].fx = nodes[7].fx + LINK_WIDTH;
    nodes[10].fx = nodes[7].fx + LINK_WIDTH;
    // ...................................

    // const nodes = [
    //   { img: "01.png", id: 1, fx: -125, fy: 50, fz: 0 },
    //   { img: "02.png", id: 2, fx: -125, fy: 0, fz: 0 },
    //   { img: "03.png", id: 3, fx: -63, fy: 0, fz: 0 },
    //   { img: "04.png", id: 4, fx: 0, fy: -25, fz: 0 },
    //   { img: "05.png", id: 5, fx: 0, fy: 25, fz: 0 },
    //   { img: "06.png", id: 6, fx: 63, fy: 25, fz: 0 },
    //   { img: "07.png", id: 7, fx: 63, fy: 75, fz: 0 },
    //   { img: "08.png", id: 8, fx: 63, fy: -25, fz: 0 },
    //   { img: "09.png", id: 9, fx: 125, fy: 75, fz: 0 },
    //   { img: "10.png", id: 10, fx: 125, fy: -25, fz: 0 },
    //   { img: "11.png", id: 11, fx: 125, fy: 25, fz: 0 },
    // ];

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
        window.location = "/food-designer";
      })
      //.cameraPosition({x: 0,y: 0,z: 100,})
      .backgroundColor("#00000000")
      // .nodeLabel((node) => `IMAGE #${node.id}`)
      .onNodeHover((node) => {
        // console.log(node);
        if (node) {
          tipShow = true;
          tipContent = `This is the content of the node ${node.id}`;
          tipImg = `${node.img}`;
        } else {
          tipShow = false;
          tipImg = false;
        }
      })
      .linkColor((link) => "#fff")
      .linkOpacity(0.25)
      .linkDirectionalParticles(5)
      .linkDirectionalParticleSpeed(0.01)
      .linkDirectionalParticleColor(() => "white")
      .linkDirectionalParticleWidth(2)
      .linkDirectionalArrowLength(3.5)
      .linkDirectionalArrowRelPos(1)
      // .linkCurvature(0.25)
      .graphData(gData);

    // ........................
    // gradient.addEventListener("mousemove", (e) => {
    //   console.log("Mouse moving");
    //   console.log(e.target);
    //   let w = 500,
    //     pct = (360 * +e.pageX) / w,
    //     bg = "linear-gradient(" + pct + "deg, #8EF680, #000000)";
    //   gradient.style.backgroundImage = bg;
    // });

    gradient.addEventListener("mousemove", (e) => {
      console.log("Mouse moving");
      mouseCoord.x = e.clientX;
      mouseCoord.y = e.clientY;
      console.log(mouseCoord);
    });
  });

  let gradient;
</script>

<svelte:head>
  <title>Explore the food & beverage industry | Atlas of Emerging Jobs</title>
</svelte:head>

<div class="bg-black text-white fixed top-0 left-0 w-full z-[60]">
  <Container>
    <div class="h-14 flex items-center justify-between uppercase">
      <a class="nav-link flex items-center" href="/#home"> ATLAS </a>
      <h1 class="text-sm">Food & beverage industry</h1>
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

<div class="gradient min-h-screen w-full" bind:this={gradient}>
  <div bind:this={_3DGraphElement} />
</div>

{#if tipShow}
  <div
    transition:fly={{ duration: 250, y: 200, delay: 250 }}
    class="fixed bottom-2 w-[17.5rem] px-4 py-4 text-sm rounded-md shadow-lg bg-black/75 text-white h-font border border-white/30"
    style="right: 10px;"
  >
    {#if tipImg}
      <div class="mb-2 flex items-center uppercase">
        <img src="/images/graph/{tipImg}" class="w-6 mr-2" alt={tipImg} /> Icon Tip
      </div>
    {/if}
    {tipContent}
  </div>
{/if}

{#if tipShow}
  <div
    class="fixed bg-green-500 py-2"
    style="left: {mouseCoord.x}px; top: {mouseCoord.y}px;"
  >
    <div
      transition:fly={{ duration: 250, y: 200 }}
      class="absolute bottom-8 w-[8rem] md:w-[13.5rem] px-2 py-2 text-xs rounded-md shadow-lg bg-black/30 text-white h-font border border-white/50"
    >
      <div class="flex items-center uppercase">
        <span class="flex items-center justify-center">
          <ion-icon name="eye" class="text-xl mr-2" />
        </span>
        Click the icon and discover
      </div>
    </div>
  </div>
{/if}

<!--  -->

<!--  -->
<style>
  .gradient {
    background-image: linear-gradient(-90deg, #8ef680, #000000);
    /* background-image: linear-gradient(
      81.48deg,
      #000000 27.21%,
      #8ef680 104.74%
    ); */

    background-size: cover;
    background-position: center;
  }
</style>

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
  let tipTitle = "";
  let tipImg = "";
  let mouseCoord = { x: 0, y: 0 };

  onMount(() => {
    let positionInfo = _3DGraphElement.getBoundingClientRect();
    HEIGHT = positionInfo.height;
    WIDTH = positionInfo.width;

    // 500
    console.log({ HEIGHT, WIDTH });

    let NODE_START = -65;
    let LINK_WIDTH = 40;

    if (WIDTH > 1100) {
      NODE_START = -160;
      LINK_WIDTH = 80;
    } else if (WIDTH > 999) {
      NODE_START = -150;
      LINK_WIDTH = 80;
    } else if (WIDTH > 800) {
      NODE_START = -50;
      LINK_WIDTH = 70;
    } else if (WIDTH > 600) {
      NODE_START = -125;
      LINK_WIDTH = 80;
    }

    const nodes = [
      /*[0]*/ {
        img: "01.png",
        id: 1,
        fx: 0,
        fy: 90,
        fz: 0,
        title: "Producers",
      },
      /*[1]*/ { img: "02.png", id: 2, fx: 0, fy: 30, fz: 0, title: "Store" },
      /*[2]*/ {
        img: "03.png",
        id: 3,
        fx: 0,
        fy: -30,
        fz: 0,
        title: "Wholesalers",
      },
      // .............................................. //
      // .............................................. //
      /*[3]*/ {
        img: "04.png",
        id: 4,
        fx: 0,
        fy: -70,
        fz: 0,
        title: "Food Processor",
      },
      /*[4]*/ {
        img: "05.png",
        id: 5,
        fx: 0,
        fy: 30,
        fz: 0,
        title: "Sustainability",
      },
      // .............................................. //
      /*[5]*/ { img: "06.png", id: 6, fx: 0, fy: 30, fz: 0, title: "Delivery" },
      /*[6]*/ {
        img: "07.png",
        id: 7,
        fx: 0,
        fy: 120,
        fz: 0,
        title: "Grocery Shopping",
      },
      /*[7]*/ {
        img: "08.png",
        id: 8,
        fx: 0,
        fy: -60,
        fz: 0,
        title: "Online Shopping",
      },
      // .............................................. //
      /*[8]*/ {
        img: "09.png",
        id: 9,
        fx: 0,
        fy: 90,
        fz: 0,
        title: "Innovation",
      },
      /*[9]*/ {
        img: "10.png",
        id: 10,
        fx: 0,
        fy: -30,
        fz: 0,
        title: "Consumer",
      },
      /*[10]*/ {
        img: "11.png",
        id: 11,
        fx: 0,
        fy: 30,
        fz: 0,
        title: "Restaurant",
      },
    ];

    // ...................................
    // ...................................
    nodes[0].fx = NODE_START + 40;
    nodes[1].fx = NODE_START;
    nodes[2].fx = NODE_START + 40;
    // ...................................
    // ...................................
    nodes[3].fx = nodes[2].fx + LINK_WIDTH - 10;
    nodes[6].fx = nodes[2].fx + LINK_WIDTH - 10;
    nodes[4].fx = nodes[2].fx + LINK_WIDTH - 10;
    // ...................................
    nodes[5].fx = nodes[4].fx + LINK_WIDTH;
    nodes[7].fx = nodes[4].fx + LINK_WIDTH;
    nodes[8].fx = nodes[4].fx + LINK_WIDTH;
    // ...................................
    nodes[9].fx = nodes[7].fx + LINK_WIDTH - 20;
    // ...................................
    nodes[10].fx = nodes[7].fx + LINK_WIDTH;
    // ...................................

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
        window.location = "/ecosystem";
      })
      // .cameraPosition({
      // x: 0,
      // y: 0,
      // z: 1000,
      // })
      .backgroundColor("#00000000")
      // .nodeLabel((node) => `IMAGE #${node.id}`)
      .onNodeHover((node) => {
        // console.log(node);
        if (node) {
          tipShow = true;
          tipContent = `Click on the icon and discover`;
          // tipContent = `Click on the icon and discover ${node.id}`;
          tipTitle = `${node.title}`;
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
      .linkCurvature((link) => {
        let id = link.source.id;
        let curve = 0.25;
        // if (id <= 4 || id == 8 || id == 10) curve = 0.25;
        if (id == 11) return -0.25;
        return curve;
      })
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
      mouseCoord.x = e.clientX;
      mouseCoord.y = e.clientY;
    });
  });

  let gradient;
</script>

<svelte:head>
  <title>Explore the food & beverage industry | Atlas of Emerging Jobs</title>
</svelte:head>

<div class="bg-black text-white w-[90vw] fixed top-0 left-0 z-[60]">
  <Container>
    <div class="h-14 flex items-center justify-between uppercase">
      <a class="nav-link flex items-center" href="/#home"> ATLAS </a>
      <h1 class="text-sm">Food & Beverage Ecosystem</h1>
      <div class="" />
    </div>
  </Container>
</div>

<div class="gradient min-h-screen w-full" bind:this={gradient}>
  <div bind:this={_3DGraphElement} />
</div>

{#if tipShow}
  <div
    class="fixed bg-green-500 py-2"
    style="left: {mouseCoord.x}px; top: {mouseCoord.y}px;"
  >
    <div
      transition:fly={{ duration: 250, y: 200 }}
      class="absolute translate-x-[-50%] bottom-8 w-[8rem] md:w-[13.5rem] px-2 py-2 text-xs text-white h-font uppercase flex flex-col items-center justify-center"
    >
      <div class="">Click the icon and discover</div>
      <span class="mt-0 flex items-center justify-start">
        <ion-icon name="caret-down-circle-outline" class="text-xl" />
      </span>
    </div>
  </div>
{/if}

<!--  -->
{#if tipShow && WIDTH >= 800}
  <div
    transition:fly={{ duration: 250, y: 200, delay: 250 }}
    class="fixed w-[15rem] px-4 py-4 text-sm bg-black/75 text-white h-font border border-white/75"
    style="left: 10px; top: {mouseCoord.y - 50}px;"
  >
    {#if tipImg}
      <div class="mb-2 flex items-center uppercase">
        <img src="/images/graph/{tipImg}" class="w-6 mr-2" alt={tipImg} />
        {tipTitle}
      </div>
    {/if}
    {tipContent}
  </div>
{/if}

<!--  -->
<style>
  .gradient {
    background-image: linear-gradient(
      81.48deg,
      #000000 27.21%,
      #8ef680 104.74%
    );
  }
</style>

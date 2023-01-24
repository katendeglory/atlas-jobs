<script>
  import Container from "./../components/utils/Container.svelte";
  import { onMount } from "svelte";
  import Hero from "../components/index/Hero.svelte";
  // import axios from "axios";

  onMount(async () => {});
</script>

<svelte:head>
  <title>Atlas of Emerging Jobs - Home</title>
</svelte:head>

<Hero />

<Container>
  <div class="min-h-[80vh] grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="flex items-center justify-center">
      <img class="w-[25rem]" src="/images/map.svg" alt="map" />
    </div>
    <div class="flex items-center">
      <div class="text-brand-blue">
        <div class="font-semibold text-2xl mb-2 uppercase">
          Navigate the future now
        </div>
        <div class="">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          reiciendis deleniti neque qui, voluptas temporibus atque adipisci
          fugiat quisquam aut natus eaque nihil ea accusantium ipsa soluta
          inventore modi magnam quis optio hic sapiente asperiores iste! Sit
          ullam necessitatibus consequuntur dignissimos repudiandae laborum
          animi impedit? Dolores alias officiis rem doloremque!
        </div>
      </div>
    </div>
  </div>
</Container>

<div class="split-bg">
  <Container>
    <div class="min-h-[80vh] grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="flex items-center justify-center">
        <img class="w-[20rem]" src="/images/food-items.svg" alt="map" />
      </div>
      <div
        class="flex items-center bg-brand-blue md:bg-transparent px-6 py-8 md:p-0"
      >
        <div class="text-white md:pl-8">
          <div class="font-semibold text-2xl mb-2 uppercase">
            FUTURE JOBS IN THE FOOD & BEVERAGE INDUSTRY
          </div>
          <div class="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            reiciendis deleniti neque qui, voluptas temporibus atque adipisci
            fugiat quisquam aut natus eaque nihil ea accusantium ipsa soluta
            inventore modi magnam quis optio hic sapiente asperiores iste! Sit
            ullam necessitatibus consequuntur dignissimos repudiandae laborum
            animi impedit? Dolores alias officiis rem doloremque!
          </div>
        </div>
      </div>
    </div>
  </Container>
</div>

<Container>
  <div class="min-h-[80vh] grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="text-center mt-20 text-brand-blue text-xl col-span-full">
      CROSS-PROFESSIONAL SKILLS IN THE EMERGING JOBS
    </div>
    <div class="flex items-center justify-center">
      <img class="w-[20rem]" src="/images/skills.svg" alt="map" />
    </div>
    <div class="flex items-center">
      <div class="text-brand-blue md:pl-8">
        <div class="font-semibold text-2xl mb-2 uppercase">
          FUTURE JOBS IN THE FOOD & BEVERAGE INDUSTRY
        </div>
        <div class="">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          reiciendis deleniti neque qui, voluptas temporibus atque adipisci
          fugiat quisquam aut natus eaque nihil ea accusantium ipsa soluta
          inventore modi magnam quis optio hic sapiente asperiores iste! Sit
          ullam necessitatibus consequuntur dignissimos repudiandae laborum
          animi impedit? Dolores alias officiis rem doloremque!

          <a href="#home" class="mt-4 btn btn-primary uppercase">
            Find out more
            <ion-icon name="chevron-forward-outline" class="text-xl ml-1" />
          </a>
        </div>
      </div>
    </div>
  </div>
</Container>

<style>
  @media (min-width: 768px) {
    .split-bg {
      background: linear-gradient(90deg, #f5f5f5 50%, #83d0c7 50%);
    }
  }
</style>

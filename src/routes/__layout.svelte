<script>
  /* STYLES IMPORTS */
  import "../styles/app.css";
  import "../styles/tailwind-output.css";
  /* JS IMPORTS */
  import NavBar from "../components/layout/NavBar.svelte";
  import Footer from "../components/layout/Footer.svelte";
  import config from "../stores/config";
  import { onMount } from "svelte";
  import axios from "axios";
  import get from "lodash.get";
  let loading = true;

  // if (!localStorage.getItem("jwt")) window.location = "/login";

  onMount(async () => {
    // if (!get($config, "currentUser.username")) {
    //   try {
    //     let response = await Promise.all([
    //       axios.get(`${$config.backendURL}/settings`),
    //       axios.get(`${$config.backendURL}/items/categories`),
    //       axios.get(`${$config.backendURL}/me`, {
    //         headers: { authorization: localStorage.getItem("jwt") },
    //       }),
    //     ]);
    //     config.update((prev) => ({
    //       ...prev,
    //       settings: response[0].data,
    //       categories: response[1].data,
    //       currentUser: response[2].data,
    //     }));
    //     loading = false;
    //   } catch (error) {
    //     loading = false;
    //     console.log(error);
    //   }
    // } else {
    //   loading = false;
    // }
  });
</script>

<!-- style="background-image: url(./images/pattern.svg);" -->
<div
  class={`bg-brand-white text-gray-600 tracking-wide w-full layout`}
  id="home"
>
  <NavBar />
  <slot />
  <Footer />
</div>

<!-- For tailwind purge -->
<div class="scroll-smooth" />

<style>
  .layout {
    width: 100%;
  }
</style>

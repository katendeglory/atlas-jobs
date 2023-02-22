<script>
  import Container from "../utils/Container.svelte";
  import MobileMenu from "./MobileMenu.svelte";
  import { onMount } from "svelte";

  let PWAInstallBtn;
  // let is_chrome = !!window.chrome;
  let is_chrome = false;
  let clickListener;

  $: {
    if (PWAInstallBtn) {
      /*
        Attach the click event listener to the install button when it is shown,
        as on page load it's still hidden and waiting for the PWA to be ready. 
        The button will be rendered as soon as we have caught the beforeinstallprompt event.
        The event prompt will have to be manually triggered with the click of the button. 
        The beforeinstallprompt event will only trigger after the worker is installed, activated & ready.
        Otherwise it'll throw an exception and won't trigger.
      */
      PWAInstallBtn.addEventListener("click", clickListener);
    }
  }

  onMount(() => {
    window.onscroll = (e) => {
      scrollFunction();
    };

    const scrollFunction = () => {
      // let innerHeader = document.getElementById("inner-header");
      let header = document.getElementById("header");

      if (
        document.body.scrollTop > 40 ||
        document.documentElement.scrollTop > 40
      ) {
        // innerHeader.classList.replace("h-16", "h-12");
        // header.classList.add("shadow-sm");
        header.classList.add("bg-black");
      } else {
        // innerHeader.classList.replace("h-12", "h-16");
        // header.classList.remove("shadow-sm");
        // header.classList.remove("bg-black");
      }
    };

    let deferredPrompt;

    window.addEventListener("beforeinstallprompt", (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      // Update UI notify the user they can install the PWA
      // showInstallPromotion();
      // Show button when app can be installed, it can now be installed
      is_chrome = !!window.chrome;
    });

    clickListener = (e) => {
      // Hide the app provided install promotion on click
      // hideMyInstallPromotion();
      // Show the install prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt!");
        } else {
          console.log("User dismissed the install prompt!");
        }
      });
    };
  });
</script>

<div
  id="header"
  class="navbar here here bg-black text-white fixed top-0 left-0 w-full z-50 transition-all
    duration-250"
>
  <Container overflowHidden={false}>
    <div
      id="inner-header"
      class="h-14 flex justify-between items-center transition-all duration-250"
    >
      <a class="nav-link flex items-center" href="/">
        ATLAS OF EMERGING JOBS
      </a>

      <div class="hidden lg:flex">
        <!-- <a class="nav-link mr-6" href="#home">Help</a> -->
      </div>

      <div class="lg:flex lg:items-center">
        <div class="hidden lg:block nav-link mr-8 lg:mr-0">
          <!-- <a href="/register" class="btn btn-primary">
            Sign Up
            <ion-icon name="arrow-forward-circle" class="text-2xl ml-2" />
          </a> -->
        </div>

        <div class="flex items-center">
          {#if is_chrome}
            <div class="mr-2 lg:ml-2 lg:mr-0">
              <!-- <button
                class="btn btn-primary shadow-sm pwa-btn"
                bind:this={PWAInstallBtn}
              >
                Install
                <ion-icon name="logo-pwa" class="text-2xl ml-2" />
              </button> -->
            </div>
          {/if}
          <MobileMenu />
        </div>
      </div>
    </div>
  </Container>
</div>

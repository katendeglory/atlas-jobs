<script>
  import Container from "../components/utils/Container.svelte";

  let sending = false;

  let message = {
    name: "",
    email: "",
    tel: "",
    object: "",
    content: "",
  };

  let handleSubmit = () => {
    if (1 < 2) return;
    sending = true;
    let templateParams = message;
    emailjs.send("service_pik", "template_pik", templateParams).then(
      (response) => {
        sending = false;
        console.log("SUCCESS!", response.status, response.text);
        alert(`🙂 Thanks for you message ! We'll get back to you`);
        message = { name: "", email: "", tel: "", object: "", content: "" };
      },
      (error) => {
        console.log(`🙂 The email service is down!`);
        console.log("FAILED...", error);
        sending = false;
      }
    );
  };
</script>

<svelte:head>
  <title>Contact US - Atlas of Emerging Jobs</title>
</svelte:head>

<div
  class="bg-black/10 bg-blend-overlay px-6 md:px-0"
  style="background-image: url(/images/neon-city.jpg); background-size: cover;"
>
  <Container>
    <div class="min-h-screen grid grid-cols-1 md:grid-cols-2 pt-16 pb-16">
      <h1
        class="pt-4 col-span-full text-center py-1 text-white uppercase h-font font-bold text-5xl md:text-6xl"
      >
        Contact Us
      </h1>
      <!--  -->
      <!--  -->
      <!--  -->
      <div class="glassmorph-1 rounded-2xl overflow-hidden">
        <form
          on:submit|preventDefault={handleSubmit}
          class="w-full h-full grid grid-cols-1 gap-4 px-4 py-5"
          style="background-image: url(./images/pattern.svg);"
        >
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              bind:value={message.name}
              type="text"
              class={`w-full`}
              required
              placeholder="Full Name"
            />
            <input
              bind:value={message.tel}
              type="text"
              class={`w-full`}
              required
              placeholder="Telephone"
            />
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              bind:value={message.email}
              type="email"
              class={`w-full`}
              required
              placeholder="Email"
            />
            <input
              bind:value={message.object}
              type="text"
              class={`w-full`}
              required
              placeholder="Title"
            />
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <textarea
              bind:value={message.content}
              class="w-full col-span-full"
              required
              rows="4"
              placeholder="Message..."
            />
          </div>

          <div class="flex items-start">
            <button
              disabled={sending}
              class={`btn btn-primary !w-full !py-3 !rounded-2xl`}
            >
              {#if sending}
                Please Wait...
                <ion-icon name="refresh-circle" class="text-2xl ml-2" />
              {:else}
                <span> Send </span>
                <ion-icon name="checkmark-circle" class="text-xl ml-2" />
              {/if}
            </button>
          </div>
        </form>
      </div>
      <!--  -->
      <!--  -->
      <!--  -->
      <div class="">
        <!-- other side of the screen -->
      </div>
    </div>
  </Container>
</div>

<style>
  .contact-bg {
    background-image: url(/images/bg-gradient.jpg);
    background-size: cover;
    background-position: left;
  }

  .gradient {
    background-image: linear-gradient(
      81.48deg,
      #000000 27.21%,
      #8ef680 104.74%
    );
  }
</style>

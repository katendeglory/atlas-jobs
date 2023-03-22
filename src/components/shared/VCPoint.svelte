<script>
  import { onMount } from "svelte";
  import { valueChains } from "../../stores/data";

  export let vc_id;
  export let vc;
  export let deg = "none";
  export let icon;
  export let customN;

  onMount(() => {
    vc_id = Number.parseInt(vc_id);
    vc = $valueChains.find(({ id }) => id == vc_id);
  });
</script>

{#if vc && vc_id > 0}
  <div class="!hidden md:!block">
    <a
      href={`/ecosystem?id=${vc_id}`}
      class="vc-box xyz-in deg{deg}"
      style="transform: rotate({deg}deg) translate(37.5vh) rotate(-{deg}deg);"
    >
      <span class="flex items-center justify-center mr-2">
        <span class="material-symbols-outlined text-3xl md:text-4xl">
          {icon}
        </span>
      </span>
      {customN || vc.name}
    </a>
  </div>

  <div class="block md:!hidden">
    <a
      href={`/ecosystem?id=${vc_id}`}
      class="vc-box xyz-in deg{deg}"
      style="transform: rotate({deg}deg) translate(45vw) rotate(-{deg}deg);"
    >
      <span class="flex items-center justify-center mr-2">
        <span class="material-symbols-outlined text-3xl md:text-4xl">
          {icon}
        </span>
      </span>
      {customN || vc.name}
    </a>
  </div>
{/if}

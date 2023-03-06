<script>
  import get from "lodash.get";
  import { valueChains } from "../../stores/data";

  export let vc;
  export let deg = "none";
  export let icon;
  export let customN;

  const go = () => {
    if (get($valueChains[vc], "id")) {
      window.location = `/ecosystem?id=${Number.parseInt(vc) + 1}`;
    } else console.log("Nowhere to go");
  };
</script>

<div class="!hidden md:!block">
  <div
    on:click={go}
    class="vc-box xyz-in deg{deg}"
    style="transform: rotate({deg}deg) translate(37.5vh) rotate(-{deg}deg);"
  >
    <span class="flex items-center justify-center mr-2">
      <span class="material-symbols-outlined text-3xl md:text-4xl">
        {icon}
      </span>
    </span>
    {customN || $valueChains[vc].name}
  </div>
</div>

<div class="block md:!hidden">
  <div
    on:click={go}
    class="vc-box xyz-in deg{deg}"
    style="transform: rotate({deg}deg) translate(45vw) rotate(-{deg}deg);"
  >
    <span class="flex items-center justify-center mr-2">
      <span class="material-symbols-outlined text-3xl md:text-4xl">
        {icon}
      </span>
    </span>
    {customN || $valueChains[vc].name}
  </div>
</div>

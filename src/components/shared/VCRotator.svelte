<script>
  export let deg = "none";
</script>

<div class="!hidden md:!block">
  <div
    class="vc-box !bg-transparent !border-none !flex !items-center !justify-center deg{deg}"
    style="transform: rotate({deg}deg) translate(37.5vh) rotate(-{deg}deg);"
  >
    <span class="flex items-center justify-center">
      <span class="text-3xl"> . </span>
    </span>
  </div>
</div>

<div class="block md:!hidden">
  <div
    class="vc-box !bg-transparent !border-none !flex !items-center !justify-center deg{deg}"
    style="transform: rotate({deg}deg) translate(45vw) rotate(-{deg}deg);"
  >
    <span class="flex items-center justify-center">
      <span class="text-3xl"> . </span>
    </span>
  </div>
</div>

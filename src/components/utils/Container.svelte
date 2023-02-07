<script>
  export let overflowHidden = true;
</script>

<div
  class="--max-w-7xl mx-auto px-2 lg:px-4"
  class:overflow-hidden={overflowHidden}
>
  <slot />
</div>

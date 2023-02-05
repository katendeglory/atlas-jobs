<script>
  export let overflowHidden = true;
</script>

<div
  class="max-w-5xl mx-auto px-6 lg:px-4"
  class:overflow-hidden={overflowHidden}
>
  <slot />
</div>

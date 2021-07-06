<script>
  export let title;
</script>

<!-- w-340px h-170px -->
<div
  class="rounded-md pl-16px pt-16px pb-16px bg-white mr-24px shadow-xl mb-16px"
>
  <h3 class="text-hex-6E84A3">{title}</h3>
  <div class="box flex flex-wrap">
    <slot />
  </div>
</div>

<script>
  export let imageArray;
  export let title;
</script>

<h2 class="mb-12px text-hex-6E84A3 text-16px font-semibold">{title}</h2>
<div class="grid grid-cols-3 gap-2 items-center justify-items-center">
  {#each imageArray as image}
    <img class="rounded-md" src={image} alt="" />
  {/each}
</div>

<script>
  import { scale } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";
  export let name;
</script>

<div
  transition:scale={{ duration: 500, delay: 150, easing: cubicInOut }}
  class="flex flex-col items-center justify-center mt-16px mr-24px"
>
  <div class="rounded-full w-60px h-60px bg-indigo-600 mb-12px" />
  <p class="text-black font-semibold text-lg">{name}</p>
</div>

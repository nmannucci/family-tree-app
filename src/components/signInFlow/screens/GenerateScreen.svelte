<script>
  import { onMount } from "svelte";
  import { fly, draw } from "svelte/transition";
  import { quintIn } from "svelte/easing";

  onMount(() => {
    setTimeout(() => {
      document.querySelectorAll("path").forEach((path) => {
        path.style.fill = "#008000";
      });
    }, duration);
  });

  let route = 0;

  let duration = 10000;
  let delay = 1000;
  let speed = 0.1;
</script>

<div class="w-full px-130px h-screen flex items-center">
  {#if route === 0}
    <div
      in:fly={{ x: 800, duration: 500, easing: quintIn, delay: 0 }}
      class="z-10 mb-36px flex flex-col w-full justify-center items-center"
    >
      <h1 class="mb-60px font-bold text-48px text-white text-center leading-15">
        Great, now we can start to generate the tree. <br />Go ahead and hit
        generate!
      </h1>
      <button
        on:click={() => {
          route++;
        }}
        class="bg-white text-hex-2596EE text-20px font-medium py-24px px-64px text-center mb-16px mt-36px rounded-lg outline-none shadow-lg hover:(transform scale-105 transition-all duration-300 shadow-2xl)"
        >Generate my tree
      </button>
    </div>
  {:else}{/if}
</div>

<style>
  h1 {
    text-shadow: 0px 12px 23px rgba(0, 0, 0, 0.25);
  }
</style>

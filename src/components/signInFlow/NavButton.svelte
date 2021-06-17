<script>
  export let isNextButton;
</script>

{#if isNextButton}
  <div
    on:click
    class="z-5 cursor-pointer fixed bottom-80px right-130px bg-white text-hex-2596EE text-center text-18px font-medium py-12px px-50px max-h-44px w-194px rounded-lg shadow-lg hover:(transform scale-103 transition-all duration-300 shadow-2xl)"
  >
    Next
  </div>
{:else}
  <div
    on:click
    class="z-5 cursor-pointer fixed bottom-80px left-130px bg-white text-hex-2596EE text-center text-18px font-medium py-12px px-50px max-h-44px w-194px rounded-lg shadow-lg hover:(transform scale-103 transition-all duration-300 shadow-2xl)"
  >
    Back
  </div>
{/if}

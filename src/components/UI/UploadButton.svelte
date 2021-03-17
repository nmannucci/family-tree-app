<script>
  export let title;
  export let hasIcon;
</script>

<button
  class=" flex justify-between items-center pl-38px pr-38px w-170px h-43px rounded-lg bg-hex-2C7BE5 hover:(bg-blue-600 transform scale-105) transition-all duration-200 outline-none"
>
  {#if hasIcon}
    <i
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-plus-circle text-white"
        ><circle cx="12" cy="12" r="10" /><line
          x1="12"
          y1="8"
          x2="12"
          y2="16"
        /><line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    </i>
  {/if}
  <p class="text-white font-semibold text-19px ">{title}</p>
</button>

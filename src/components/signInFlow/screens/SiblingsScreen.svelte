<script>
  import { users } from "../../../models/user";
  import { currentUserStore } from "../../../stores/currentUserStore";
  import AutoComplete from "simple-svelte-autocomplete";
  import { fly, scale } from "svelte/transition";
  import { quintIn } from "svelte/easing";
  const familyMemberList = [...users];

  let siblingCount = 0;
  let siblings = [];
  $: currentUserStore.setSiblings(siblings);

  function addSibling() {
    siblingCount++;
  }
</script>

<div class="w-full px-130px h-screen flex items-center">
  <div
    in:fly={{ x: 800, duration: 500, easing: quintIn, delay: 0 }}
    class="z-10 mb-36px flex-col"
  >
    <h1 class="mb-60px font-bold text-48px text-white">
      Do you have any Siblings? If none, move on
    </h1>
    <div
      class="grid grid-cols-3 gap-50px overflow-scroll max-h-415px 2xl:max-h-600px min-h-300px"
    >
      {#if siblingCount !== 0}
        {#each Array(siblingCount) as _, i}
          <div in:scale class="mr-25px pb-25px">
            <label for="sibling" class="text-18px text-white mb-14px"
              >Your Sibling
            </label>
            <div class="h-8px" />
            <AutoComplete
              items={familyMemberList}
              labelFieldName="name"
              valueFieldName="id"
              bind:value={siblings[i]}
            />
          </div>
        {/each}
      {/if}
      <button
        on:click={addSibling}
        class="bg-white text-hex-2596EE text-18px font-medium py-12px px-50px mt-36px max-h-44px rounded-lg outline-none shadow-lg hover:(transform scale-103 transition-all duration-300)"
        >Add Sibling
      </button>
    </div>
  </div>
</div>

<style>
  h1 {
    text-shadow: 0px 12px 23px rgba(0, 0, 0, 0.25);
  }
</style>

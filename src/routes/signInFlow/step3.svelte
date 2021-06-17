<script>
  import { fly, scale } from "svelte/transition";
  import { currentUserStore } from "../../stores/currentUserStore";
  import AutoComplete from "simple-svelte-autocomplete";
  import { users } from "../../models/user";

  const familyMemberList = [...users];

  let marriagesCount = 0;
  let marriages = [];

  function addMarriage() {
    marriagesCount++;
  }
</script>

<div
  in:fly={{ x: 600, duration: 600 }}
  class="w-full h-screen pt-90px pl-130px"
>
  <h1 class="font-semibold text-36px mb-36px">
    Any <span
      class="bg-clip-text text-transparent bg-gradient-to-tr from-hex-2596EE to-hex-3F4FC9"
      >Marriages?
    </span> If none, move on.
  </h1>
  <div class="flex flex-wrap items-center">
    {#if marriagesCount !== 0}
      {#each Array(marriagesCount) as _, i}
        <!-- Make this field a svelte component and add the children logic as well -->
        <div transition:scale class="mr-25px pb-25px">
          <label for="sibling" class="block mb-8px text-18px"
            >Spouse (Enter full name)
          </label>
          <AutoComplete
            items={familyMemberList}
            labelFieldName="name"
            valueFieldName="id"
            bind:value={marriages[i]}
          />
        </div>
      {/each}
    {/if}
    <button
      on:click={addMarriage}
      class="bg-hex-2596EE text-white text-18px font-medium py-12px px-50px max-h-44px rounded-lg outline-none shadow-lg hover:(transform scale-103 transition-all duration-300)"
      >Add Marriage
    </button>
  </div>

  <div class="fixed bottom-80px right-130px">
    <a
      href="familyTree"
      class="inline-block bg-hex-2596EE text-white text-center text-18px font-medium py-12px px-50px max-h-44px w-194px rounded-lg shadow-lg hover:(transform scale-103 transition-all duration-300)"
      >Next
    </a>
  </div>
  <div class="fixed bottom-80px left-130px">
    <a
      href="signInFlow/step2"
      class="inline-block bg-hex-2596EE text-white text-center text-18px font-medium py-12px px-50px max-h-44px w-194px rounded-lg shadow-lg hover:(transform scale-103 transition-all duration-300)"
      >Back
    </a>
  </div>
</div>

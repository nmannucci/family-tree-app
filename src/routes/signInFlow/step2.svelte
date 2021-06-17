<script>
  import { scale, fly } from "svelte/transition";
  import AutoComplete from "simple-svelte-autocomplete";
  import { currentUserStore } from "../../stores/currentUserStore";
  import { users } from "../../models/user";

  const familyMemberList = [...users];

  let siblings = [];
  let parents = [];
  let siblingCount = 0;

  function addSibling() {
    if (siblingCount <= 11) {
      siblingCount++;
    }
  }

  function addParentsAndSiblings() {
    currentUserStore.setParents(parents);
    currentUserStore.setSiblings(siblings);
    console.log(currentUserStore);
  }
</script>

<div
  in:fly={{ x: 600, duration: 600 }}
  class="w-full h-screen pt-90px pl-130px"
>
  <h1 class="font-semibold text-36px mb-36px">
    Who are your <span
      class="bg-clip-text text-transparent bg-gradient-to-tr from-hex-2596EE to-hex-3F4FC9"
      >Parents?
    </span>
  </h1>
  <div class="flex mb-70px">
    <div class="mr-55px">
      <!-- <label for="parent" class="block mb-8px text-18px"
        >Parent (Enter full name)
      </label> -->
      <AutoComplete
        items={familyMemberList}
        labelFieldName="name"
        placeholder="Parent"
        valueFieldName="id"
        bind:value={parents[0]}
      />
    </div>
    <div>
      <label for="parent" class="block mb-8px text-18px"
        >Parent (Enter full name)
      </label>
      <AutoComplete
        items={familyMemberList}
        labelFieldName="name"
        valueFieldName="id"
        bind:value={parents[1]}
      />
    </div>
  </div>
  <h1 class="font-semibold text-36px mb-36px">
    Who are your <span
      class="bg-clip-text text-transparent bg-gradient-to-tr from-hex-2596EE to-hex-3F4FC9"
      >Siblings?
    </span> If none, move on.
  </h1>
  <div class="flex flex-wrap items-center">
    {#if siblingCount !== 0}
      {#each Array(siblingCount) as _, i}
        <div transition:scale class="mr-25px pb-25px">
          <label for="sibling" class="block mb-8px text-18px"
            >Sibling (Enter full name)
          </label>
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
      class="bg-hex-FBBF24 text-white text-18px font-medium py-12px px-50px max-h-44px rounded-lg outline-none shadow-lg hover:(transform scale-103 transition-all duration-300)"
      >Add Sibling
    </button>
  </div>
</div>
<!-- 
<div class="fixed bottom-80px right-130px">
  <a
    on:click={addParentsAndSiblings}
    href="signInFlow/step3"
    class="inline-block bg-hex-2596EE text-white text-center text-18px font-medium py-12px px-50px max-h-44px w-194px rounded-lg shadow-lg hover:(transform scale-103 transition-all duration-300)"
    >Next
  </a>
</div>
<div class="fixed bottom-80px left-130px">
  <a
    href="signInFlow/step1"
    class="inline-block bg-hex-2596EE text-white text-center text-18px font-medium py-12px px-50px max-h-44px w-194px rounded-lg shadow-lg hover:(transform scale-103 transition-all duration-300)"
    >Back
  </a>
</div> -->

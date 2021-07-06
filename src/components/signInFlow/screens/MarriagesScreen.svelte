<script>
  import { users } from "../../../models/user";
  import { currentUserStore } from "../../../stores/currentUserStore";
  import AutoComplete from "simple-svelte-autocomplete";
  import { fly, scale } from "svelte/transition";
  import { elasticIn, quintIn, quintOut } from "svelte/easing";

  const familyMemberList = [...users];
  let marriagesCount = 0;
  let childCount = 0;
  let marriages = [
    { spouse: "", children: [] },
    { spouse: "", children: [] },
    { spouse: "", children: [] },
  ];
  let spouseName = [{ name: "" }, { name: "" }, { name: "" }];

  $: currentUserStore.setMarriages(marriages);

  function addMarriage() {
    marriagesCount++;
    childCount = 0;
  }

  function previousMarriage() {
    marriagesCount--;
  }

  // Could do a for each block for number of marriages and just put an if block inside there
  // For each marriages, show this block of UI
</script>

<div class="w-full px-130px h-screen flex items-start">
  <div
    in:fly={{
      x: 450,
      duration: 650,
      easing: quintOut,
    }}
    class="z-10 flex-col mt-64px"
  >
    {#if marriagesCount === 0}
      <h1 class="header">Any Marriages?</h1>
    {/if}
    <div>
      {#if marriagesCount === 0}
        <button
          on:click={addMarriage}
          class="bg-white text-hex-2596EE text-18px font-medium py-12px px-50px mt-36px max-h-44px rounded-lg outline-none shadow-lg hover:(transform scale-103 transition-all duration-300)"
          >Add Marriage
        </button>
        <!-- First Marriage Object -->
      {:else if marriagesCount === 1}
        <h1 class="header">
          Your Marriage with <span class="text-hex-01e499"
            >{spouseName[0].name}
          </span>
        </h1>

        <div in:scale class="mr-25px pb-25px">
          <label for="sibling" class="text-18px text-white mb-14px"
            >Your Spouse
          </label>
          <div class="h-8px" />
          <AutoComplete
            items={familyMemberList}
            labelFieldName="name"
            valueFieldName="id"
            bind:value={marriages[0].spouse}
            bind:selectedItem={spouseName[0]}
          />
        </div>
        <div class="children" class:overflow={childCount <= 5}>
          {#if childCount !== 0}
            {#each Array(childCount) as _, i}
              <div in:scale class="pb-16px">
                <label for="sibling" class="text-18px text-white mb-14px"
                  >Your Child
                </label>
                <div class="h-8px" />
                <AutoComplete
                  items={familyMemberList}
                  labelFieldName="name"
                  valueFieldName="id"
                  bind:value={marriages[0].children[i]}
                />
              </div>
            {/each}
          {/if}
          <button
            on:click={() => {
              childCount++;
            }}
            class="bg-white text-hex-2596EE text-18px font-medium py-12px px-50px mb-16px mt-36px max-h-44px rounded-lg outline-none shadow-lg hover:(transform scale-103 transition-all duration-300)"
            >Add Child
          </button>
        </div>
      {:else if marriagesCount === 2}
        <h1 class="header">Your Marriage with {spouseName[1].name}</h1>
        <div in:scale class="mr-25px pb-25px">
          <label for="sibling" class="text-18px text-white mb-14px"
            >Your Spouse
          </label>
          <div class="h-8px" />
          <AutoComplete
            items={familyMemberList}
            labelFieldName="name"
            valueFieldName="id"
            bind:value={marriages[1].spouse}
            bind:selectedItem={spouseName[1]}
          />
        </div>
        <div class="children" class:overflow={childCount <= 5}>
          {#if childCount !== 0}
            {#each Array(childCount) as _, i}
              <div in:scale class="pb-16px">
                <label for="sibling" class="text-18px text-white mb-14px"
                  >Your Child
                </label>
                <div class="h-8px" />
                <AutoComplete
                  items={familyMemberList}
                  labelFieldName="name"
                  valueFieldName="id"
                  bind:value={marriages[1].children[i]}
                />
              </div>
            {/each}
          {/if}
          <button
            on:click={() => {
              childCount++;
            }}
            class="bg-white text-hex-2596EE text-18px font-medium py-12px px-50px mb-16px mt-36px max-h-44px rounded-lg outline-none shadow-lg hover:(transform scale-103 transition-all duration-300)"
            >Add Child
          </button>
        </div>
      {:else if marriagesCount === 3}
        <h1 class="header">Your Marriage with {spouseName[2].name}</h1>
        <div in:scale class="mr-25px pb-25px">
          <label for="sibling" class="text-18px text-white mb-14px"
            >Your Spouse
          </label>
          <div class="h-8px" />
          <AutoComplete
            items={familyMemberList}
            labelFieldName="name"
            valueFieldName="id"
            bind:value={marriages[2].spouse}
            bind:selectedItem={spouseName[2]}
          />
        </div>
        <div class="children" class:overflow={childCount <= 5}>
          {#if childCount !== 0}
            {#each Array(childCount) as _, i}
              <div in:scale class="pb-16px">
                <label for="sibling" class="text-18px text-white mb-14px"
                  >Your Child
                </label>
                <div class="h-8px" />
                <AutoComplete
                  items={familyMemberList}
                  labelFieldName="name"
                  valueFieldName="id"
                  bind:value={marriages[2].children[i]}
                />
              </div>
            {/each}
          {/if}
          <button
            on:click={() => {
              childCount++;
            }}
            class="bg-white text-hex-2596EE text-18px font-medium py-12px px-50px mb-16px mt-36px max-h-44px rounded-lg outline-none shadow-lg hover:(transform scale-103 transition-all duration-300)"
            >Add Child
          </button>
        </div>
      {/if}
      <!-- Add Another Marriage Button -->
      {#if marriagesCount > 0}
        <button
          in:scale
          on:click={addMarriage}
          class:visible={marriagesCount > 0}
          class="add-another-marriage"
          >Add Another Marriage
        </button>
        {#if marriagesCount > 1}
          <button
            in:scale
            on:click={previousMarriage}
            class:visible={marriagesCount > 1}
            class="previous-marriage"
            >Previous Marriage
          </button>
        {/if}
      {/if}
    </div>
  </div>
</div>

<style>
  h1 {
    text-shadow: 0px 12px 23px rgba(0, 0, 0, 0.25);
  }

  .header {
    margin-bottom: 60px;
    font-weight: 700;
    font-size: 48px;
    color: white;
    /* mb-60px font-bold text-48px text-white */
  }

  .children {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 50px;
    overflow: scroll;
    padding: 24px 16px;
    max-height: 250px;
  }

  .add-another-marriage {
    position: fixed;
    bottom: 150px;
    right: 130px;
    background: white;
    color: #2596ee;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    padding: 12px 50px;
    margin-top: 36px;
    max-height: 44px;
    border-radius: 0.5rem;
    transition: all;
    transition-duration: 300ms;
    --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }

  .previous-marriage {
    position: fixed;
    bottom: 150px;
    left: 130px;
    background: white;
    color: #2596ee;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    padding: 12px 50px;
    margin-top: 36px;
    max-height: 44px;
    border-radius: 0.5rem;
    transition: all;
    transition-duration: 300ms;
    --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }

  .add-another-marriage:hover {
    transform: scale(1.03);
  }
  .overflow {
    overflow: visible;
  }

  @media (min-width: 1536px) {
    .children {
      max-height: 400px;
    }
  }
</style>

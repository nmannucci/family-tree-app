<script>
  import { users } from "../../../models/user";
  import { currentUserStore } from "../../../stores/currentUserStore";
  import AutoComplete from "simple-svelte-autocomplete";
  import { fly, slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  const familyMemberList = [...users];
  let parents = [];
  $: currentUserStore.setParents(parents);
</script>

<div class="w-full px-130px h-screen flex items-center">
  <div
    in:fly={{
      x: 450,
      duration: 500,
      easing: quintOut,
    }}
    class="z-10 mb-36px flex-col"
  >
    <h1 class="mb-60px font-bold text-48px text-white">
      Awesome! Now, Who are your Parents?
    </h1>
    <div class="grid grid-cols-3 gap-50px">
      <div class=" mb-36px">
        <label for="name" class=" text-18px text-white mb-14px"
          >Your Parent
        </label>
        <div class="h-8px" />
        <AutoComplete
          items={familyMemberList}
          labelFieldName="name"
          valueFieldName="id"
          bind:value={parents[0]}
        />
      </div>
      <div class="mb-36px">
        <label for="name" class=" text-18px text-white mb-14px"
          >Your Parent
        </label>
        <div class="h-8px" />
        <AutoComplete
          items={familyMemberList}
          labelFieldName="name"
          valueFieldName="id"
          bind:value={parents[1]}
        />
      </div>
    </div>
  </div>
</div>

<style>
  h1 {
    text-shadow: 0px 12px 23px rgba(0, 0, 0, 0.25);
  }
</style>

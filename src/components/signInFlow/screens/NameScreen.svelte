<script>
  import { currentUserStore } from "../../../stores/currentUserStore";
  import AutoComplete from "simple-svelte-autocomplete";
  import { users } from "../../../models/user";
  import { fade, slide, fly } from "svelte/transition";
  import { quintOut, quintIn, quintInOut } from "svelte/easing";

  const familyMemberList = [...users];

  let name;
</script>

<div class="w-full px-130px h-screen flex items-center">
  <div
    in:fly={{ x: 800, duration: 1000, easing: quintIn, delay: 1100 }}
    class="z-10 mb-36px flex flex-col"
  >
    <h1 class="mb-60px font-bold text-48px text-white">
      First off, What's your Name?
    </h1>
    <div class="w-400px mb-36px">
      <label for="name" class=" text-18px text-white mb-14px">Your Name</label>
      <div class="h-8px" />
      <AutoComplete
        items={familyMemberList}
        labelFieldName="name"
        valueFieldName="value"
        bind:value={name}
      />
    </div>
    <p class="w-6/10 text-18px text-white leading-30px">
      If someone in the family already added your name to their tree, then your
      name will show up. If no one in your family has added you to their tree,
      then your name will not show up.
    </p>
  </div>
</div>

<style>
  h1 {
    text-shadow: 0px 12px 23px rgba(0, 0, 0, 0.25);
  }
</style>

<script>
  //TODO: Add error handling if user does not match name with relationship when deleting someone.
  import familyStore from "../../family-store";
  import ProfileFamBox from "../../components/UI/ProfileFamBox.svelte";
  import ProfileIcon from "../../components/UI/ProfileIcon.svelte";

  let familyMemberInput = "";
  let selectedRelationship;
  let deleteRelationship;
  let selectedDeleteMember;

  function addFamilyMember() {
    if (selectedRelationship == "spouse") {
      familyStore.update((familyObject) => {
        familyObject.spouse = [
          ...familyObject.spouse,
          { name: familyMemberInput },
        ];
        return familyObject;
      });
    } else if (selectedRelationship === "parent") {
      familyStore.update((familyObject) => {
        familyObject.parents = [
          ...familyObject.parents,
          { name: familyMemberInput },
        ];
        return familyObject;
      });
    } else if (selectedRelationship === "sibling") {
      familyStore.update((familyObject) => {
        familyObject.siblings = [
          ...familyObject.siblings,
          { name: familyMemberInput },
        ];
        return familyObject;
      });
    } else if (selectedRelationship === "children") {
      familyStore.update((familyObject) => {
        familyObject.children = [
          ...familyObject.children,
          { name: familyMemberInput },
        ];
        return familyObject;
      });
    }
    familyMemberInput = "";
  }

  function deleteMember() {
    if (deleteRelationship === "spouse") {
      familyStore.update((familyObject) => {
        familyObject.spouse = familyObject.spouse.filter(
          (obj) => obj.name !== selectedDeleteMember
        );
        return familyObject;
      });
    } else if (deleteRelationship === "parent") {
      familyStore.update((familyObject) => {
        familyObject.parents = familyObject.parents.filter(
          (obj) => obj.name !== selectedDeleteMember
        );
        return familyObject;
      });
    } else if (deleteRelationship === "child") {
      familyStore.update((familyObject) => {
        familyObject.children = familyObject.children.filter(
          (obj) => obj.name !== selectedDeleteMember
        );
        return familyObject;
      });
    } else if (deleteRelationship === "sibling") {
      familyStore.update((familyObject) => {
        familyObject.siblings = familyObject.siblings.filter(
          (obj) => obj.name !== selectedDeleteMember
        );
        return familyObject;
      });
    }
  }
</script>

<svelte:head>
  <title>Edit Family</title>
</svelte:head>

<section class="p-36px ">
  <h1 class="font-bold text-36px text-black mb-36px">Edit Family</h1>
  <div class="max-w-1100px">
    <form class="grid grid-cols-3 gap-32px items-end">
      <div>
        <label for="name" class="block mb-8px">Name of Family Member</label>
        <input
          type="text"
          class="px-12px py-1 w-full text-lg border border-hex-6E84A3 rounded-md shadow-sm"
          bind:value={familyMemberInput}
        />
      </div>
      <div>
        <label for="relationship" class="block mb-8px">Relationship</label>
        <select
          name="relationship"
          class="py-8px px-12px w-full border border-hex-6E84A3 text-black rounded-md text-lg "
          bind:value={selectedRelationship}
        >
          <option value="spouse">Spouse</option>
          <option value="parent">Parent</option>
          <option value="sibling">Sibling</option>
          <option value="child">Child</option>
        </select>
      </div>
      <button
        class="rounded-md bg-blue-500 max-h-43px w-full p-2 text-white font-medium outline-none hover:(bg-blue-600 transform scale-103) transition"
        on:click|preventDefault={addFamilyMember}
        >Add Member
      </button>
    </form>
    <div class="mt-24px grid grid-cols-3 gap-32px items-end">
      <div class="col-start-1 cold-end-2">
        <label for="delete" class="block mb-8px">Delete a Member</label>
        <select
          name="delete"
          class="py-8px px-12px w-full border border-hex-6E84A3 text-black rounded-md text-lg "
          bind:value={selectedDeleteMember}
        >
          {#each $familyStore.spouse as member}
            <option>{member.name}</option>
          {/each}
          {#each $familyStore.parents as member}
            <option>{member.name}</option>
          {/each}
          {#each $familyStore.children as member}
            <option>{member.name}</option>
          {/each}
          {#each $familyStore.siblings as member}
            <option>{member.name}</option>
          {/each}
        </select>
      </div>
      <div>
        <label for="relationship" class="block mb-8px"
          >Delete Member Relationship</label
        >
        <select
          name="relationship"
          class="py-8px px-12px w-full border border-hex-6E84A3 text-black rounded-md text-lg "
          bind:value={deleteRelationship}
        >
          <option value="spouse">Spouse</option>
          <option value="parent">Parent</option>
          <option value="sibling">Sibling</option>
          <option value="child">Child</option>
        </select>
      </div>
      <button
        class=" rounded-md bg-red-500 max-h-43px w-full p-2 text-white font-medium outline-none hover:(bg-red-600 transform scale-103) transition"
        on:click|preventDefault={deleteMember}
        >Delete Member
      </button>
    </div>
  </div>
  <div class="flex flex-wrap mt-64px">
    <ProfileFamBox title="Spouse">
      {#each $familyStore.spouse as spouse}
        <ProfileIcon name={spouse.name} />
      {/each}
    </ProfileFamBox>
    <ProfileFamBox title="Parents">
      {#each $familyStore.parents as parent}
        <ProfileIcon name={parent.name} />
      {/each}
    </ProfileFamBox>
    <ProfileFamBox title="Children">
      {#each $familyStore.children as child}
        <ProfileIcon name={child.name} />
      {/each}
    </ProfileFamBox>
    <ProfileFamBox title="Siblings">
      {#each $familyStore.siblings as sibling}
        <ProfileIcon name={sibling.name} />
      {/each}
    </ProfileFamBox>
  </div>
</section>

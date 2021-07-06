<script>
  //TODO: Add error handling if user does not match name with relationship when deleting someone.
  // TODO: Error when you delete spouse then add them back.
  import { onMount } from "svelte";
  import familyStore from "../../stores/family-store";
  import profileStore from "../../profile-store";
  import ProfileFamBox from "../../components/UI/ProfileFamBox.svelte";
  import ProfileIcon from "../../components/UI/ProfileIcon.svelte";

  let familyObject;
  let profileName;
  let spouse;
  let siblings = [];
  let parents = [];
  let children = [];

  let familyMemberInput = "";
  let selectedRelationship;
  let deleteRelationship;
  let selectedDeleteMember = "Choose a member";

  onMount(() => {
    profileName = $profileStore.firstName + " " + $profileStore.lastName;
    familyObject = $familyStore;

    for (let i of familyObject.marriages[0].children) {
      if (i.name == profileName && i.marriages) {
        spouse = i.marriages[0].spouse.name;

        if (i.marriages[0].children) {
          for (let e of i.marriages[0].children) {
            children = [...children, e.name];
          }
        } else {
          children = [];
        }
      }

      if (i.name !== profileName) {
        siblings = [...siblings, i.name];
      }
    }
    parents = [familyObject.name, familyObject.marriages[0].spouse.name];
  });

  function addFamilyMember() {
    if (selectedRelationship == "spouse") {
      familyStore.update((familyObject) => {
        spouse = familyMemberInput;
        for (let i of familyObject.marriages[0].children) {
          if (i.name == profileName) {
            i.marriages[0].spouse = { name: spouse };
          }
        }
        familyMemberInput = "";
        console.log(familyObject);
        return familyObject;
      });
    } else if (selectedRelationship === "parent") {
      familyStore.update((familyObject) => {
        let parentLimitCheck = [...parents, familyMemberInput];
        if (parentLimitCheck.length <= 2) {
          parents = [...parents, familyMemberInput];
          familyObject.name = parents[0];
          familyObject.marriages[0].spouse.name = parents[1];
        } else {
          alert("No more than two parents allowed");
        }
        // familyObject.marriages = [
        //   ...familyObject.marriages,
        //   {
        //     spouse: {
        //       name: familyMemberInput,
        //     },
        //   },
        // ];
        familyMemberInput = "";
        console.log(familyObject);
        return familyObject;
      });
    } else if (selectedRelationship === "sibling") {
      familyStore.update((familyObject) => {
        siblings = [...siblings, familyMemberInput];
        for (let i of familyObject.marriages[0].children) {
          if (i.name !== profileName) {
            familyObject.marriages[0].children = [
              ...familyObject.marriages[0].children,
              { name: familyMemberInput },
            ];
            break;
          }
        }
        familyMemberInput = "";
        console.log(familyObject);
        return familyObject;
      });
    } else if (selectedRelationship === "child") {
      familyStore.update((familyObject) => {
        children = [...children, familyMemberInput];
        for (let i of familyObject.marriages[0].children) {
          if (i.name == profileName) {
            i.marriages[0].children = [
              ...i.marriages[0].children,
              { name: familyMemberInput },
            ];
          }
        }
        familyMemberInput = "";
        console.log(familyObject);
        return familyObject;
      });
    }
  }

  function deleteMember() {
    if (deleteRelationship === "spouse") {
      familyStore.update((familyObject) => {
        if (selectedDeleteMember == spouse) {
          spouse = "";
        }
        for (let i of familyObject.marriages[0].children) {
          if (i.name == profileName) {
            if (i.marriages[0].spouse.name == selectedDeleteMember) {
              // Be careful here bc just leaves empty object for spouse, does not delete entire spuose field.
              i.marriages[0].spouse = undefined;
            }
          }
        }
        return familyObject;
      });
    } else if (deleteRelationship === "parent") {
      familyStore.update((familyObject) => {
        parents = parents.filter((person) => person !== selectedDeleteMember);
        familyObject.name = parents[0];
        familyObject.marriages[0].spouse.name = parents[1];

        console.log(familyObject);
        return familyObject;
      });
    } else if (deleteRelationship === "child") {
      familyStore.update((familyObject) => {
        children = children.filter((person) => person !== selectedDeleteMember);

        for (let i of familyObject.children) {
          if (i.name == profileName) {
            i.children = i.children.filter(
              (person) => person.name !== selectedDeleteMember
            );
          }
        }
        return familyObject;
      });
    } else if (deleteRelationship === "sibling") {
      familyStore.update((familyObject) => {
        siblings = siblings.filter((person) => person !== selectedDeleteMember);

        for (let i of familyObject.children) {
          if (i.name !== profileName) {
            familyObject.children = familyObject.children.filter(
              (person) => person.name !== selectedDeleteMember
            );
          }
        }

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
  <!-- {#if parentLimitError}
    <h2 class="font-medium text-lg text-red-500">
      No more than two parents is allowed
    </h2>
  {/if} -->

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
          class="py-8px px-12px w-full border border-hex-6E84A3 text-black rounded-md text-lg"
          bind:value={selectedDeleteMember}
        >
          <option value="Choose a member">Choose a member</option>
          {#if spouse}
            <option>{spouse}</option>
          {/if}
          {#each parents as parent}
            <option>{parent}</option>
          {/each}
          {#each children as child}
            <option>{child}</option>
          {/each}
          {#each siblings as sibling}
            <option>{sibling}</option>
          {/each}
        </select>
      </div>
      <div>
        <label for="relationship" class="block mb-8px"
          >Delete Member Relationship
        </label>
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
    {#if spouse !== "" && spouse !== undefined}
      <ProfileFamBox title="Spouse">
        <ProfileIcon name={spouse} />
      </ProfileFamBox>
    {/if}
    <ProfileFamBox title="Parents">
      {#each parents as parent}
        <ProfileIcon name={parent} />
      {/each}
    </ProfileFamBox>
    <ProfileFamBox title="Children">
      {#each children as child}
        <ProfileIcon name={child} />
      {/each}
    </ProfileFamBox>
    <ProfileFamBox title="Siblings">
      {#each siblings as sibling}
        <ProfileIcon name={sibling} />
      {/each}
    </ProfileFamBox>
  </div>
</section>

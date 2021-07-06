<script>
  import { fade } from "svelte/transition";
  import profileStore from "../profile-store";
  import { currentUserStore } from "../stores/currentUserStore";
  import ProfileBioCard from "../components/profile_components/ProfileBioCard.svelte";
  import ProfileFamilySection from "../components/profile_components/ProfileFamilySection.svelte";
  import ProfileIcon from "../components/profile_components/ProfileIcon.svelte";
  import ProfileInfoCard from "../components/profile_components/ProfileInfoCard.svelte";
  import RecentUploads from "../components/UI/RecentUploads.svelte";
  import { onMount } from "svelte";

  // TODO: Fix if someone children or siblings or parents is empty

  let familyObject;
  let profileName;
  let spouse = $currentUserStore.marriages[0].spouse;
  let siblings = $currentUserStore.siblings;
  let parents = $currentUserStore.parents;
  let children = $currentUserStore.marriages[0].children;
  // onMount(() => {
  //   profileName = $profileStore.firstName + " " + $profileStore.lastName;
  //   familyObject = $familyStore;

  //   for (let i of familyObject.marriages[0].children) {
  //     if (i.name == profileName && i.marriages) {
  //       spouse = i.marriages[0].spouse.name;

  //       if (i.marriages[0].children) {
  //         for (let e of i.marriages[0].children) {
  //           children = [...children, e.name];
  //         }
  //       } else {
  //         children = [];
  //       }
  //     }

  //     if (i.name !== profileName) {
  //       siblings = [...siblings, i.name];
  //     }
  //   }
  //   parents = [familyObject.name, familyObject.marriages[0].spouse.name];
  // });

  let recentUplaods = [
    "https://source.unsplash.com/random/640x300",
    "https://source.unsplash.com/random/640x640",
    "https://source.unsplash.com/random/640x290",
    "https://source.unsplash.com/random/640x820",
    "https://source.unsplash.com/random/640x600",
    "https://source.unsplash.com/random/450x600",
    "https://source.unsplash.com/random/230x400",
  ];

  let hideContactPanel = false;
  function toggleContactPanel() {
    hideContactPanel = !hideContactPanel;
  }
</script>

<svelte:head>
  <title>Profile</title>
</svelte:head>

{#if hideContactPanel}
  <div
    class="modal-backdrop"
    on:click={toggleContactPanel}
    transition:fade={{ duration: 500 }}
  />
{/if}
<ProfileInfoCard {hideContactPanel}>
  <button class="exit-button" on:click={toggleContactPanel}>
    <svg
      width="40"
      height="40"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.25 9.75L9.75 20.25"
        stroke="#959AA3"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.75 9.75L20.25 20.25"
        stroke="#959AA3"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
</ProfileInfoCard>

<div class="flex justify-center">
  <div class="main-section">
    <div class="header-section">
      <button class="contact-button" on:click={toggleContactPanel}
        >Contact Info
      </button>
      <ProfileIcon />
    </div>
    <ProfileBioCard />
    <ProfileFamilySection />
    <RecentUploads imageArray={recentUplaods} title="Recent Uplaods" />
  </div>
</div>

<style>
  button {
    outline: none;
  }
  .main-section {
    display: flex;
    flex-direction: column;
    padding-top: 32px;
    background: #f9fbfd;
    height: 100%;
    max-width: 1300px;
  }

  .header-section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    margin-bottom: 24px;
  }

  .exit-button {
    background: white;
    width: fit-content;
    height: fit-content;
    align-self: flex-end;
    transform: translateY(24px);
    transition: all 400ms;
  }

  .contact-button {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    background: #2596ee;
    color: white;
    align-self: end;
    border-radius: 9px;
    width: fit-content;
    height: fit-content;
    padding: 8px 20px;
    transition: all 400ms;
  }

  .contact-button:hover {
    transform: scale(1.03);
    background: #51b3ff;
  }
  .modal-backdrop {
    position: fixed;
    top: 0px;
    left: 0px;
    height: 100vh;
    width: 100%;
    z-index: 10;
    background: rgba(0, 0, 0, 0.25);
  }
</style>

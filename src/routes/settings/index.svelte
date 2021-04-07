<script>
  import profileStore from "../../profile-store";
  import FixedButton from "../../components/UI/FixedButton.svelte";
  import Input from "../../components/UI/Input.svelte";

  let firstName = $profileStore.firstName;
  let lastName = $profileStore.lastName;
  let phone = $profileStore.contact.phone;
  let email = $profileStore.contact.email;
  let bio = $profileStore.bio;
  let streetAddress = $profileStore.contact.address.street;
  let city = $profileStore.contact.address.city;
  let state = $profileStore.contact.address.state;
  let zip = $profileStore.contact.address.zip;

  function saveChanges() {
    profileStore.update((profile) => {
      profile.firstName = firstName;
      profile.lastName = lastName;
      profile.contact.email = email;
      profile.bio = bio;
      profile.contact.address.street = streetAddress;
      profile.contact.address.city = city;
      profile.contact.address.state = state;
      profile.contact.address.zip = zip;
      profile.contact.address.phone = phone;
      return profile;
    });
  }
</script>

<svelte:head>
  <title>Settings</title>
</svelte:head>

<section class="p-36px">
  <h1 class="font-bold text-36px text-black mb-18px">Settings</h1>

  <a
    href="settings/edit-family"
    class="rounded-md bg-blue-500 max-h-43px p-2 text-white font-medium outline-none hover:(bg-blue-600 transform scale-103) transition inline-block"
  >
    Edit Immediate Family
  </a>
</section>

<div class="px-36px pb-75px w-full bg-hex-f9fbfd relative">
  <form>
    <div class="grid grid-cols-4 w-full gap-36px">
      <div id="f-name" class="col-span-1">
        <label for="first-name" class="block">First Name</label>
        <Input
          type="text"
          value={firstName}
          on:input={(event) => {
            firstName = event.target.value;
          }}
        />
      </div>

      <div id="l-name" class="col-span-1">
        <label for="last-name" class="block">Last Name</label>
        <Input
          type="text"
          value={lastName}
          on:input={(event) => {
            lastName = event.target.value;
          }}
        />
      </div>

      <div id="l-name" class="col-start-1 col-end-2">
        <label for="last-name" class="block">Phone Number</label>
        <Input
          type="text"
          value={phone}
          on:input={(event) => {
            phone = event.target.value;
          }}
        />
      </div>

      <div id="email" class="col-start-1 col-end-3">
        <label for="email" class="block">Email</label>
        <Input
          type="email"
          value={email}
          on:input={(event) => {
            email = event.target.value;
          }}
        />
      </div>

      <div id="photo" class="col-start-1 col-end-2">
        <label for="photo" class="block">Photo</label>
        <div class="flex items-center justify-between -lg:flex-col ">
          <div
            class="w-96px h-96px mt-8px bg-blue-300 rounded-full -lg:mb-8px"
          />
          <button
            class="rounded-md bg-blue-500 max-h-43px p-2 text-white font-medium hover:(bg-blue-600 transform scale-103) transition "
            >Change Photo
          </button>
        </div>
      </div>

      <div id="bio" class="col-start-1 col-end-4">
        <label for="bio" class="block">Bio</label>
        <textarea
          type="text"
          class="px-12px py-1 mt-8px w-full min-h-120px max-h-800px text-lg border border-hex-6E84A3 rounded-md shadow-sm"
          value={bio}
          on:input={(event) => {
            bio = event.target.value;
          }}
        />
      </div>

      <div id="address" class="col-start-1 col-end-3">
        <label for="address" class="block">Street Address</label>
        <Input
          type="text"
          value={streetAddress}
          on:input={(event) => {
            streetAddress = event.target.value;
          }}
        />
      </div>

      <div id="city" class="col-start-1">
        <label for="city" class="block">City</label>
        <Input
          type="text"
          value={city}
          on:input={(event) => {
            city = event.target.value;
          }}
        />
      </div>

      <div id="state" class="col-span-1">
        <label for="state" class="block">State/Province</label>
        <Input
          type="text"
          value={state}
          on:input={(event) => {
            state = event.target.value;
          }}
        />
      </div>

      <div id="postal" class="col-span-1">
        <label for="postal" class="block">Zip/Postal Code</label>
        <Input
          type="text"
          value={zip}
          on:input={(event) => {
            zip = event.target.value;
          }}
        />
      </div>
    </div>
  </form>
  <FixedButton title="Save Changes" on:click={saveChanges} />
</div>

<style>
  /* .edit-button {
    @apply rounded-md bg-blue-500 max-h-43px p-2 text-white font-medium outline-none hover:(bg-blue-600 transform scale-103) transition;
  } */
</style>

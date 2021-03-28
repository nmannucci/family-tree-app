<script>
  import FixedButton from "../components/UI/FixedButton.svelte";
  import Input from "../components/UI/Input.svelte";
</script>

<svelte:head>
  <title>Settings</title>
</svelte:head>

<section class="p-36px">
  <h1 class="font-bold text-36px text-black">Settings</h1>
</section>

<div class="px-36px pb-75px w-full bg-hex-f9fbfd relative">
  <form>
    <div class="grid grid-cols-4 w-full gap-36px">
      <div id="f-name" class="col-span-1">
        <label for="first-name" class="block">First Name</label>
        <Input type="text" />
      </div>

      <div id="l-name" class="col-span-1">
        <label for="last-name" class="block">Last Name</label>
        <Input type="text" />
      </div>

      <div id="email" class="col-start-1 col-end-3">
        <label for="email" class="block">Email</label>
        <Input type="email" />
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
          class="px-12px py-1 mt-8px w-full min-h-120px text-lg border border-hex-6E84A3 rounded-md shadow-sm"
        />
      </div>

      <div id="address" class="col-start-1 col-end-3">
        <label for="address" class="block">Street Address</label>
        <Input type="text" />
      </div>

      <div id="city" class="col-start-1">
        <label for="city" class="block">City</label>
        <Input type="text" />
      </div>

      <div id="state" class="col-span-1">
        <label for="state" class="block">State/Province</label>
        <Input type="text" />
      </div>

      <div id="postal" class="col-span-1">
        <label for="postal" class="block">Zip/Postal Code</label>
        <Input type="text" />
      </div>
    </div>
  </form>
  <FixedButton title="Save Changes" />
</div>

<style>
</style>

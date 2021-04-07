<script>
  import familyStore from "../family-store";
  import profileStore from "../profile-store";
  import ProfileFamBox from "../components/UI/ProfileFamBox.svelte";
  import RecentUploads from "../components/UI/RecentUploads.svelte";
  import ProfileIcon from "../components/UI/ProfileIcon.svelte";

  let recentUplaods = [
    "https://source.unsplash.com/random/640x300",
    "https://source.unsplash.com/random/640x640",
    "https://source.unsplash.com/random/640x290",
    "https://source.unsplash.com/random/640x820",
    "https://source.unsplash.com/random/640x600",
    "https://source.unsplash.com/random/450x600",
    "https://source.unsplash.com/random/230x400",
  ];
</script>

<svelte:head>
  <title>Profile</title>
</svelte:head>

<section class="pb-50px bg-hex-F8FBFD">
  <div class="flex flex-col justify-center items-center p-16px">
    <div class=" w-144px h-144px rounded-full bg-purple-500" />
    <h1 class="text-center mt-12px font-bold text-40px">
      {$profileStore.firstName}
      {$profileStore.lastName}
    </h1>
  </div>
  <!-- Body of page -->
  <div>
    <div class="ml-32px mr-32px mt-16px">
      <div class="grid grid-cols-2 gap-16px">
        <div class="col-span-1">
          <h2 class="font-md text-lg mb-12px text-hex-6E84A3">Contact Info</h2>
          <div class="rounded-md p-16px shadow-lg bg-white min-h-196px">
            <div class="flex justify-between pb-12px">
              <h3 class="font-medium text-base">Phone Number:</h3>
              <p class="text-right">{$profileStore.contact.phone}</p>
            </div>
            <div class="flex justify-between pb-12px">
              <h3 class="font-medium text-base">Email:</h3>
              <p class="text-right">{$profileStore.contact.email}</p>
            </div>
            <div class="flex justify-between pb-12px">
              <h3 class="font-medium text-base">Address:</h3>
              <p class="text-right">
                {$profileStore.contact.address.street}, <br />
                {$profileStore.contact.address.city}
                {$profileStore.contact.address.state},
                <br />{$profileStore.contact.address.zip}
                {$profileStore.contact.address.country}
              </p>
            </div>
          </div>
        </div>
        <div class="col-span-1">
          <h2 class="font-md text-lg mb-12px text-hex-6E84A3">Bio</h2>
          <div class="rounded-md p-16px shadow-lg bg-white min-h-196px">
            <p>
              {$profileStore.bio}
            </p>
          </div>
        </div>
      </div>
      <div class="mt-36px">
        <h2 class="font-md text-lg mb-12px text-hex-6E84A3">
          Immediete Family
        </h2>
        <div class="flex flex-wrap">
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
          <ProfileFamBox title="Siblings">
            {#each $familyStore.siblings as sibling}
              <ProfileIcon name={sibling.name} />
            {/each}
          </ProfileFamBox>
          <ProfileFamBox title="Children">
            {#each $familyStore.children as child}
              <ProfileIcon name={child.name} />
            {/each}
          </ProfileFamBox>
        </div>
      </div>
      <!-- Margin is 20px bc 16 bottom margin is from ProfileFamBox and needs to be 36px in total -->
      <div class="mt-20px">
        <RecentUploads title="Recent Uploads" imageArray={recentUplaods} />
      </div>
    </div>
  </div>
</section>

<style>
</style>

<script>
  import { children } from "svelte/internal";
  import ProfileFamBox from "../components/UI/ProfileFamBox.svelte";
  import ProfileIcon from "../components/UI/ProfileIcon.svelte";

  let name = "Nico Mannucci";

  let familyObject = {
    parents: [{ name: "Jamie Johnson" }, { name: "Mark Blitz" }],
    siblings: [{ name: "Johnny Blitz" }, { name: "Maggie Blitz" }],
    children: [
      { name: "Darwin Blitz" },
      { name: "Lily Blitz" },
      { name: "Violet Blitz" },
    ],
  };
</script>

<svelte:head>
  <title>Profile</title>
</svelte:head>

<section class="pb-100px">
  <div class="flex flex-col justify-center items-center p-16px">
    <div class=" w-144px h-144px rounded-full bg-purple-500" />
    <h1 class="text-center mt-12px font-bold text-40px">{name}</h1>
  </div>
  <!-- Body of page -->
  <div>
    <div class="ml-32px mr-32px mt-16px">
      <div class="grid grid-cols-3 gap-16px">
        <div class="col-span-1">
          <h2 class="subtitle">Contact Info</h2>
          <div class="box ">
            <div class="flex justify-between pb-12px">
              <h3 class="font-medium text-lg">Phone Number:</h3>
              <p class="text-right">6263403194</p>
            </div>
            <div class="flex justify-between pb-12px">
              <h3 class="font-medium text-lg">Email:</h3>
              <p class="text-right">hello@gmail.com</p>
            </div>
            <div class="flex justify-between pb-12px">
              <h3 class="font-medium text-lg">Address:</h3>
              <p class="text-right">
                36 San Miguel Rd, <br /> Pasadena CA, <br />91105 United States
              </p>
            </div>
          </div>
        </div>
        <div class="col-span-2">
          <h2 class="subtitle">Bio</h2>
          <div class="box min-h-196px">
            <p>
              Lorem!!!!, ipsum dolor sit amet consectetur adipisicing elit. Amet
              officia perspiciatis totam consequatur nobis mollitia corrupti.
              Illum nam mollitia quidem voluptatum veniam deserunt, delectus
              odit?<br /> <br /> My name is Nico and I am just about to graduate
              college.
            </p>
          </div>
        </div>
      </div>
      <div class="mt-36px">
        <h2 class="subtitle">Immediete Family</h2>
        <div class="flex">
          <ProfileFamBox title="Parents">
            {#each familyObject.parents as parent}
              <ProfileIcon name={parent.name} />
            {/each}
          </ProfileFamBox>
          <ProfileFamBox title="Siblings">
            {#each familyObject.siblings as sibling}
              <ProfileIcon name={sibling.name} />
            {/each}
          </ProfileFamBox>
          <ProfileFamBox title="Children">
            {#each familyObject.children as child}
              <ProfileIcon name={child.name} />
            {/each}
          </ProfileFamBox>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .subtitle {
    @apply font-md text-lg mb-16px text-hex-6E84A3;
  }

  .box {
    @apply rounded-md p-16px shadow-lg bg-white;
  }
</style>

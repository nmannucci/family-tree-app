<script>
  import UploadButton from "../components/UI/UploadButton.svelte";

  let imageArray = [
    "https://source.unsplash.com/random/640x800",
    "https://source.unsplash.com/random/640x360",
    "https://source.unsplash.com/random/640x640",
    "https://ipsm.io/api/image/640x300/c-718096/jpg",
    "https://ipsm.io/api/image/640x240/c-718096/jpg",
    "https://ipsm.io/api/image/640x360/c-718096/jpg",
    "https://ipsm.io/api/image/300x300/c-718096/jpg",
    "https://ipsm.io/api/image/640x360/c-718096/jpg",
    "https://ipsm.io/api/image/640x360/c-718096/jpg",
    "https://ipsm.io/api/image/640x360/c-718096/jpg",
    "https://ipsm.io/api/image/640x360/c-718096/jpg",
    "https://ipsm.io/api/image/640x360/c-718096/jpg",
    "https://ipsm.io/api/image/640x360/c-718096/jpg",
  ];
</script>

<svelte:head>
  <title>My Uploads</title>
</svelte:head>

<section class="p-36px">
  <div class="flex justify-between mb-40px">
    <h1 class="font-bold text-36px text-black">My Uploads</h1>
    <UploadButton title="Upload" hasIcon="true" />
  </div>
  <h2 class="mb-8px text-hex-6E84A3 text-18px">Recent Uploads</h2>
  <div class="grid grid-cols-3 gap-2 items-center justify-items-center">
    {#each imageArray as image}
      <img class="rounded-md" src={image} alt="" />
    {/each}
  </div>
</section>

<style>
</style>

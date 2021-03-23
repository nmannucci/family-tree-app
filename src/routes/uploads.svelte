<script>
  import IconButton from "../components/UI/IconButton.svelte";
  import RecentUploads from "../components/UI/RecentUploads.svelte";

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
    <IconButton title="Upload" hasIcon="true" />
  </div>
  <RecentUploads {imageArray} title="All Uploads" />
</section>

<style>
</style>

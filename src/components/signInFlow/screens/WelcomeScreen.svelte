<script>
  import { currentUserStore } from "../../../stores/currentUserStore";
  import { fly, fade } from "svelte/transition";
</script>

<div
  class="h-screen w-full bg-gradient-to-tr from-hex-2596EE to-hex-3F6EC9 flex justify-center items-center flex-col pb-100px"
>
  <div
    in:fade={{ duration: 600 }}
    class="z-10 flex flex-col items-center justify-center relative"
  >
    <h2 class="w-1/2 mb-20px py-16px font-bold text-left text-45px text-white">
      Welcome, {$currentUserStore.name}!
    </h2>
    <div class="w-1/2 mb-60px">
      <p class="text-20px text-white leading-7">
        Now, we have a short profile set up so it is easy for you to start
        making your family tree. Make sure to spread the word about your family
        tree so everyone can put in their own information and everyone can take
        a part in building the tree! <br /> <br />
        Given that you signed up with your Google Account your name and email have
        already been filled in. They are as follows: <br /><br />
        Name: {$currentUserStore.name} <br />
        Email: {$currentUserStore.contactInfo.email}
      </p>
    </div>
    <div
      on:click
      class="z-10 cursor-pointer flex items-center justify-center w-226px h-44px bg-white rounded-lg text-20px font-semibold text-hex-2693ED shadow-2xl hover:(transition-all duration-300 transform scale-103)"
    >
      Next
    </div>
    <!-- <img
      in:fly={{ x: 300, duration: 3000 }}
      class="dog"
      src="img/dog.png"
      alt="brown dog"
    /> -->
  </div>
</div>

<style>
  h2 {
    text-shadow: 0px 12px 23px rgba(0, 0, 0, 0.25);
  }
  .dog {
    position: absolute;
    right: 100px;
    overflow: hidden;
    bottom: -200px;
    z-index: 10;
    width: 420px;
    height: 420px;
    visibility: hidden;
  }
</style>

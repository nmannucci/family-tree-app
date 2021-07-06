<script>
  import { onMount } from "svelte";
  import { fade, fly, slide } from "svelte/transition";
  import { spring } from "svelte/motion";
  import { currentUserStore } from "../../stores/currentUserStore";
  import Loader from "../../components/Loader.svelte";
  import NavButton from "../../components/signInFlow/NavButton.svelte";
  import WelcomeScreen from "../../components/signInFlow/screens/WelcomeScreen.svelte";
  import NameScreen from "../../components/signInFlow/screens/NameScreen.svelte";
  import ParentsScreen from "../../components/signInFlow/screens/ParentsScreen.svelte";
  import SiblingsScreen from "../../components/signInFlow/screens/SiblingsScreen.svelte";
  import MarriagesScreen from "../../components/signInFlow/screens/MarriagesScreen.svelte";

  onMount(() => {
    initFirebaseAuth();
  });

  function initFirebaseAuth() {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        let displayName = user.displayName;
        let email = user.email;
        let emailVerified = user.emailVerified;
        let photoURL = user.photoURL;
        let isAnonymous = user.isAnonymous;
        let uid = user.uid;
        let proivderData = user.proivderData;
        console.log("user", user);
        currentUserStore.setCurrentUserFromFirebase(user);
      } else {
        // User is signed out.
        console.log("User is signed out");
        currentUserStore.set(null);
      }
    });
  }

  const springConfig = { stiffness: 0.02, damping: 0.5 };

  let circ1 = spring({ x: 92, y: 2 }, springConfig);
  let circ2 = spring({ x: 100, y: 100 }, springConfig);
  let circ3 = spring({ x: 100, y: 10 }, springConfig);
  let circ4 = spring({ x: 450, y: 10 }, springConfig);
  let circ5 = spring({ x: -40, y: 300 }, springConfig);

  const transformCircles = () => {
    if (onBoardingStep === 1) {
      circ1.set({ x: 40, y: 25 });
      circ2.set({ x: 120, y: 10 });
      circ3.set({ x: 30, y: 200 });
      circ4.set({ x: -80, y: 100 });
      circ5.set({ x: -320, y: -300 });
    } else if (onBoardingStep === 2) {
      circ1.set({ x: -20, y: 55 });
      circ2.set({ x: 300, y: 200 });
      circ3.set({ x: -230, y: 40 });
      circ4.set({ x: 60, y: -230 });
      circ5.set({ x: -70, y: 100 });
    } else if (onBoardingStep === 3) {
      circ1.set({ x: 55, y: -30 });
      circ2.set({ x: -30, y: 100 });
      circ3.set({ x: 140, y: 240 });
      circ4.set({ x: -50, y: 90 });
      circ5.set({ x: -350, y: -220 });
    } else if (onBoardingStep === 4) {
      circ1.set({ x: 10, y: 150 });
      circ2.set({ x: 500, y: -90 });
      circ3.set({ x: -100, y: -10 });
      circ4.set({ x: -500, y: -70 });
      circ5.set({ x: 40, y: 140 });
    }
  };

  let onBoardingStep = 0;
  function nextScreen() {
    onBoardingStep++;
    transformCircles();
  }
  function previousScreen() {
    onBoardingStep--;
    transformCircles();
  }

  function onFinishSignIn() {
    console.log($currentUserStore);
  }
</script>

{#if !$currentUserStore}
  <Loader />
{:else if onBoardingStep === 0}
  <WelcomeScreen on:click={nextScreen} />
  <div
    in:fly={{ x: -100, y: -300, duration: 1000 }}
    style="left: {$circ1.x}px; top: {$circ1.y}px"
    class="circle-1"
  />

  <div
    in:fly={{ x: 200, y: 300, duration: 1000, delay: 200 }}
    style="left: {$circ2.x}px; bottom: {$circ2.y}px"
    class="circle-2 overflow-hidden"
  />
  <div
    in:fly={{ x: 400, y: -300, duration: 1000, delay: 400 }}
    style="right: {$circ3.x}px; top: {$circ3.y}px"
    class="circle-3 overflow-hidden "
  />
  <div
    in:fly={{ x: 400, y: 0, duration: 1000, delay: 600 }}
    style="right: {$circ4.x}px; bottom: {$circ4.y}px"
    class="circle-4 overflow-hidden"
  />
  <div
    in:fly={{ x: 100, y: 0, duration: 1000, delay: 800 }}
    style="right: {$circ5.x}px; top: {$circ5.y}px"
    class="circle-5 overflow-hidden"
  />
{:else if onBoardingStep === 1}
  <NameScreen />
  <NavButton isNextButton={true} on:click={nextScreen} />
  <NavButton isNextButton={false} on:click={previousScreen} />
  <div
    style="transform: translateX({$circ1.x}px) translateY({$circ1.y}px);"
    class="circle-1 overflow-hidden"
  />
  <div
    style="transform: translateX({$circ2.x}px) translateY({$circ2.y}px);"
    class="circle-2 overflow-hidden"
  />
  <div
    style="transform: translateX({$circ3.x}px) translateY({$circ3.y}px);"
    class="circle-3 overflow-hidden"
  />
  <div
    style="transform: translateX({$circ4.x}px) translateY({$circ4.y}px);"
    class="circle-4 overflow-hidden"
  />
  <div
    style="transform: translateX({$circ5.x}px) translateY({$circ5.y}px);"
    class="circle-5 overflow-hidden"
  />
{:else if onBoardingStep === 2}
  <ParentsScreen />
  <NavButton isNextButton={true} on:click={nextScreen} />
  <NavButton isNextButton={false} on:click={previousScreen} />
  <div
    style="transform: translateX({$circ1.x}px) translateY({$circ1.y}px);"
    class="circle-1 overflow-hidden"
  />
  <div
    style="transform: translateX({$circ2.x}px) translateY({$circ2.y}px);"
    class="circle-2 overflow-hidden"
  />
  <div
    style="transform: translateX({$circ3.x}px) translateY({$circ3.y}px);"
    class="circle-3 overflow-hidden"
  />
  <div
    style="transform: translateX({$circ4.x}px) translateY({$circ4.y}px);"
    class="circle-4 overflow-hidden"
  />
  <div
    style="transform: translateX({$circ5.x}px) translateY({$circ5.y}px);"
    class="circle-5 overflow-hidden"
  />
{:else if onBoardingStep === 3}
  <SiblingsScreen />
  <NavButton isNextButton={true} on:click={nextScreen} />
  <NavButton isNextButton={false} on:click={previousScreen} />
  <div
    style="transform: translateX({$circ1.x}px) translateY({$circ1.y}px);"
    class="circle-1 overflow-hidden"
  />
  <div
    style="transform: translateX({$circ2.x}px) translateY({$circ2.y}px);"
    class="circle-2 overflow-hidden"
  />
  <div
    style="transform: translateX({$circ3.x}px) translateY({$circ3.y}px);"
    class="circle-3 overflow-hidden"
  />
  <div
    style="transform: translateX({$circ4.x}px) translateY({$circ4.y}px);"
    class="circle-4 overflow-hidden"
  />
  <div
    style="transform: translateX({$circ5.x}px) translateY({$circ5.y}px);"
    class="circle-5 overflow-hidden"
  />
{:else if onBoardingStep === 4}
  <MarriagesScreen />
  <NavButton isNextButton={false} on:click={previousScreen} />
  <a href="familyTree">
    <div
      on:click={onFinishSignIn}
      class="z-5 cursor-pointer fixed bottom-80px right-130px bg-white text-hex-2596EE text-center text-18px font-medium py-12px px-50px max-h-44px w-194px rounded-lg shadow-lg hover:(transform scale-103 transition-all duration-300 shadow-2xl)"
    >
      Finish!
    </div>
  </a>
  <div
    style="transform: translateX({$circ1.x}px) translateY({$circ1.y}px);"
    class="circle-1 overflow-hidden"
  />
  <div
    style="transform: translateX({$circ2.x}px) translateY({$circ2.y}px);"
    class="circle-2 overflow-hidden"
  />
  <div
    style="transform: translateX({$circ3.x}px) translateY({$circ3.y}px);"
    class="circle-3 overflow-hidden"
  />
  <div
    style="transform: translateX({$circ4.x}px) translateY({$circ4.y}px);"
    class="circle-4 overflow-hidden"
  />
  <div
    style="transform: translateX({$circ5.x}px) translateY({$circ5.y}px);"
    class="circle-5 overflow-hidden"
  />
{/if}

<style>
  .circle-1 {
    position: absolute;
    width: 223.4px;
    height: 223.4px;
    left: 92.38px;
    top: 1.99px;
    border-radius: 999px;
    background: linear-gradient(-113.02deg, #2596ee 13.96%, #3f4fc9 96.45%);
    filter: blur(8px);
  }
  /* .c1-step2 {
    position: absolute;
    width: 223.4px;
    height: 223.4px;
    left: 217.38px;
    top: 40.99px;
    border-radius: 999px;
    background: linear-gradient(-113.02deg, #2596ee 13.96%, #3f4fc9 96.45%);
    filter: blur(8px);
  } */
  .circle-2 {
    position: absolute;
    width: 358.35px;
    height: 358.35px;
    left: 100.16px;
    bottom: 100.97px;
    border-radius: 999px;

    background: linear-gradient(-113.02deg, #2596ee 13.96%, #3f4fc9 96.45%);
    filter: blur(2px);
    /* animation-name: circle-2-animation;
    animation-duration: 5s;
    animation-direction: alternate;
    animation-delay: 700ms;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite; */
  }
  @keyframes circle-2-animation {
    0% {
      left: 70.99px;
      top: 469px;
    }
    50% {
      left: 55.99px;
      top: 450px;
      transform: rotate(90deg);
    }
    100% {
      left: 40.99px;
      top: 440px;
      transform: rotate(130deg);
    }
  }

  .circle-3 {
    position: absolute;
    width: 170.54px;
    height: 170.54px;
    right: 100.7px;
    top: 10.65px;
    border-radius: 999px;
    background: linear-gradient(-113.02deg, #2596ee 13.96%, #3f4fc9 96.45%);
    filter: blur(3px);
    /* animation-name: circle-3-animation;
    animation-duration: 5s;
    animation-direction: alternate;
    animation-delay: 900ms;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite; */
  }
  @keyframes circle-3-animation {
    from {
      left: 372px;
      top: 636px;
    }
    to {
      left: 390px;
      top: 680px;
      transform: rotate(134deg);
    }
  }

  .circle-4 {
    position: absolute;
    width: 199.69px;
    height: 199.69px;
    right: 450.75px;
    bottom: 40px;
    border-radius: 999px;
    background: linear-gradient(27.68deg, #2596ee 13.96%, #3f4fc9 96.45%);
    filter: blur(5px);

    /* animation-name: circle-4-animation;
    animation-duration: 5s;
    animation-direction: alternate;
    animation-delay: 1100ms;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite; */
  }
  @keyframes circle-4-animation {
    from {
      right: -25px;
      bottom: 10px;
    }
    to {
      right: -5px;
      bottom: 20px;
      transform: rotate(134deg);
    }
  }

  .circle-5 {
    position: absolute;
    width: 322.76px;
    height: 322.76px;
    right: -40.24px;
    top: 300px;
    border-radius: 999px;
    background: linear-gradient(-113.02deg, #2596ee 13.96%, #3f4fc9 96.45%);
    filter: blur(5px);

    /* animation-name: circle-5-animation;
    animation-duration: 4.5s;
    animation-direction: alternate;
    animation-delay: 1300ms;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite; */
  }
  @keyframes circle-5-animation {
    from {
      left: 300.39px;
      top: -100.68px;
      transform: rotate(106.54deg);
    }
    to {
      left: 320.39px;
      top: -80.68px;
      transform: rotate(70deg);
    }
  }
</style>

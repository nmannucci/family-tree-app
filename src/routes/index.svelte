<script>
  // SIGN IN PAGE FOR FAMILY TREE
  import { onMount } from "svelte";

  onMount(() => {
    createLoginButton();
  });

  let homepageUrl = "http://localhost:3000/familyTree";
  let signInFlowUrl = "http://localhost:3000/signInFlow/step1";

  let isNewUser = false;

  function createLoginButton() {
    var uiConfig = {
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      // signInSuccessUrl: signInFlowUrl,
      callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
          if (authResult.additionalUserInfo.isNewUser) {
            window.location.assign("/signInFlow/intro");
          } else {
            window.location.assign("/familyTree");
          }
          // return false;
        },
      },
    };

    // Initialize the FirebaseUI Widget using Firebase.
    var ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(firebase.auth());
    // The start method will wait until the DOM is loaded.
    ui.start("#firebaseui-auth-container", uiConfig);
  }
</script>

<div class="w-full h-screen bg-gradient-to-r from-blue-400 to-green-500 ">
  <div class="flex flex-col justify-center items-center">
    <h1 class="pt-70px px-20px font-bold text-white text-center text-5xl">
      Sign In Page for your Family Tree
    </h1>
    <div class="p-30px flex flex-col justify-center items-center">
      <h3 class="mb-16px text-xl text-white font-semibold">
        Sign in below using your Google account
      </h3>
      <div id="firebaseui-auth-container" />
    </div>
  </div>
</div>

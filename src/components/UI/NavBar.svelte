<script>
  export let segment;

  function logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        console.log("Sign out successful");
        // await tick() Use this for re-rendering the login button on the page
        // createLoginButton();
      })
      .catch((error) => {
        alert(error);
      });
  }

  function profileIconClicked() {
    window.location.assign("/profile");
  }
</script>

<div class="navbar">
  <div class="profile" on:click={profileIconClicked}>
    <div class="profile-icon" />
    <p class="profile-txt">Nico Mannucci</p>
  </div>
  <div class="nav-items">
    <ul>
      <li>
        <a href="familyTree" class:selected-page={segment === "familyTree"}
          >My Family Tree
        </a>
      </li>
      <li>
        <a href="profile" class:selected-page={segment === "profile"}
          >My Profile
        </a>
      </li>
      <li>
        <a href="uploads" class:selected-page={segment === "uploads"}
          >My Uploads
        </a>
      </li>
      <li>
        <a href="settings" class:selected-page={segment === "settings"}
          >My Settings
        </a>
      </li>
      <li><a href="#" on:click={logout}>Logout</a></li>
    </ul>
  </div>
</div>

<style>
  .navbar {
    position: fixed;
    z-index: 10;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: space-between;
    padding: 0px 24px;
    width: 100%;
    height: 10vh;
    background: #f9fbfd;
  }

  .nav-items {
    display: flex;
    align-items: center;
  }

  li {
    display: inline;
  }

  .selected-page {
    border-radius: 6px;
    color: #0a59da;
    background: #dbeafe;
    box-shadow: 0px 6px 21px rgba(0, 0, 0, 0.1);
  }

  .nav-items a {
    padding: 6px 24px;
    margin: 0px 4px;
    font-size: 15px;
    font-weight: 500;
    border-radius: 6px;
    transition: all;
    transition-duration: 300ms;
  }

  .nav-items a:hover {
    color: #0a59da;
    background: #e2eefe;
    box-shadow: 0px 6px 21px rgba(0, 0, 0, 0.1);
  }

  .profile {
    display: flex;
    height: 100%;
    align-items: center;
    cursor: pointer;
  }

  .profile-txt {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin-left: 12px;
  }

  .profile-icon {
    width: 41px;
    height: 41px;
    border-radius: 99px;
    background: #7c3aed;
  }
</style>

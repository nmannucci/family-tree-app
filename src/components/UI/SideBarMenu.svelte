<script>
  import profileStore from "../../profile-store";

  export let segment;
</script>

<div
  class="flex flex-col pt-16px pb-16px w-280px fixed top-0 left-0 bg-white h-full overflow-hidden"
>
  <div class="flex flex-col items-center">
    <div class="rounded-full w-100px h-100px bg-blue-500" />
    <h2 class=" mt-12px font-bold text-black text-24px">
      {$profileStore.firstName}
      {$profileStore.lastName}
    </h2>
  </div>
  <ul class="mt-52px w-full text-black text-20px font-medium h-full">
    <div class="flex flex-col justify-between h-full">
      <div>
        <a class="text-black text-lg block" href=".">
          <div
            class="w-full hover:(bg-blue-100 transform scale-103) cursor-pointer rounded-md"
            class:bg-blue-100={segment === undefined}
          >
            <li class="flex mb-32px justify-start p-12px pl-50px">
              <i class="mr-16px ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-users text-blue-600"
                  ><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle
                    cx="9"
                    cy="7"
                    r="4"
                  /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path
                    d="M16 3.13a4 4 0 0 1 0 7.75"
                  />
                </svg>
              </i>
              Family Tree
            </li>
          </div>
        </a>
        <a class="text-black text-lg block" href="profile">
          <div
            class="w-full hover:(bg-blue-100 transform scale-103) cursor-pointer rounded-md"
            class:bg-blue-100={segment === "profile"}
          >
            <li class="flex mb-32px justify-start p-12px pl-50px">
              <i class="mr-16px ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-user text-blue-600"
                  ><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle
                    cx="12"
                    cy="7"
                    r="4"
                  />
                </svg>
              </i>
              My Profile
            </li>
          </div>
        </a>
        <a class="text-black text-lg block" href="uploads">
          <div
            class="w-full hover:(bg-blue-100 transform scale-103) cursor-pointer rounded-md"
            class:bg-blue-100={segment === "uploads"}
          >
            <li class="flex mb-32px justify-start p-12px pl-50px">
              <i class="mr-16px ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-upload text-blue-600"
                >
                  <path
                    d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                  /><polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
              </i>
              My Uploads
            </li>
          </div>
        </a>
      </div>
      <div>
        <a class="text-black text-lg block" href="settings">
          <div
            class="w-full hover:(bg-blue-100 transform scale-103) cursor-pointer rounded-md"
            class:bg-blue-100={segment === "settings"}
          >
            <li class="flex mb-32px justify-start p-12px pl-50px">
              <i class="mr-16px ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-settings text-blue-600"
                  ><circle cx="12" cy="12" r="3" /><path
                    d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
                  />
                </svg>
              </i>
              Settings
            </li>
          </div>
        </a>
      </div>
    </div>
  </ul>
</div>

<style>
  a div.bg-blue-100 {
    background: #dbeafe;
  }

  a div {
    transition: all;
    transition-duration: 200ms;
  }
</style>

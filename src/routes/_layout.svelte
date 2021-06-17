<script>
	import SideBarMenu from "../components/UI/SideBarMenu.svelte";

	export let segment;
</script>

<!-- Add segment to the sidebarmenu -->
<!-- This logic excludes the sidebarmenu from being on the sign in page -->
{#if segment == undefined || segment == "signInFlow"}
	<main class="flex justify-center items-center">
		<slot />
	</main>
{:else}
	<main class="flex">
		<SideBarMenu {segment} />
		<div class="bg-hex-f9fbfd h-screen w-full ml-280px">
			<slot />
		</div>
	</main>
{/if}

<style>
	div :global(h1, h2, h3, h4, p, button, a) {
		font-family: "Poppins", sans-serif;
	}
</style>

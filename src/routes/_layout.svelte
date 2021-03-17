<script>
	import SideBarMenu from "../components/UI/SideBarMenu.svelte";

	export let segment;

	let name = "Nico Mannucci";
</script>

<!-- Add segment to the sidebarmenu -->
<main class="flex">
	<SideBarMenu {name} {segment} />
	<div class="bg-hex-f9fbfd h-screen w-full ml-280px">
		<slot />
	</div>
</main>

<style>
</style>

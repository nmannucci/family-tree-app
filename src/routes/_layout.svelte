<script>
	import NavBar from "../components/UI/NavBar.svelte";

	export let segment;
</script>

<!-- Add segment to the sidebarmenu -->
<!-- This logic excludes the sidebarmenu from being on the sign in page -->
{#if segment == undefined || segment == "signInFlow"}
	<main class="flex justify-center items-center">
		<slot />
	</main>
{:else}
	<main>
		<NavBar {segment} />
		<div class="page-body">
			<slot />
		</div>
	</main>
{/if}

<style>
	div :global(h1, h2, h3, h4, p, button, a) {
		font-family: "Poppins", sans-serif;
	}

	.page-body {
		background: #f9fbfd;
		margin-top: 10vh;
	}
</style>

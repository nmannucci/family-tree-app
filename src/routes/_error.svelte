<script>
	import Particles from "../particles";
	import { onMount } from "svelte";
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === "development";

	onMount(() => {
		const demoContainer = document.querySelector(".particles-container");
		const particles = new Particles({
			container: demoContainer,
			itemsSelector: ".cb-particles-item",
			timeScale: 0.5,
		});
		particles.start();
	});
</script>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<!-- {#if status === 404}
	<main>
		<section class="particles-container">
			<div class="cb-particles-item c1" />
			<div class="cb-particles-item c2" />
			<div class="cb-particles-item c3" />
			<div class="cb-particles-item c4" />
			<div class="cb-particles-item c5" />
			<div class="cb-particles-item c6" />
			<div class="cb-particles-item c7" />
			<div class="cb-particles-item c8" />
			<div class="cb-particles-item c9" />
			<div class="cb-particles-item c10" />
			<div class="cb-particles-item c11" />
			<div class="cb-particles-item c12" />
			<div class="cb-particles-item c13" />
			<div class="cb-particles-item c14" />
			<div class="cb-particles-item c15" />
		</section>
	</main> -->
<!-- {:else} -->
<h1>{status}</h1>

<p>{error.message}</p>

{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}

<!-- {/if} -->
<style>
	/* main {
		position: relative;
	} */
	.particles-container {
		position: absolute;
		top: 0px;
		right: 0px;
		height: 100vh;
		width: 100%;
		background: linear-gradient(116.67deg, #2596ee 0%, #3f4fc9 99.77%);
	}
	.cb-particles-item {
		width: 50px;
		height: 50px;
		border-radius: 999px;
		background-color: #b3d4ff;
	}

	.c1 {
		position: relative;
		left: 80%;
	}
	.c2 {
		position: relative;
		left: 24%;
	}

	.c3 {
		position: relative;
		left: 33%;
	}
	.c4 {
		position: relative;
		left: 57%;
	}
	.c5 {
		position: relative;
		left: 43%;
	}
	.c6 {
		position: relative;
		left: 89%;
	}
	.c7 {
		position: relative;
		left: 76%;
	}
	.c8 {
		position: relative;
		left: 12%;
	}
	.c9 {
		position: relative;
		left: 21%;
	}
	.c10 {
		position: relative;
		left: 90%;
	}
	.c11 {
		position: relative;
		left: 10%;
	}
	.c12 {
		position: relative;
		left: 34%;
	}
	.c13 {
		position: relative;
		left: 98%;
	}
	.c14 {
		position: relative;
		left: 67%;
	}
	.c15 {
		position: relative;
		left: 13%;
	}
	h1,
	p {
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<script lang="ts">
	import svelteLogo from './assets/svelte.svg'
	import viteLogo from '/vite.svg'

	import { op } from './lib/shared-state.svelte';

	let { children } = $props();
</script>

<main class="main-layout">
	<div class="layout-header">
		<img src="./src/assets/img/Analista-ComCientifica-blanco.png" alt="LogoLCC" class="logo">
		<h2>Calculadora de Matrices</h2>
	</div>
	<div class="layout-navbar">
		<button aria-label="+" onclick={() => op.currentOperation = "sum"}>Suma</button>
		<button aria-label="*" onclick={() => op.currentOperation = "mult"}>Multiplicación</button>
		<button aria-label="p" onclick={() => op.currentOperation = "rank"}>Rango</button>
		<button aria-label="^-1" onclick={() => op.currentOperation = "inv"}>Inversa</button>
	</div>
	<div class="layout-content">
		{@render children()}
	</div>
</main>

<style>
	.main-layout {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.layout-header {
		flex: 0 1 100px;
		padding: 0 1rem;
		background-color: #000;
  		border: 1px solid #000;
		border-radius: 10px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.layout-header > * {
		margin: auto;
	}
	.layout-header .logo {
		height: 75px;
	}
	.layout-navbar {
		width: 66%;
		flex: 0 1 50px;
		padding: 1rem;
		margin: 0.3rem auto 0;
		background-color: #000;
  		border: 1px solid #000;
		border-radius: 10px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		gap: 0.1rem;
	}
	.layout-navbar > * {
		margin: auto;
	}
	.layout-content {
		flex: 1 0 auto;
		width: auto;
		height: auto;
		margin: 1rem;
	}
</style>
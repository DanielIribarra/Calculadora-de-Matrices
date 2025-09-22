<script lang="ts">
	import svelteLogo from './assets/svelte.svg'
	import viteLogo from '/vite.svg'
</script>

<main class="main-layout">
	<div class="layout-header">
		<img src="./src/assets/img/Analista-ComCientifica-blanco.png" alt="LogoLCC" class="logo">
		<h2>Cálculadora de Matrices</h2>
	</div>
	<div class="layout-content">
		<slot></slot>
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
	.layout-content {
		flex: 1 0 auto;
		width: auto;
		height: auto;
		margin: 1rem;
		display: flex;
		flex-direction: column;
		place-items: center;
		gap: 1rem;
	}
</style>
<script lang="ts">
	import {Matrix} from '../lib/matrix'
	import Layout from '../Layout.svelte';
</script>

<main class="component-rank">
	<label for="rank-textarea1">A</label>
    <textarea id="rank-textarea1"></textarea>

    <label for="rank-textarea3">rango(A)</label>
    <textarea id="rank-textarea3" readonly>(1 2 3)&NewLine;(1 2 3)&NewLine;(1 2 3)&NewLine;</textarea>

    <button aria-label="Calcular">Calcular</button>
</main>

<style>
    .component-rank {
        width: 100%;
        display: flex;
		flex-direction: column;
		place-items: center;
		gap: 0.3rem;
    }
</style>
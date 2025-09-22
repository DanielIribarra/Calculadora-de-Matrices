<script lang="ts">
	import {Matrix} from '../lib/matrix'
	import Layout from '../Layout.svelte';
</script>

<main class="component-inv">
	<label for="inv-textarea1">A</label>
    <textarea id="inv-textarea1"></textarea>

    <label for="inv-textarea3">A<sup>-1</sup></label>
    <textarea id="inv-textarea3" readonly>(1 2 3)&NewLine;(1 2 3)&NewLine;(1 2 3)&NewLine;</textarea>

    <button aria-label="Calcular">Calcular</button>
</main>

<style>
    .component-inv {
        width: 100%;
        display: flex;
		flex-direction: column;
		place-items: center;
		gap: 0.3rem;
    }
</style>
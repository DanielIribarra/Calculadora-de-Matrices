<script lang="ts">
	import {Matrix} from '../lib/matrix'
	import Layout from '../Layout.svelte';
</script>

<main class="component-mult">
	<div class="factors">
        <label for="mult-textarea1">A</label>
        <label for="mult-textarea1">B</label>

        <textarea id="mult-textarea1"></textarea>
        <textarea id="mult-textarea1"></textarea>
    </div>

    <label for="mult-textarea3">A * B</label>
    <textarea id="mult-textarea3" readonly>(1 2 3)&NewLine;(1 2 3)&NewLine;(1 2 3)&NewLine;</textarea>

    <button aria-label="Calcular">Calcular</button>
</main>

<style>
    .component-mult {
        width: 100%;
        display: flex;
		flex-direction: column;
		place-items: center;
		gap: 0.3rem;
    }
    .factors {
        margin: 1rem 0;
        display: grid;
        grid-template-areas: 
        "a d"
        "c d";
		place-items: center;
		gap: 0.3rem;
    }
</style>
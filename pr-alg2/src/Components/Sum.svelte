<script lang="ts">
	import {Matrix} from '../lib/matrix'
	import Layout from '../Layout.svelte';
</script>

<main class="component-sum">
	<div class="addends">
        <label for="sum-textarea1">A</label>
        <label for="sum-textarea1">B</label>

        <textarea id="sum-textarea1"></textarea>
        <textarea id="sum-textarea1"></textarea>
    </div>

    <label for="sum-textarea3">A + B</label>
    <textarea id="sum-textarea3" readonly>(1 2 3)&NewLine;(1 2 3)&NewLine;(1 2 3)&NewLine;</textarea>

    <button aria-label="Calcular">Calcular</button>
</main>

<style>
    .component-sum {
        width: 100%;
        display: flex;
		flex-direction: column;
		place-items: center;
		gap: 0.3rem;
    }
    .addends {
        margin: 1rem 0;
        display: grid;
        grid-template-areas: 
        "a d"
        "c d";
		place-items: center;
		gap: 0.3rem;
    }
</style>
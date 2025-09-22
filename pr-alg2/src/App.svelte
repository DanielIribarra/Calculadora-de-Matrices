<script lang="ts">
	import svelteLogo from './assets/svelte.svg'
	import viteLogo from '/vite.svg'
	import {Matrix} from './lib/matrix'
	import Layout from './Layout.svelte';

	let M = new Matrix([3,3], [[1,2,5],[1,3,2],[2,4,9]]);
	let A = new Matrix([3,3], [[1,2,5],[1,3,2],[2,4,9]]);
	let B = new Matrix([3,4], [[1,1,1,1],[2,2,2,2],[1,1,1,1]]);
	console.log(B);


</script>

<main>
	<Layout>
		<label for="textarea1">A</label>
		<textarea id="textarea1"></textarea>

		<label for="textarea2">A<sup>-1</sup></label>
		<textarea id="textarea2" readonly>(1 2 3)&NewLine;(1 2 3)&NewLine;(1 2 3)&NewLine;</textarea>

		<button aria-label="Calcular">Calcular</button>
	</Layout>
</main>

<style>
</style>

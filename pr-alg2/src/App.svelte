<script lang="ts">
	import {Matrix} from './lib/matrix'
	import Layout from './Layout.svelte';

    import Sum from './Components/Sum.svelte';
    import Multiplication from './Components/Multiplication.svelte';
    import Rank from './Components/Rank.svelte';
    import Inverse from './Components/Inverse.svelte';

	import { op } from './lib/shared-state.svelte';

	let M = new Matrix([3,3], [[1,2,5],[1,3,2],[2,4,9]]);
	let A = new Matrix([3,3], [[1,2,5],[1,3,2],[2,4,9]]);
	let B = new Matrix([3,4], [[1,1,1,1],[2,2,2,2],[1,1,1,1]]);
	let C = new Matrix([1,4], [[0,0,0,1]]);
	console.log(B);
	console.log(B.getRank());

	let currentOperation: string = $state("sum");
</script>

<main>
	<Layout>
		{#if op.currentOperation === "sum"}
			<Sum></Sum>
		{:else if op.currentOperation === "mult"}
			<Multiplication></Multiplication>
		{:else if op.currentOperation === "rank"}
			<Rank></Rank>
		{:else if op.currentOperation === "inv"}
			<Inverse></Inverse>
		{/if}
	</Layout>
</main>

<style>
</style>

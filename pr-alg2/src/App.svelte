<script lang="ts">
	import { Matrix } from './lib/matrix';
	import Layout from './Layout.svelte';

    import Sum from './Components/Sum.svelte';
    import Multiplication from './Components/Multiplication.svelte';
    import Rank from './Components/Rank.svelte';
    import Inverse from './Components/Inverse.svelte';

	import { op } from './lib/shared-state.svelte';
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

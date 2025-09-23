<script lang="ts">
	import { Matrix } from '../lib/matrix';
    import { Parser } from '../lib/parser';

    let m1Value: string = $state("");
    let resValue: string = $state("");

    let rank = () => {
        let p: Parser = new Parser();
        try {
            let m1: Matrix = p.parseMatrix(m1Value);
            let res: number = m1.getRank();

            resValue += res;
            resValue += '\n\n';
        } catch (error) {
            alert(error);
        }
    }
</script>

<main class="component-rank">
	<label for="rank-textarea1">A</label>
    <textarea id="rank-textarea1" bind:value={m1Value}></textarea>

    <label for="rank-textarea2">rango(A)</label>
    <textarea id="rank-textarea2" bind:value={resValue} readonly></textarea>

    <button aria-label="Calcular" onclick={rank}>Calcular</button>
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
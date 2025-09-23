<script lang="ts">
	import { Matrix } from '../lib/matrix';
    import { Parser } from '../lib/parser';

    let m1Value: string = $state("");
    let m2Value: string = $state("");
    let resValue: string = $state("");

    let multip = () => {
        let p: Parser = new Parser();
        try {
            let m1: Matrix = p.parseMatrix(m1Value);
            let m2: Matrix = p.parseMatrix(m2Value);
            let res: Matrix = m1.multiplication(m2);

            resValue += p.formatMatrixElems(res.elements);
            resValue += '\n\n';
        } catch (error) {
            alert(error);
        }
    }
</script>

<main class="component-mult">
	<div class="factors">
        <label for="mult-textarea1">A</label>
        <label for="mult-textarea2">B</label>

        <textarea id="mult-textarea1" bind:value={m1Value}></textarea>
        <textarea id="mult-textarea2" bind:value={m2Value}></textarea>
    </div>

    <label for="mult-textarea3">A * B</label>
    <textarea id="mult-textarea3" bind:value={resValue} readonly></textarea>

    <button aria-label="Calcular" onclick={multip}>Calcular</button>
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
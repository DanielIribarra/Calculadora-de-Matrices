<script lang="ts">
	import { Matrix } from '../lib/matrix';
    import { Parser } from '../lib/parser';

    let m1Value: string = $state("");
    let resValue: string = $state("");

    let inverse = () => {
        let p: Parser = new Parser();
        try {
            let m1: Matrix = p.parseMatrix(m1Value);
            let res: Matrix = m1.getInverse();

            resValue += "--- Operaciones ---";
            resValue += '\n';
            resValue += "--- Elementales de Fila ---";
            resValue += '\n\n';
            for (let i = 0; i < m1.operations.length; i++) {
                resValue += m1.operations[i];
                resValue += '\n';
            }
            resValue += '\n';

            resValue += "--- Resultado ---";
            resValue += '\n';
            resValue += p.formatMatrixElems(res.elements);
            resValue += '\n\n';
        } catch (error) {
            alert(error);
        }
    }
</script>

<main class="component-inv">
	<label for="inv-textarea1">A</label>
    <textarea id="inv-textarea1" bind:value={m1Value}></textarea>

    <label for="inv-textarea2">A<sup>-1</sup></label>
    <textarea id="inv-textarea2" bind:value={resValue} readonly></textarea>

    <button aria-label="Calcular" onclick={inverse}>Calcular</button>
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
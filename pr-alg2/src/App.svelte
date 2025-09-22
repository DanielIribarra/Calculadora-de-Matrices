<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import {Matrix} from './lib/matrix'

  let M = new Matrix([3,3], [[1,2,5],[1,3,2],[2,4,9]]);
  let A = new Matrix([3,3], [[1,2,5],[1,3,2],[2,4,9]]);
  let B = new Matrix([3,4], [[1,1,1,1],[2,2,2,2],[1,1,1,1]]);
  console.log(B);
  /*
  try {
    console.log(M.getInverse());
  } catch (error) {
    console.log("M no es Invertible");
  }
  console.log(M.sum(A))
  console.log(M.multiplication(A))
  */
  console.log(`Rango = ${B.getRank}`);
</script>

<main>
  <textarea id="input_inv1" class=""></textarea>
</main>

<style>
  textarea {
    background-color: #000;
    border: 1px solid #000;
    color: #00ff00;
    padding: 8px;
    font-family: courier new;
  }
</style>

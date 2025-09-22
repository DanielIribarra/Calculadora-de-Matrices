<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import {Matrix} from './lib/matrix'

  let M = new Matrix([3,3], [[1,2,5],[1,3,2],[2,4,9]]);
  let A = new Matrix([3,3], [[1,2,5],[1,3,2],[2,4,9]]);
  console.log(M);
  try {
    console.log(M.getInverse());
  } catch (error) {
    console.log("M no es Invertible");
  }
  console.log(M.sum(A))
  console.log(M.multiplication(A))
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

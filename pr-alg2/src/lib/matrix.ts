export class Matrix {
    order: number[];
    elements: number[][];
    operations: string[] = [];

    constructor(order: number[], elements: number[][]) {
        this.order = order;
        this.elements = elements;
    }

    sum(secondMatrix: Matrix): Matrix {
        let resultOrder: number[] = [this.order[0], this.order[1]];
        let resElements: number[][] = [];
        if (this.order[0] !== secondMatrix.order[0] || this.order[1] !== secondMatrix.order[1]) {
            throw new Error("Matrices Incompatibles");
        }
        for (let i = 0; i < this.order[0]; i++) {
            resElements[i] = [];
            for (let j = 0; j < this.order[1]; j++) {
                resElements[i][j] = this.elements[i][j] + secondMatrix.elements[i][j];
            }
        }
        return new Matrix(resultOrder, resElements);
    }

    multiplication(secondMatrix: Matrix): Matrix {
        let resultOrder: number[] = [this.order[0], secondMatrix.order[1]];
        let resElements: number[][] = [];
        if (this.order[1] !== secondMatrix.order[0]) {
            throw new Error("Matrices Incompatibles");
        }
        for (let i = 0; i < resultOrder[0]; i++) {
            resElements[i] = [];
            for (let j = 0; j < resultOrder[1]; j++) {
                resElements[i][j] = 0;
                for (let k = 0; k < this.order[1]; k++) {
                    resElements[i][j] += this.elements[i][k]*secondMatrix.elements[k][j];
                }
            }
        }
        return new Matrix(resultOrder, resElements);
    }

    getRank(): number {
        let maxVal: number = 0;
        let maxPos: number = 0;
        let rank: number = 0;

        let minOrder: number = Math.min(...this.order);
        let maxOrder: number = Math.max(...this.order);
        let mCopy: Matrix = new Matrix([maxOrder,minOrder], [[]]);
        for (let i = 0; i < mCopy.order[0]; i++) { // Inicializar copia
            mCopy.elements[i] = [];
            for (let j = 0; j < mCopy.order[1]; j++) {
                if (this.order[0] > this.order[1]) {
                    mCopy.elements[i][j] = this.elements[i][j];
                    continue;
                }
                mCopy.elements[i][j] = this.elements[j][i];
            }
        }

        // Formar matriz escalonada
        for (let j = 0; j < mCopy.order[1]; j++) {
            maxVal = mCopy.elements[j][j];
            maxPos = j;
            for (let i = j; i < mCopy.order[0]; i++) { // Encontrar pivote
                if (Math.abs(mCopy.elements[i][j]) > maxVal) {
                    maxVal = mCopy.elements[i][j];
                    maxPos = i;
                }
            }
            if (Math.abs(maxVal) < Number.MIN_VALUE) { // Pivote es computacionalmente 0
                continue;
            }
            rank++;

            if (maxPos != j) {
                mCopy.rowSwap(j, maxPos, true); // Mover Pivote
                this.operations.push(`F${j+1} <-> F${maxPos+1}`);
            }

            mCopy.escalarRowMultiplication(j, 1/maxVal, true); // Convertir pivote en 1
            this.operations.push(`(${1/maxVal})*F${j+1} -> F${j+1}`);

            for (let i = j + 1; i < mCopy.order[0]; i++) { // Convertir valores inferiores en 0
                if (mCopy.elements[i][j]) {
                    let escalar: number = -1/mCopy.elements[i][j];
                    mCopy.rowAdition(i, j, escalar, true);
                    this.operations.push(`F${i+1} + (${escalar})*F${j+1} -> F${i+1}`);
                }
            }
        }

        return rank;
    }

    getInverse(): Matrix {
        let maxVal: number = 0;
        let maxPos: number = 0;
        let inverse: Matrix = new Matrix(this.order, [[]]);
        let mCopy: Matrix = new Matrix(this.order, [[]]);

        if (this.order[0] !== this.order[1]) {
            throw new Error("Matriz no es cuadrada");
        }
        for (let i = 0; i < this.order[0]; i++) { // Inicializar matriz inversa
            inverse.elements[i] = [];
            for (let j = 0; j < this.order[1]; j++) {
                if (i == j) {
                    inverse.elements[i][j] = 1;
                } else {
                    inverse.elements[i][j] = 0;
                }
            }
        }
        for (let i = 0; i < this.order[0]; i++) { // Inicializar copia
            mCopy.elements[i] = [];
            for (let j = 0; j < this.order[1]; j++) {
                mCopy.elements[i][j] = this.elements[i][j];
            }
        }
        // Formar matriz escalonada
        for (let j = 0; j < this.order[1]; j++) {
            maxVal = mCopy.elements[j][j];
            maxPos = j;
            for (let i = j; i < this.order[0]; i++) { // Encontrar pivote
                if (Math.abs(mCopy.elements[i][j]) > maxVal) {
                    maxVal = mCopy.elements[i][j];
                    maxPos = i;
                }
            }
            if (Math.abs(maxVal) < Number.MIN_VALUE) { // Pivote es computacionalmente 0
                throw new Error("Matriz no es invertible");
            }

            if (maxPos != j) {
                mCopy.rowSwap(j, maxPos, true); // Mover Pivote
                inverse.rowSwap(j, maxPos, false);
                this.operations.push(`F${j+1} <-> F${maxPos+1}`);
            }

            mCopy.escalarRowMultiplication(j, 1/maxVal, true); // Convertir pivote en 1
            inverse.escalarRowMultiplication(j, 1/maxVal, false);
            this.operations.push(`(${1/maxVal})*F${j+1} -> F${j+1}`);

            for (let i = j + 1; i < this.order[0]; i++) { // Convertir valores inferiores en 0
                if (mCopy.elements[i][j]) {
                    let escalar: number = -mCopy.elements[i][j];
                    mCopy.rowAdition(i, j, escalar, true);
                    inverse.rowAdition(i, j, escalar, false);
                    this.operations.push(`F${i+1} + (${escalar})*F${j+1} -> F${i+1}`);
                }
            }
        }

        // Finalizar inversa
        for (let j = 0; j < this.order[1]; j++) {
            for (let i = 0; i < j; i++) {
                let escalar: number = -mCopy.elements[i][j];
                mCopy.rowAdition(i, j, escalar, true);
                inverse.rowAdition(i, j, escalar, false);
            }
        } 
        return inverse;
    }

    // Operaciones elementales de fila
    rowSwap(i: number, j: number, log: boolean) {
        let temp: number = 0;

        if (i == j) {
            throw new Error("Operación inválida");
        }
        for (let index = 0; index < this.order[1]; index++) {
            temp = this.elements[i][index];
            this.elements[i][index] = this.elements[j][index];
            this.elements[j][index] = temp;
        }
        if (log) console.log(`F${i+1} <-> F${j+1}`);
    }

    escalarRowMultiplication(i: number, k: number, log: boolean) {
        if (k == 0) {
            throw new Error("Operación inválida");
        }
        for (let index = 0; index < this.order[1]; index++) {
            this.elements[i][index] *= k;
        }
        if (log) console.log(`(${k})*F${i+1} -> F${i+1}`);
    }

    rowAdition(i: number, j: number, k: number, log: boolean) {
        if (i == j) {
            throw new Error("Operación inválida");
        }
        for (let index = 0; index < this.order[1]; index++) {
            this.elements[i][index] += k*this.elements[j][index];
        }
        if (log) console.log(`F${i+1} + (${k})*F${j+1} -> F${i+1}`);
    }
}
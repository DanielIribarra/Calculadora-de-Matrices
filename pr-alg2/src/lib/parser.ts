import { Matrix } from './matrix';

export class Parser {
    parseMatrix(input: string): Matrix {
        let resOrder: number[] = [];
        let resElements: number[][] = [];

        if (!input.trim()) { // Ingreso del usuario está vacío
            throw new Error("Ingreso vacío");
        }

        // Valida ingreso, fila por fila
        let lines = input.trim().split('\n'); // Todas las lineas ingresadas
        for (let i = 0; i < lines.length; i++) {
            let line: string = lines[i].trim();
            if (!line) continue; // Salta lineas vacías

            if (!line.startsWith('(') || !line.endsWith(')')) { // Cada linea debe empezar y terminar con paréntesis
                throw new Error("Formato incorrecto");
            }
            let content: string = line.slice(1, -1).trim(); // Elimina paréntesis 
            
            if (!content) {
                throw new Error("Fila vacía");
            }

            let numberStrings: string[] = content.split(/\s+/); // Separa strings de números por espacios
            let row: number[] = [];

            for (let numStr of numberStrings) {
                let num: number = Number(numStr);
                
                if (isNaN(num)) { // Cada elemento debe de ser un número
                    throw new Error("Elemento no es un número");
                } else {
                    row.push(num);
                }
            }

            if (row.length > 0) {
                resElements.push(row);
            }
        }

        // Valida orden de la matriz
        if (resElements.length > 0) {
            let expectedColLen = resElements[0].length;
            
            for (let i = 1; i < resElements.length; i++) {
                if (resElements[i].length !== expectedColLen) { // Largo de la filas debe de ser uniforme
                    throw new Error("Matriz inválida: Largo de la fila no es uniforme");
                }
            }
        }
        resOrder[0] = resElements.length;
        resOrder[1] = resElements[0].length; 

        return new Matrix(resOrder, resElements);
    }

    formatMatrixElems(elements: number[][]): string {
        if (elements.length === 0) return '';
        
        const columnWidths = elements[0].map((_, colIndex) => 
            Math.max(...elements.map(row => row[colIndex].toString().length))
        );
        
        return elements.map(element =>
            `(${element.map((num, index) => 
            num.toString().padStart(columnWidths[index], ' ')
            ).join(' ')})`
        ).join('\n');
    };
}
const matriz = [[17,9,36,21],[8,28,3,1],[15,7,5,30],[10,17,4,12]];

function SumaDi(diagonal) {
    const num = diagonal.length;
    let suma = 0;

    for (let i = 0; i < num; i++) {
        suma += matriz[i][i];
    }

    return suma;
}

const suma_Diagonal = SumaDi(matriz);
console.log("La suma es: ", suma_Diagonal);
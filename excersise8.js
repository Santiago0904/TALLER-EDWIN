function countcaracters(chain) {
    let letters = 0;
    let numbers = 0;
    let space = 0;
    for (let i = 0; i < chain.length; i++) {
        if ((chain[i] >= 'a' && chain[i] <= 'z') || (chain[i] >= 'A' && chain[i] <= 'Z')) {
            letters++;
        }
        else if (chain[i] >= '0' && chain[i] <= '9') {
            numbers++;
        }

        else if (chain[i] === " ") {
            space++;
        }
    }
    return {
        letters: letters,
        numbers: numbers,
        space: space
    };
}
let resultados = countcaracters("Hola 123");
console.log("Cantidad de letras:", resultados.letters);
console.log("Cantidad de números:", resultados.numbers);
console.log("Cantidad de espacios:", resultados.space);

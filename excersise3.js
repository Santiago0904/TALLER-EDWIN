function divisionBySubtraction(dividendo, divisor) {
    let cociente = 0;
    let residuo = dividendo;
    
    while (residuo >= divisor) {
        residuo -= divisor;
        cociente++;
    }
    
    if (residuo === 0) {
        return cociente;
    } else {
        return cociente + " y sobran " + residuo;
    }
}

let resultado = divisionBySubtraction(12, 5);
console.log(resultado);

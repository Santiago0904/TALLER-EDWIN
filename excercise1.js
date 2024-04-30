function mathematicalOperations(n1,n2){
    if(isNaN(n1) && isNaN(n2) || n1 === 0 && n2 === 0 ){
        console.log("EROR, no se permiten letras ni valores iguales a 0")
    } else {
        console.log ( n1 + " + " + n2 + "Es igual a: " + (n1 + n2) + "\n" + n1 + " - " + n2 + "Es igual a: " + (n1 - n2) + "\n" + n1 + " x " + n2 + "Es igual a: " + (n1 * n2) + "\n" + n1 + " ÷ " + n2 + "Es igual a: " + (n1 / n2) + "\n")
    }

}

mathematicalOperations(4,2);
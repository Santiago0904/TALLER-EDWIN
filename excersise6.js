
function prime(number){
    if(number<=1){
        console.log("El numero no es primo")
    }
    for(let i=2; i<number; i++){
        if(number%i===0)
        return "No es primo"
    
    }
    return "El numero es primo"
          
   
}
console.log(prime(11))


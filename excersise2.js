function greeting(name){


    if(name.length === 0 || name[0] !== name[0].toUpperCase()){
        return "Ingrese un nombre con la primera letra en mayuscula"
    }
    let lettersC=0

    for (let i = 0; i < name.length; i++) {
        if ((name[i] >= 'a' && name[i] <= 'z') || (name[i] >= 'A' && name[i] <= 'Z')) {
            lettersC++;
        }else return "El nombre solo puede contener letras"
    }

        if(lettersC<2){
            return "Ingrese al menos 2 letras"
        }
return "hola "+name+" este es mi software"
    }
console.log(greeting("Michael"))
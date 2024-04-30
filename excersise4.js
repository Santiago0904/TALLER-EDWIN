function leap(years){
if(years%4 == 0 && years%100 !==0 || years%400==0){
console.log(years+" Es bisiesto")
}else{
    console.log("El año no es bisiesto")
}
}
leap(2024)
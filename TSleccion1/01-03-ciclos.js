//while
let contador = 0;
while(contador < 3 ){
    console.log(contador);
    contador++;
}

console.log("Fin del ciclo while")

//do while
let conteo = 0 ;
do{
    console.log(conteo);
    contador++;
}while(conteo < 3);
console.log("Fin del ciclo do while")

//ciclo for
for(let contando = 0;contando < 3; contando++ ){
    console.log(contando);
}
console.log("Fin del ciclo for")

//palabra reservada break
for (let contando = 0; contando <= 10; contando++){
    if (contando % 2 == 0){
        console.log(contando);//muestra todos los pares
        break;
    }
}
console.log("Termina el ciclo al encontrar los pares");//termina el ciclo

//la palabra continue y Etiquetas labels
inicio: 
for (let contando = 0; contando <= 10; contando++){
    if (contando % 2 !== 0){
        continue inicio;//Ir a la siguiente interacion
    }
    console.log(contando)
}
console.log("Termina el ciclo ");//termina el ciclo

//Ejemplo 2
inicio: 
for (let contando = 0; contando <= 10; contando++){
    if (contando % 2 !== 0){
        break inicio;//Ir a la siguiente interacion
    }
    console.log(contando)
}
console.log("Termina el ciclo ");//termina el ciclo




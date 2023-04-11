//creacion de array o arreglos
// let autos = new  Array("Ferrari","renault","BMW"); esta es la sintaxis vieja

const autos = ["Ferrari","renault","BMW"];
console.log(autos);

//Recorremos los elementos de un arreglo
console.log(autos[0]);
console.log(autos[2]);

for (let i = 0; i < autos.length;i++){
    console.log(i+" : " +autos[i]);
}

//modificamos los elementos del arreglo
autos[1]= "Volvo"
console.log(autos[1]);

//Agregar nuevos elementos al arreglo
autos.push("Audi")//Agregamos el elemento al final del arreglo.
console.log(autos);

//Otras formas de agregar elementos al arreglo
autos[autos.length]= "porche";
console.log(autos);

//Tercera forma de agregar elementos al array teniendo Cuidado
autos[5] = "Renault"
console.log(autos); 

//Como preguntar si es un array o arreglo
console.log(Array.isArray(autos));//Devuelve un booleano

console.log(autos instanceof Array);//Preguntamos si la variable es una instacia de la clase Array

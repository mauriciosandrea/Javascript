miFuncion(8, 2);// ESto se le conoce como hosting

function miFuncion(a ,b){
    //console.log("Sumamos: "+ (a + b));
    return a + b;
}
//llamando la funcion
miFuncion(5,4);

let resultado = miFuncion(6, 7);
console.log(resultado);

//Declaramos una tipo expresion
let x = function(a , b){return a + b;}//necesita cierra con punto y coma
resultado = x(5 + 6);//al llamarla se pone la variable y parentesis
console.log(resultado);

//Funciones de tipo self y invoking
(function(a , b){
    console.log("Ejecutamos la funcion: "+ (a+b));
})(9,6);

console.log(typeof miFuncion);
function miFuncionDos(a ,b){
    console.log(arguments.length);
}
miFuncionDos(5, 7,3,6);

//to string
var miFuncionTexto = miFuncionDos.toString();
console.log(miFuncionTexto);


//funciones flecha 
const sumarFuncionFlecha = (a ,b) => a + b ;
resultado = sumarFuncionFlecha(3, 7);//Asignamos el valor a una variable
console.log(resultado);


//funcion de tipo expresion
let sumar = function(a = 4, b = 8 ){
    console.log(arguments[0]);//muestra el parametro de : a
    console.log(arguments[1]);//muestra el parametro de b
   
    return a + b + arguments[2];
}

resultado = sumar(3 , 2, 9);
console.log(resultado);

let respuesta = sumarTodo(5,4,10,13,9);
console.log(respuesta)

function sumarTodo(){
    let suma = 0;
    for(let i = 0; i<arguments.length;i++){
        suma += arguments[i];// arguments es para arreglos.
    }
    return suma
}

//tipo primitivos
let k = 10;
function cambiarValor(a){// Paso por valor
    a = 20;
}
cambiarValor(k);
console.log(k)

//Paso por referencia.

const persona = {
    nombre:"juan",
    apellido:"lepez"
}
function cambiarValorObjeto(p1){
    p1.nombre = "Ignacion";
    p1.apellido ="Perez";
}
console.log(persona);

cambiarValorObjeto(persona);
console.log(persona);

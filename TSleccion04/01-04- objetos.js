let x =10;// variable de tipo primitiva
console.log(x.length);
console.log("Tipos primitivos");
//objeto
let persona = {
    nombre: "carlos",
    apellido: "Gil",
    email: "cgil@gmail.com",
    edad: 28,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();// convierte las minusculas a mayusculas
    },
    set lang(lang){
        this.idioma =  lang.toUpperCase();
    },
    
    nommbreCompleto: function(){ //metodo o funcion en javascript
        return this.nombre+" "+this.apellido+" "+this.email;

    },
    get nombreEdad(){
        return this.nombre+' edad: '+this.edad
    }
    
}
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.email);
console.log(persona);
console.log(persona.nommbreCompleto());
console.log("Ejecutamos con un objeto");

let persona2 = new Object();//Debe crear un nuevo objeto en memoria
persona2.nombre = "Juan";
persona2.direccion = "Salada";
persona2.telefono = "123456789";
console.log(persona2.telefono);
console.log("creamos un nuevo objeto");
console.log(persona["apellido"]); //accedemos como si fuera un arrglo

//for in y accedemos al objeto como si fuera un arreglo
for (propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}
console.log("cambiamos y eliminamos un error");
persona.apellida = "Betancud";//cambiamos dinamicamente el valor de un objeto
delete persona.apellida;   // eliminamos el error.
console.log(persona);

//Distinta formas de imprimir un objeto
//numero1: la mas sencilla :concatenar cda valor de propiedad
console.log("Distintas formas de imprimir un objeto forma 1");
console.log(persona.nombre+", "+persona.apellido);

//Numero:2 A traves del ciclo for in
console.log("Distintas formas de imprimir un objeto forma 2");
for (nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//numero 3 : la funcion object.values()
console.log("Distintas formas de imprimir un objeto forma 3");
let personaArray = Object.values(persona);
console.log(personaArray);

//numero 4 :Utilizaremos el metodo JSON.stringify
console.log("Distintas formas de imprimir un objeto forma 4");
let personaString = JSON.stringify(persona);
console.log(personaString);

console.log("Comenzamos a utilizar el metodo get");
console.log(persona.nombreEdad);


console.log('Comenzamos con el metodo get y set para idiomas');
console.log(persona.lang)
persona.lang = 'en'
console.log(persona.lang)

function persona3(nombre, apellido, email){//Constructor
    this.nombre = nombre
    this.apellido = apellido
    this.email = email;
    this.nommbreCompleto = function(){
        return this.nombre+' '+this.apellido;
    }
}
let padre = new persona3('luis', 'lopez','lopez@gmail.com');
padre.nombre = 'luis'; // modificamos el nombre
padre.telefono = '5445545454545'//propiedad exclisiva para objeto padre

console.log(padre);
console.log(padre.nommbreCompleto());//utilizamos la funcion.

let madre = new persona3('Laura','contrera','contrera@gmail.com');
console.log(madre)
console.log(madre.telefono)// la propiedad no esta definida
console.log(madre.nommbreCompleto());

//diferentes forma de crear objetos
//caso numero 1
let miObjeto = new Object();//Esta es la opcion formal
//Caso numero 2
let miObjeto2 = {}; //Esta opcion es breve y recomendada

//caso String 1
let miCadena1 = new String('hola');//sintaxis formal
//caso String 2
let miCadena2 = 'hola';//sintaxis simplificada y recomendad

//Caso con numeros
//nro1
let miNumero = new Number(1);// Es formal no recomendable
//Casso nro2
let miNumero2 = 1;//Sintaxis recomendada

//Caso Boolean 1
let miBoolean1 = new Boolean(false);//formal
//caso nro2
let miBoolean2 = false; //sintaxis recomendada

//Caso Arreglos 1
let miArreglo1 = new Array(); // formaL
//Caso Arreglos 2
let miArreglo2 = [];//Sintaxis recomendada

//Caso function 1
let miFuncion = new function(){};//todo despues de new es considerado objeto
//Caso function 2 
let miFuncion2 = function(){};

//Uso Prototype
//modificamos las propiedades y las mostramos
persona3.prototype.telefono = '2554545545455';
console.log(padre)
console.log(madre.telefono);
madre.telefono = '585458845';
console.log(madre.telefono);

//Uso de call
let persona4 = {
    nombre : 'juan',
    apellido: 'Perez',
    nommbreCompleto2: function(titulo, telefono){
        return titulo+': '+this.nombre+' '+this.apellido;
        //return this.nombre+' '+this.apellido;
    }
}
let persona5 = {
    nombre : 'Carlos',
    apellido: 'Lara'
}
console.log(persona4.nommbreCompleto2('lic.','545454545'));
console.log(persona4.nommbreCompleto2.call(persona5,'ing.', '545454545454'));

//MEtodo apply
let arreglo = ['ing.', '5454545'];
console.log(persona4.nommbreCompleto2.apply(persona5,arreglo));
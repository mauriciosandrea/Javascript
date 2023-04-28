let x =10;// variable de tipo primitiva
console.log(x.length);
console.log("Tipos primitivos");
//objeto
let persona = {
    nombre: "carlos",
    apellido: "Gil",
    email: "cgil@gmail.com",
    edad: 30,
    nommbreCompleto: function(){ //metodo o funcion en javascript
        return this.nombre+" "+this.apellido+" "+this.email;

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
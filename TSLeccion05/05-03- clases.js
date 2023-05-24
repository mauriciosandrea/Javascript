//let Persona3 = new Persona('Carla', 'Ponce');

class Persona {//Clase padre
    constructor(nombre, apellido){
        this._nombre = nombre ;
        this._apellido = apellido;
    }
    
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        return this._nombre = nombre;

    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
}

class Empleado extends Persona {//Clase hija
    constructor(nombre,apellido,departamento) {
        super(nombre, apellido); // Llama al constructor de la clase padre (Persona)
        this._departamento = departamento;
    }

    get departamento() {
        return this._departamento;
    }

    set departamento(departamento) {
        this._departamento = departamento;
    }
}


let persona1 = new Persona ('Martin', 'Perez');
console.log(persona1.nombre);
persona1.nombre = 'Juan carlos';
console.log(persona1._nombre)
//console.log(persona1);

console.log(persona1.apellido);
persona1.apellido = 'González';
console.log(persona1.apellido);

let persona2 = new Persona ('Carlos', 'Lara');
console.log(persona2.nombre);
persona2.nombre = 'Maria laura';
console.log(persona2.nombre);
//console.log(persona2);

console.log(persona2.apellido);
persona1.apellido = 'González';
console.log(persona1.apellido);

let Empleado1 = new Empleado('Maria','Jimenez','Sistemas');
console.log(Empleado1)
console.log(Empleado1.nombre)
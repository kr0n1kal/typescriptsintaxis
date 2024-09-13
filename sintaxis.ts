//EJERCICIO 1
let value_number: number = 1625523;
let value_string: string = "Jose Andres Lopez Diaz";
let value_boolean: boolean = true;
console.log("El nombre del estudiante es: ",value_string," su carnet es: ",value_number,"\n ¿Estudia en la Universidad?",value_boolean);



//EJERCICIO2
let n1: number = 50;
let n2: number = 25;
let suma: number = n1+n2;
let resta: number = n1-n2;
let multiplicacion: number = n1*n2;
let division: number = n1/n2;
let modulo: number = n1%n2;
console.log("La suma de los numeros: ",n1," y ",n2," es: ",suma);
console.log("La resta de los numeros: ",n1," y ",n2," es: ",resta);
console.log("La multiplicacion de los numeros: ",n1," y ",n2," es: ",multiplicacion);
console.log("La division de los numeros: ",n1," y ",n2," es: ",division);
console.log("El modulo de los numeros: ",n1," y ",n2," es: ",modulo);




//EJERCICIO3
let edad: number = 15;
if(edad <= 11)
{
    console.log("Usted es un niño!");
}
else if(edad > 11 && edad <= 18)
{
    console.log("Usted es un adolescente!");
}
else
{
    console.log("Usted es un adulto!");
}






//EJERCICIO4
for(let i: number = 1; i<= 10; i++)
{
    console.log("Conteo normal: ",i);
}

let j: number = 10;
while(j > 0)
{
    console.log("Conteo reverso: ",j);
    j--;
}







//EJERCICIO5
function funcion1(): void{
    console.log("Esta funcion no toma ni devuelve ningun valor!")
}

function funcionString(): string{
    return "Esta funcion devuelve un string!";
}

function funcionSuma(n1: number, n2: number){
    console.log("La suma de: ",n1," y ",n2," es: ",n1+n2);
}

funcion1();
console.log(funcionString());
funcionSuma(1, 2);








//EJERCICIO6
let arrayNumeros: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sumaArray: number = 0;
for(const numeros of arrayNumeros)
{
    console.log("Numeros en el array: ",numeros);
    sumaArray += numeros;
}
console.log("La suma de los numeros en el array es: ",sumaArray);




//EJERCICIO7
function factorial(n: number): number{
    if(n===0 || n===1){
        return 1;
    }
    return n*factorial(n-1);
}
console.log(factorial(5));




//EJERCICIO8
class Persona{
    private nombre: string;
    private edad: number;
    private ciudad: string;

    constructor(nombre: string, edad: number, ciudad: string)
    {
        this.nombre = nombre;
        this.edad = edad;
        this.ciudad = ciudad;
    }

    public get_nombre(): string{
        return this.nombre;
    }

    public set_nombre(nombre: string):void{
        this.nombre = nombre;
    }

    public get_edad(): number{
        return this.edad;
    }

    public set_edad(edad: number):void{
        this.edad = edad;
    }

    public get_ciudad(): string{
        return this.ciudad;
    }

    public set_ciudad(ciudad: string):void{
        this.ciudad = ciudad;
    }
}
export {Persona};








//EJERCICIO9
const persona1 = new Persona('Jose Lopez', 20, 'Quetzaltenango');
console.log("Nombre original: ", persona1.get_nombre());
console.log("Edad original: ", persona1.get_edad());
console.log("Ciudad original: ",persona1.get_ciudad());

persona1.set_nombre("Andres Diaz");
persona1.set_edad(18);
persona1.set_ciudad("Guatemala");

console.log("Nombre modificado: ",persona1.get_nombre());
console.log("Edad modificada: ",persona1.get_edad());
console.log("Ciudad modificada: ",persona1.get_ciudad());







//EJERCICIO10
let frase: string = "Este es un ejemplo de split";
const palabras: string[] = frase.split(" ");
console.log(palabras);
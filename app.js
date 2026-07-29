
// recibir la operacion a ejecutar
// recibir los valores con los que se va a operar
// ejecutar la operacion
// devolver el resultado

const country = "España"
let age = 20
var name = "Astrid"  //desaconsejado pues se puede redeclarar 



// tipos de datos:

// String 
let texto = "Hola, mundo";
// number
let años = 30;
let precio = 19.99;
// Null: Representa la ausencia intencional de cualquier valor
let usuarioActual = null
// Undefined: Indica que una variable ha sido declarada pero aún no se le ha asignado ningún valor.
let sinDefinir;
console.log(sinDefinir); // Muestra: undefined
// Boolean (Booleano): Representa un valor lógico
let esMayorDeEdad = true;
let tieneDescuento = false;

// objetos   //la proxima clase
// array     //la proxima clase

console.log(precio);

// operadores logicos:

// 1. Operadores Matemáticos (Aritméticos)
let suma = 5 + 3;          // 8
let resta = 10 - 4;        // 6
let multiplicacion = 4 * 2;// 8
let division = 20 / 4;     // 5
let modulo = 10 % 3;       // 1 (el resto de la división entera)
let potencia = 2 ** 3;     // 8 (2 elevado a la 3)


// 2. Operadores Lógicos
// Se utilizan para combinar condiciones booleanas y evaluar múltiples expresiones.

let esAdulto = true;
let tieneEntrada = false;

// AND (Y) -> Devuelve true solo si AMBAS condiciones son verdaderas
let puedePasar = esAdulto && tieneEntrada; // false

// OR (O) -> Devuelve true si AL MENOS UNA de las condiciones es verdadera
let puedeEntrarAlEvento = esAdulto || tieneEntrada; // true

// NOT (NO) -> Invierte el valor booleano
let noEsAdulto = !esAdulto; // false


// 3. Operadores de Comparación

// Se utilizan para comparar valores y siempre devuelven un booleano (true o false).

let a = 5;
let b = "5";

// Igualdad débil (compara el valor, ignorando el tipo de dato)
console.log(a == b);  // true

// Igualdad estricta (compara tanto el valor como el tipo de dato - RECOMENDADO)
console.log(a === b); // false (número vs string)

// Desigualdad estricta
console.log(a !== b); // true

// Mayor que, menor que, mayor o igual, menor o igual
console.log(10 > 5);  // true
console.log(3 < 2);   // false
console.log(8 >= 8);  // true
console.log(4 <= 9);  // true




// Condicionales
// Estructuras que permiten tomar decisiones

let edad = 18;

// Usando if...else tradicional:
let mensaje;
if (edad >= 18) {
    mensaje = "Es mayor de edad";
} else {
    mensaje = "Es menor de edad";
}

// Usando el operador ternario (mucho más corto):
let mensajeTernario = (edad >= 18) ? "Es mayor de edad" : "Es menor de edad";

console.log(mensajeTernario); // Muestra: "Es mayor de edad"

// La estructura switch
// Se utiliza cuando necesitas evaluar una sola variable frente a múltiples valores posibles Evita tener que escribir una cadena larguiza de if...else
let diaSemana = "martes";

switch (diaSemana) {
    case "lunes":
        console.log("¡Ánimo con el inicio de semana!");
        break; // Detiene la ejecución para que no siga evaluando los demás casos
    case "martes":
        console.log("Segundo día, ¡seguimos adelante!");
        break;
    case "viernes":
        console.log("¡Por fin es viernes!");
        break;
    default:
        // Se ejecuta si ninguno de los casos anteriores coincide (funciona como el 'else' final)
        console.log("Es un día común y corriente.");
        break;
}

// Bucles e Iteradores (while y for)
// Los bucles (o loops) se utilizan para repetir un bloque de código múltiples veces de forma automática, ahorrándonos escribir la misma instrucción una y otra vez.

// Es el bucle más utilizado cuando sabes de antemano cuántas veces quieres repetir una acción

// Imprimir los números del 0 al 4
for (let i = 0; i < 5; i++) {
    console.log("El número actual es: " + i);
}

// Ejemplo práctico recorriendo un Array:
let frutas = ["manzana", "banana", "pera", "naranja"];

for (let i = 0; i < frutas.length; i++) {
    console.log("Fruta en la posición " + i + ": " + frutas[i]);
}

// El Bucle while
// Se utiliza cuando no sabes cuántas veces se va a repetir la acción, pero sabes que debe continuar mientras una condición se cumpla.

// Precaución: Debes asegurarte de que la condición cambie en algún momento dentro del bucle; de lo contrario, crearás un "bucle infinito"

let vidas = 3;

// Mientras al usuario le queden vidas, el juego continúa
while (vidas > 0) {
    console.log("Estás jugando. Vidas restantes: " + vidas);
    
    // Simulamos que el jugador pierde una vida en cada turno
    vidas--; 
}

console.log("¡Game Over!");

// El return es la instrucción que permite a una función devolver un resultado hacia afuera y, al mismo tiempo,
//  finaliza la ejecución de esa función de forma inmediata.

// Funciones en JavaScript
// Una función es un bloque de código diseñado para realizar una tarea específica. Se ejecuta cuando "es llamada" (invocada).

// Declaración de la función
function saludar() {
    console.log("¡Hola, bienvenido a la programación!");
}

// Invocación o llamada a la función (aquí es donde se ejecuta)
saludar(); // Muestra en consola: ¡Hola, bienvenido a la programación!

// 'nombre' y 'apellido' son los parámetros
function saludarPersona(nombre, apellido) {
    console.log("Hola, " + nombre + " " + apellido);
}

// "Carlos" y "López" son los argumentos
saludarPersona("Carlos", "López"); // Muestra: Hola, Carlos López

// Funciones con return
// El return es la instrucción que permite a una función devolver un resultado hacia afuera y, al mismo tiempo, finaliza la ejecución de esa función de forma inmediata.
function multiplicar(a, b) {
    return a * b; // Devuelve el producto
}

// Guardamos el resultado devuelto en una variable
let resultado = multiplicar(4, 5);
console.log(resultado); // Muestra: 20

////////////////////////////// clase dos 

// ¿Qué es un Array (Arreglo)?
// Un array es una estructura de datos que nos permite almacenar una lista ordenada de elementos dentro de una sola variable

let fruta = ["manzana", "banana", "pera", "naranja"];

console.log(fruta[0]); // Muestra: "manzana" (el primer elemento)

console.log(fruta.length); // Muestra: 4

// Truco para acceder siempre al último elemento sin importar cuántos sean:
console.log(fruta[fruta.length - 1]); // Muestra: "naranja"

// Recorrer el array completo con un bucle for
for (let i = 0; i < fruta.length; i++) {
    console.log("Fruta en la posición " + i + ": " + fruta[i]);
}

// Los métodos son funciones integradas en JavaScript que facilitan la manipulación y consulta de los arrays
let colores = ["rojo", "verde"];

colores.push("azul");     // ["rojo", "verde", "azul"]
colores.unshift("amarillo"); // ["amarillo", "rojo", "verde", "azul"]

colores.pop();            // Elimina "azul" -> ["amarillo", "rojo", "verde"]
colores.shift();          // Elimina "amarillo" -> ["rojo", "verde"]


// .includes(): Verifica si un elemento existe dentro del array. Devuelve true o false.

// .indexOf(): Devuelve el índice (la posición) de la primera aparición de un elemento. Si no lo encuentra, devuelve -1.


let numeros = [10, 20, 30, 40];

console.log(numeros.includes(30)); // Muestra: true
console.log(numeros.indexOf(20));  // Muestra: 1 (posición del número 20)
console.log(numeros.indexOf(99));  // Muestra: -1 (no existe)

// objetos:

const cursoProgramacion = {
    // 1. Strings
    titulo: "JavaScript desde Cero",
    
    
    // 2. Numbers
    duracionHoras: 45,
    precio: 49.99,
    
    // 3. Booleans
    estaActivo: true,
    certificadoIncluido: true,
    
    // 4. Null y Undefined
    descuentoEspecial: null, // No hay descuento activo por ahora
    fechaFinalizacion: undefined, // Aún no está definido porque el curso sigue abierto

    // 5. Array
    tecnologias: ["HTML", "CSS", "JavaScript", "Git"],

    // 6. Objeto Anidado (un objeto dentro de otro)
    instructor: {
        nombre: "Mariana",
        experienciaAnios: 8,
        contacto: {
            email: "mariana@codeamos.com",
            redSocial: "@marianadev"
        }
    },

    // 7. Método (Función interna tradicional)
    obtenerInformacionCompleta() {
        return `El curso "${this.titulo}" dura ${this.duracionHoras} horas y es dictado por ${this.instructor.nombre}.`;
    },

    // 8. Método para listar tecnologías usando un bucle interno
    mostrarTecnologias() {
        console.log("Tecnologías que aprenderás:");
        for (let i = 0; i < this.tecnologias.length; i++) {
            console.log(`- ${this.tecnologias[i]}`);
        }
    }
};

// --- Probando el objeto ---
console.log(cursoProgramacion.titulo);                          // String: "JavaScript desde Cero"
console.log(cursoProgramacion.instructor.contacto.email);       // Objeto anidado: "mariana@codeamos.com"
console.log(cursoProgramacion.obtenerInformacionCompleta());    // Ejecutando el método 1
cursoProgramacion.mostrarTecnologias();
console.log(cursoProgramacion.tecnologias);

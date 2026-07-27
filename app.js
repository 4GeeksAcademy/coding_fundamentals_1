
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



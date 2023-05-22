'use strict';
/*
                Variables
*/

// Uso de comentarios

// Este es un comentario de una línea

/*
    Este es un comentario de múltiples líneas.
    Hola Amigos
    XD
*/

// Uso del var

var nombre = "Néstor";
var edad = 20;

console.log(nombre); 
console.log("Tengo "+edad+ " años"); 

// Uso del let

let mensaje = "Hola";

if (true) {
    let mensaje = "Adiós";
    console.log(mensaje); 
}

console.log(mensaje)

// Uso del const

const nombre2 = "Néstor Chumania";
console.log(nombre);



/*
                Strings
*/

// Crear strings

let nombre3 = "Juan";
let apellido3 = "Chumania";
let nombreCompleto3 = nombre3 + " " + apellido3;

console.log(nombreCompleto3);

// Métodos de los strings

// Ejemplo del uso del método length
let password = "Abc123";
if (password.length >= 6) {
    console.log("La contraseña cumple con los requisitos mínimos.");
} else {
    console.log("La contraseña debe tener al menos 6 caracteres.");
}

// Ejemplo del uso de los métodos toUpperCase y toLowerCase
let userInput = "JavaScript";
if (userInput.toUpperCase() === "JAVASCRIPT") {
    console.log("La entrada coincide con la palabra 'JavaScript' en mayúsculas.");
} else if (userInput.toLowerCase() === "javascript") {
    console.log("La entrada coincide con la palabra 'JavaScript' en minúsculas.");
} else {
    console.log("La entrada no coincide con 'JavaScript'.");
}

// Ejemplo del uso del método charAt
let word = "Hello";
console.log(word.charAt(0)); 
console.log(word.charAt(3)); 

// Ejemplo de uso combinado de los métodos length y charAt
let name = "John Doe";
let firstName = name.substring(0, name.indexOf(" "));
let lastNameInitial = name.charAt(name.indexOf(" ") + 1);
console.log("Nombre: " + firstName);
console.log("Inicial del apellido: " + lastNameInitial); 

// Uso del template strings

let servidor = "api.example.com";
let ruta = "users";
let userId = 123;
let url = `https://${servidor}/${ruta}/${userId}`;
console.log(url);


/*
                Números
*/

// Operadores

const radio = 5;
const area = Math.PI * radio ** 2;
console.log("El área del círculo es: " + area);

const temperaturaCelsius = 30;
const temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;
console.log("La temperatura en Fahrenheit es: " + temperaturaFahrenheit);

let contador = 0;
contador += 1; 
console.log("Valor del contador: " + contador);

const precioUnitario = 10;
const cantidad = 5;
const total = precioUnitario * cantidad;
console.log("Total a pagar: " + total);

// Método Math

// Cálculo de interés compuesto
let principal = 10000;
let tasaInteres = 0.05;
let tiempo = 5;
let montoFinal = principal * Math.pow(1 + tasaInteres, tiempo);
console.log("Monto final: $" + montoFinal.toFixed(2));

// Generación de números aleatorios para simulaciones financieras
let ingresosMensuales = Math.random() * 10000;
let gastosMensuales = Math.random() * 5000;
let saldoDisponible = ingresosMensuales - gastosMensuales;
console.log("Saldo disponible: $" + saldoDisponible.toFixed(2));

// Cálculo de distancia entre dos puntos geográficos
function calcularDistancia(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radio de la Tierra en kilómetros
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distancia = R * c;
    return distancia;
}

function toRad(grados) {
    return grados * Math.PI / 180;
}

const distancia = calcularDistancia(40.7128, -74.0060, 34.0522, -118.2437);
console.log("Distancia entre Nueva York y Los Ángeles: " + distancia.toFixed(2) + " km");

// Orden de precedencia de los operadores

let resultado = 5 + 3 * 2 ** 2 / (4 - 2);
console.log(resultado);

// Conversión

let numeroString = "42";
let numero = parseInt(numeroString);
console.log(numero);

let decimalString = "3.14";
let decimal = parseFloat(decimalString);
console.log(decimal);

/*
                Booleanos
*/


// Operadores relacionales

let fechaActual = new Date();
let fechaLimite = new Date("2023-12-31");

if (fechaActual <= fechaLimite) {
    console.log("Todavía tienes tiempo para completar la tarea.");
} else {
    console.log("La fecha límite ha pasado.");
}

let nivelUsuario = 3;
let nivelMinimo = 5;

if (nivelUsuario >= nivelMinimo) {
    console.log("Tienes acceso completo.");
} else {
    console.log("No tienes permiso para acceder.");
}

// Operador ternario

let edad2 = 20;
let mensaje2 = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje2);

/*
                Condicionales
*/

// Condicional simple

let edad3 = 16;

if (edad3 >= 18) {
    console.log("Eres mayor de edad");
} 

// Condicional Doble

let puntaje = 85;

if (puntaje >= 70) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

// Condicional anidada

let puntaje2 = 75;

if (puntaje2 >= 90) {
    console.log("Excelente");
} else {
    if (puntaje2 >= 70) {
        console.log("Aprobado");
    } else {
        console.log("Reprobado");
    }
}

// Condiconal múltiple

let diaSemana = "lunes";

switch (diaSemana) {
    case "lunes":
        console.log("Hoy es lunes");
        break;
    case "martes":
        console.log("Hoy es martes");
        break;
    case "miércoles":
        console.log("Hoy es miércoles");
        break;
    case "jueves":
        console.log("Hoy es jueves");
        break;
    case "viernes":
        console.log("Hoy es viernes");
        break;
    default:
        console.log("No es un día válido");
}

/*
                Condicionales
*/

// Bucle for 

const tareas = ["Comprar comestibles", "Hacer ejercicio", "Llamar al médico", "Enviar correo electrónico"];

for (let i = 0; i < tareas.length; i++) {
    console.log(`Tarea ${i + 1}: ${tareas[i]}`);
}

// Bucle while 

let contador1 = 0;

while (contador1 < 5) {
    console.log("Contador:", contador1);
    contador1++;
}

console.log("Fin del bucle");

//Bucle do-while

let saldoInicial = 1000;
let saldoActual = saldoInicial;
const tasaInteres2 = 0.05;
let meses = 0;

do {
    const intereses = saldoActual * tasaInteres2;
    saldoActual += intereses;
    meses++;
} while (saldoActual < 2000);

console.log(`El saldo inicial era ${saldoInicial} y se necesitaron ${meses} meses para alcanzar un saldo de ${saldoActual}.`);

// forEach - forof - forin - map

// forEach 
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
    console.log(number);
});

// forof

const colors = ["red", "green", "blue"];

for (const color of colors) {
    console.log(color);
}

// forin

const person = {
    name: "John",
    age: 30,
    city: "New York"
};

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

// map

const numbers1 = [1, 2, 3, 4, 5];

const doubledNumbers = numbers1.map((number) => number * 2);

console.log(doubledNumbers); 
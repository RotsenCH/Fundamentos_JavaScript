// Importamos la clase CarritoDeCompras del módulo carrito.js
import { CarritoDeCompras } from './carrito.js';

// Creamos una instancia de CarritoDeCompras
const carrito = new CarritoDeCompras();

// Agregamos productos al carrito
carrito.agregarProducto('Camisa', 25);
carrito.agregarProducto('Pantalón', 40);

// Obtenemos el precio total del carrito
const precioTotal = carrito.obtenerPrecioTotal();
console.log(`El precio total del carrito es: $${precioTotal}`);
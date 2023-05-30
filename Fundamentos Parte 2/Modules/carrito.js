// Importamos la clase Producto del módulo producto.js
import { Producto } from './producto.js';

// Creamos una clase para representar el carrito de compras
export class CarritoDeCompras {
    constructor() {
        this.productos = [];
    }

    agregarProducto(nombre, precio) {
        const producto = new Producto(nombre, precio);
        this.productos.push(producto);
    }

    obtenerPrecioTotal() {
        let precioTotal = 0;
        for (const producto of this.productos) {
            precioTotal += producto.precio;
        }
        return precioTotal;
    }
}

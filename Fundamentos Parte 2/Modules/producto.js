// Definimos una clase para representar un producto
export class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    calcularDescuento(porcentajeDescuento) {
        const descuento = this.precio * (porcentajeDescuento / 100);
        return this.precio - descuento;
    }
}

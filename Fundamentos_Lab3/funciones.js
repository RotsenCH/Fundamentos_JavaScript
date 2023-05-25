
/*
                Funciones
*/


// Declaración de una función tradicional
function calcularDescuento(precio, descuento) {
    return precio * (1 - descuento);
}

// Declaración de una función flecha
const aplicarImpuesto = (precio) => {
    const impuesto = 0.15; // 15% de impuesto
    return precio * (1 + impuesto);
};

  // Declaración de una función anónima como método de un objeto
const carrito = {
    productos: ['Camiseta', 'Pantalón', 'Zapatos'],
    calcularTotal: function() {
        const precioUnitario = 50;
        return this.productos.length * precioUnitario;
    }
};

// Invocación de la función tradicional
const precioConDescuento = calcularDescuento(100, 0.2);
console.log(`Precio con descuento: $${precioConDescuento}`);

// Invocación de la función flecha
const precioConImpuesto = aplicarImpuesto(80);
console.log(`Precio con impuesto: $${precioConImpuesto}`);

// Invocación de la función anónima como método de un objeto
const totalCarrito = carrito.calcularTotal();
console.log(`Total del carrito: $${totalCarrito}`);

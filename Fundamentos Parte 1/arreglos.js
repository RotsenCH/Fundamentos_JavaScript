
/*
                Arreglos
*/

// Declaración del array de productos en el carrito
let carrito = [];

// Agregar productos al carrito utilizando el operador rest
const agregarProductos = (...productos) => {
    carrito.push(...productos);
    console.log(`${productos.length} productos agregados al carrito.`);
};

// Agregar productos al carrito
agregarProductos('Camiseta', 'Pantalón', 'Zapatos');

// Mostrar la cantidad de productos en el carrito
console.log(`Productos en el carrito: ${carrito.length}`);

// Mostrar los productos en el carrito utilizando destructuración
console.log('Productos en el carrito:');
carrito.forEach((producto, index) => {
    console.log(`${index + 1}. ${producto}`);
});

// Eliminar un producto del carrito utilizando destructuración
const [productoEliminado, ...productosRestantes] = carrito;
console.log(`Producto eliminado: ${productoEliminado}`);

// Mostrar los productos restantes utilizando el método join
console.log('Productos restantes:');
console.log(productosRestantes.join(', '));

// Verificar si el carrito está vacío utilizando el método every
const carritoVacio = carrito.every(producto => producto === undefined);
console.log(`El carrito está vacío: ${carritoVacio}`);



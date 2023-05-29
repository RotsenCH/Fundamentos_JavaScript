// Acceder al contenido
const title = document.getElementById("title");
const productImages = document.querySelectorAll(".product-image");
const productNames = document.getElementsByClassName("product-name");
const cartItems = document.getElementById("cart-items");

// Modificar el contenido
title.textContent = "Mi Tienda Online";
productNames[0].textContent = "Camiseta Azul";
productImages[1].src = "product3.jpg";

// Modificar el estilo
title.style.color = "blue";
productNames[0].style.fontWeight = "bold";

// Agregar elementos
const newItem = document.createElement("li");
newItem.textContent = "Pantalón Negro - $29.99";
cartItems.appendChild(newItem);

// Eliminar elementos
const productToDelete = document.querySelector(".product");
productToDelete.remove();

// Eventos
const checkoutButton = document.getElementById("checkout");

checkoutButton.addEventListener("click", () => {
    alert("Pago realizado con éxito");
});

const productImagesArray = Array.from(productImages);

productImagesArray.forEach(productImage => {
    productImage.addEventListener("mouseout", () => {
        productImage.style.opacity = 0.5;
    });
});

const inputField = document.getElementById("search-input");

inputField.addEventListener("input", () => {
    console.log("Texto ingresado: ", inputField.value);
});

const form = document.getElementById("newsletter-form");

form.addEventListener("submit", event => {
    event.preventDefault();
    console.log("Formulario enviado");
});

document.addEventListener("keypress", event => {
    console.log("Tecla presionada: ", event.key);
});

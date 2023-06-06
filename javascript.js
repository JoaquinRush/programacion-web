

// Módulo del carrito de compras
const ShoppingCart = (function() {
// Variables privadas
let cart = []; // Array para almacenar las zapatillas agregadas al carrito

// Elementos del DOM
const addToCartBtn = document.querySelectorAll('.add-to-cart-btn');
const cartItems = document.querySelector('#cart-items');
const cartTotal = document.querySelector('#cart-total');

// Función privada para calcular el precio total
function calculateTotal() {
    return cart.reduce((total, item) => total + item.price, 0);
}

// Función privada para actualizar la visualización del carrito



// Función pública para agregar una zapatilla al carrito
function addToCart() {
    const shoe = {
      id: 1,
      name: this.dataset.name, // Obtener el nombre del botón clicado
      price: parseFloat(this.dataset.price) // Obtener el precio del botón clicado
    };
    alert("Agregada al carrito con exito")
    cart.push(shoe);
    updateCartUI();
  }


// Inicialización del módulo
function init() {
    addToCartBtn.forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Devolver las funciones y variables públicas
return {
    init: init
};
})();

// Inicializar el módulo del carrito de compras
ShoppingCart.init();

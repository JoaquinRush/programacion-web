// Módulo del carrito de compras
const ShoppingCart = (function() {
    // Variables privadas
    let cart = []; // Array para almacenar las zapatillas agregadas al carrito
  
    // Elementos del DOM
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    const cartItems = document.querySelector('#cart-items');
    const cartTotal = document.querySelector('#cart-total');
  
    // Función privada para calcular el precio total
    function calculateTotal() {
      return cart.reduce((total, item) => total + item.price, 0);
    }
  
    // Función privada para actualizar la visualización del carrito
    function updateCartUI() {
      cartItems.innerHTML = '';
      cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
      });
      cartTotal.textContent = `$${calculateTotal().toFixed(2)}`;
    }
  
    // Función pública para agregar una zapatilla al carrito
    function addToCart() {
      // Puedes reemplazar este objeto con la estructura de datos que estés utilizando
      const shoe = {
        id: 1,
        name: 'Zapatilla',
        price: 50.00
      };
  
      cart.push(shoe);
      updateCartUI();
    }
  
    // Inicialización del módulo
    function init() {
      addToCartBtn.addEventListener('click', addToCart);
    }
  
    // Devolver las funciones y variables públicas
    return {
      init: init
    };
  })();
  
  // Inicializar el módulo del carrito de compras
  ShoppingCart.init();
  
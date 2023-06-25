
// Add to cart Functionality

var cartIcon = document.getElementById('cartIcon');
var cartItemsContainer = document.getElementById('cartItems');
var cartSidebar = document.getElementById('cart-sidebar');

// Initialize the cart count and cart items array
var cartCount = 0;
var cartItems = [];


cartIcon.addEventListener('click', showCartSidebar);
var addToCartButtons = document.getElementsByClassName('btn shop-btn');
for (var i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener('click', addToCart);
}
// Increase item in cart on add-to-cart click
function increment(id) {
  let selectedItem = id;
  cartCount++;
  cartIcon.innerText = cartCount;

  // Print the selected item ID for testing
  console.log(selectedItem);
}


function addToCart() {
  const productContainer = this.parentElement;
  const productTitle = productContainer.querySelector('.productTitle').innerText;
  const productPrice = productContainer.querySelector('.productPrice').innerText;
  const productImg = productContainer.querySelector('.productImg');

   // Check if productImg exists and has a valid src
   const imgSrc = productImg && productImg.src ? productImg.src : '';



  // Create a new cart item object
  const cartItem = {
    name: productTitle,
    price: productPrice,
    img: imgSrc,
  };
  cartItems.push(cartItem);
  cartItemsContainer.innerHTML = '';

  
  // Generate HTML structure for each cart item
  const cartItemsHTML = cartItems
  .map(item => {
    let { img, name, price } = item;
  
  return (
  ` <div class="d-flex flex-row cart-item">
      <div class="p-2 mx-2 cart-img">
      <img class="productImg" src="${img}" alt="Product Image">
      </div>
      <div class="p-2 mx-2">
        <h5 class="productTitle">${name}</h5>
      </div>
      <div class="p-2 mx-2">
        <p class="productPrice">${price}</p>
      </div>
    </div>`
     )
  })
  cartItemsContainer.innerHTML = cartItemsHTML.join('');
  
}



// Function to show the checkout page with the selected products
function showCartSidebar() {
  document.getElementById("cartIcon").addEventListener("click", function() {
    var cartSidebar = document.getElementById("cart-sidebar");
    var overlay = document.getElementById("overlay");
  
    if (cartSidebar.style.right === "-350px") {
   cartSidebar.style.right = "0";
   overlay.style.display = "block";
  } else {
   cartSidebar.style.right = "-350px";
   overlay.style.display = "none";
  }
  });
  
  document.getElementById("cart-close-btn").addEventListener("click", function() {
  var cartSidebar = document.getElementById("cart-sidebar");
  var overlay = document.getElementById("overlay");
  
  cartSidebar.style.right = "-350px";
  overlay.style.display = "none";
  });

  // Return false to prevent default behavior and page refresh
  return false;
}


  
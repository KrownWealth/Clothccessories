
let generateShop = () => {
  // Get the product container element
  const productContainer = document.getElementById('productContainer');
  
 // Filter products with defined colors
 const productsWithColors = ProductsData.filter((product) => product.colors !== undefined);

  // Generate the shop HTML content
  productContainer.innerHTML = productsWithColors
    .map((x) => {
      let { id, name, price, img, colors, btn } = x;
      if (colors === undefined) {
        colors = [];
      }
      
      return `
        <div class="col-lg-4">
          <div class="card mb-4 product-item" id="product-id-${id}" style="height: 450px;">
            <img src="${colors[0] ? colors[0].img : ''}" class="productImg" style="height: 60%; object-fit: cover;" alt="...">
            <div class="card-body text-center">
              <h5 class="productTitle">${name}</h5>
              <p class="productPrice">${price}</p>
              <div class="colors">
                ${colors.map((color) => `
                  <div class="color" style="background-color: ${color.code}" onclick="changeProductImage(this, '${color.img}')"></div>
                `).join('')}
              </div>
              <button onclick="increment(${id})" class="btn shop-btn"><a href="#" class="add-to-cart">${btn}</a></button>
            </div>
          </div>
        </div>
      `;
    })
    .join("");
};



  // Function to handle changing the product image on color selection
function changeProductImage(element, imageSrc) {
  var productImage = element.closest('.product-item').querySelector('.productImg');
  productImage.src = imageSrc;
}

generateShop();



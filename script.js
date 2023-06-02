// Fetch the API data and populate the products
async function fetchData() {
  try {
    const response = await fetch("https://fakestoreapi.com/products?limit=8");
    const jsonData = await response.json();

    const productsContainer = document.getElementById("products");

    const productsHTML = jsonData
      .map((element) => {
        const price = element.price;
        const title = element.title.slice(0, 10) + "...";

        return `
          <div class="col-lg-4">
            <div class="card mb-4 product-item" style="height: 350px;">
              <img src="${element.image}" class="card-img-top product-img" style="height: 60%; object-fit: contain;" alt="...">
              <div class="card-body text-center">
                <h5 class="card-title">${title}</h5>
                <p class="card-text"> $ ${price}</p>
                <button class="btn shop-btn"> <a href="#" class="add-to-cart">Add to Cart </a></button>
  
              </div>
            </div>
          </div>
        `;
      })
      .join("");

    productsContainer.innerHTML = productsHTML;
  } catch (error) {
    console.log(error);
  }
}

fetchData();

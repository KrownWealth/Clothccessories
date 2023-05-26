// Fetch the API data and populate the products
async function fetchData() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const jsonData = await response.json();

    const productsContainer = document.getElementById("products");

    const productsHTML = jsonData
      .map((element) => {
        const description = element.description.slice(0, 80) + "...";
        const title = element.title.slice(0, 20) + "...";

        return `
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="card mb-4" style="height: 700px;">
              <img src="${element.image}" class="card-img-top" style="height: 60%; object-fit: contain;" alt="...">
              <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${description}</p>
                <a href="#" class="btn btn-primary">View Product</a>
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

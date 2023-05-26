// get the product div

const products = document.getElementById("products");

// fetch the products data from storeAPI
async function fetchData() {
  try {
    // fetch the data from the api
    const response = await fetch("https://fakestoreapi.com/products");
    const jsonData = await response.json();
    //add content to products div
// Loop through the images and create Bootstrap grid items

     {jsonData.map((element) => {
        const description = element.description.slice(0, 80) + "...";
        const title = element.title.slice(0, 20) + "...";
        const imageCol = document.createElement("div");
        imageCol.classList.add("col-lg-4", "col-md-6", "col-sm-12",);
        

        products.innerHTML =`
      <div class="card">
              <img src="${element.image}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${description}</p>
               
              </div>
            </div>`;
           products.appendChild(imageCol);
      }).join("")
    }
  } catch (err) {
    console.log(err);
  }
   }


fetchData();










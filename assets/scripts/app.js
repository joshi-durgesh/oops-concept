"use strict";
const productList = {
  products: [
    {
      title: "A pillow",
      imageUrl:
        "https://www.gooten.com/wp-content/uploads/2021/04/Throw_Pillow_Catalog_Photo_01.png",
      price: 34.53,
      description: "A soft pillow!",
    },
    {
      title: "A Carpet",
      imageUrl:
        "https://t4.ftcdn.net/jpg/00/89/76/09/360_F_89760942_RmpjUzGtDcERW1rlkNaifMr58NCVu7YB.jpg",
      price: 34.53,
      description: "A carpet which you might like - or not.",
    },
  ],
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
        <div>
          <img src="${prod.imageUrl}" alt="${prod.title}">
          <div class="product-item__content">
            <h2>${prod.title}</h2>
            <h3>\$${prod.price}</h3>
            <p>${prod.description}</p>
            <button>Add to Cart</button>
          </div>

        </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productList.render();

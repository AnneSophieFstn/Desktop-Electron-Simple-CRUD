/* CONTROLLER */
const { remote } = "electron";
const main = require("../js/main");

const dataBodyTable = document.querySelector("#data-piece-by-type");

const getProductsByType = async () => {
  listeProductsByType = await main.getProductsByType();
  renderProducts(listeProductsByType);
};

async function init() {
  getProductsByType();
}

init();

function renderProducts(products) {
  products.forEach((product) => {
    console.log("productByType: ", products);
    dataBodyTable.innerHTML += `
      <tr>
        <td>${product.id}</td>
        <td>${product.type_piece}</td>
        <td>${product.nom}</td>
        <td>${product.marque}</td>
        <td>${product.prix}</td>
        <td>${product.description}</td>
        <td>${product.stock}</td>
        <td><button class="editBtn btn btn-secondary btn-sm" onClick="editProduct('${product.id}')">Modifier</button></td>
        <td><button class="deleteBtn btn btn-danger btn-sm" onClick="deleteProduct('${product.id}')">Modifier</button></td>
      </tr>
    `;
  });
}

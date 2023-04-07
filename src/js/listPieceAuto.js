/* CONTROLLER */
const { remote } = "electron";
const main = require("../js/main");

const dataBodyTable = document.querySelector("#data-piece");
/* const openModal = document.querySelector(".modal");
 */
const getAllProducts = async () => {
  listeProducts = await main.getProducts();
  renderProducts(listeProducts);
};

async function init() {
  getAllProducts();
}

init();

function renderProducts(products) {
  products.forEach((product) => {
    dataBodyTable.innerHTML += `
      <tr>
        <td>${product.id}</td>
        <td>${product.type_piece}</td>
        <td>${product.nom}</td>
        <td>${product.marque}</td>
        <td>${product.prix}</td>
        <td>${product.description}</td>
        <td>${product.stock}</td>
        <td><button class="editBtn btn btn-secondary btn-sm" data-toggle="modal" data-target="#editModal" onClick="editBtnModal('${product.id}')"">Modifier</button></td>
        <td><button class="deleteBtn btn btn-danger btn-sm" onClick="deleteProduct('${product.id}')">Supprimer</button></td>
      </tr>
    `;
  });
}

const deleteProduct = async (id) => {
  /* const productByIdD = await main.getProductById(id);
  console.log("productById: ", productByIdD);*/
  const response = confirm("Êtes-vous sûr de vouloir supprimer ce champ ?");
  if (response) {
    await main.deleteProduct(id);
    /* await getProducts(); */
    window.location.reload();
  }
  return;
};

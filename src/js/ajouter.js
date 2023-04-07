/* CONTROLLER */
const { remote } = require("electron");
const main = require("../js/main");

//Récupérer les valeurs

const formAdd = document.querySelector("#AjoutForm");
const dataFormNompiece = document.querySelector("#nompiece");
const dataFormPrix = document.querySelector("#prix");
const dataFormStock = document.querySelector("#stock");
const dataFormTypepiece = document.querySelector("#typepiece");
const dataFormMarque = document.querySelector("#marque");
const dataFormDescription = document.querySelector("#description");

formAdd.addEventListener("submit", async (e) => {
  try {
    e.preventDefault();

    //initialiser les data input VS champ table stockage
    const stockage = {
      type_piece: dataFormTypepiece.value,
      nom: dataFormNompiece.value,
      marque: dataFormMarque.value,
      prix: dataFormPrix.value,
      description: dataFormDescription.value,
      stock: dataFormStock.value,
    };

    /* Demande de promesse vers le main */
    const addProduct = await main.ajoutProduct(stockage);
    console.log(addProduct);
    document.location.href = "index.html";
  } catch (error) {
    console.log(error);
  }
});

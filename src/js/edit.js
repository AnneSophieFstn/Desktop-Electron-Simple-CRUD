/* CONTROLLER */
const openModal = document.querySelector(".modal");
const closeBtn = document.querySelectorAll(".closeBtn");

const formEdit = document.querySelector("#ModifForm");
const btnModifier = document.querySelector(".btnUpdate");
/* value products by id */
const valueFormTypepiece = document.querySelector("#typepiece");
const valueFormNompiece = document.querySelector("#nompiece");
const valueFormMarque = document.querySelector("#marque");
const valueFormPrix = document.querySelector("#prix");
const valueFormDescription = document.querySelector("#description");
const valueFormStock = document.querySelector("#stock");

/* KEEP ID */
let productId = null;

const showModal = async () => {
  await openModal.classList.add("show");
  openModal.style.display = "block";
  openModal.removeAttribute("aria-hidden");
};

const editBtnModal = async (id) => {
  productId = id; // stockage de l'id dans la variable productId
  await showModal();
  const productByIdE = await main.getProductById(id);
  console.log("productById: ", productByIdE);
  valueFormNompiece.setAttribute("value", productByIdE.nom);
  valueFormPrix.setAttribute("value", productByIdE.prix);
  valueFormStock.setAttribute("value", productByIdE.stock);
  const optionSelectedTP = valueFormTypepiece.querySelector(
    `option[value='${productByIdE.type_piece}']`
  );
  optionSelectedTP.setAttribute("selected", true);
  const optionSelectedM = valueFormMarque.querySelector(
    `option[value='${productByIdE.marque}']`
  );
  optionSelectedM.setAttribute("selected", true);
  valueFormDescription.textContent = productByIdE.description;
};

closeBtn.forEach((btnC) => {
  btnC.addEventListener("click", async () => {
    try {
      await openModal.classList.remove("show");
      openModal.style.display = "none";
    } catch (error) {
      console.log(error);
    }
  });
});

formEdit.addEventListener("submit", async (e) => {
  try {
    e.preventDefault();

    const stockage = {
      type_piece: valueFormTypepiece.value,
      nom: valueFormNompiece.value,
      marque: valueFormMarque.value,
      prix: valueFormPrix.value,
      description: valueFormDescription.value,
      stock: valueFormStock.value,
    };
    const edit = await main.modifProduct(productId, stockage);
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
});

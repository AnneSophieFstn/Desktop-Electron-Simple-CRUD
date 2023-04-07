/* CONTROLLER */

const { remote } = require("electron");
const main = require("../js/main");

const editBtn = document.querySelector("editBtn");

editBtn.addEventListener("click", async (e) => {
  try {
    console.log("btn edit click");
  } catch (error) {
    console.log(error);
  }
});

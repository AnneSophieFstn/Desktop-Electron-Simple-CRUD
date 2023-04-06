/* CONTROLLER */
const { remote } = require("electron");
const main = require("../js/main");

//Récupérer les valeurs

const formAdd = document.querySelector("#AjoutForm");
const nompiece = document.querySelector("#nompiece");
const prix = document.querySelector("#prix");
const stock = document.querySelector("#stock");
const typepiece = document.querySelector("#typepiece");
const marque = document.querySelector("#marque");
const description = document.querySelector("#description");

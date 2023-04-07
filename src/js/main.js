/* MODEL --> Lance la vue*/

const { Notification, BrowserWindow } = require("electron");
const { getConnection } = require("./database");

let window;

const getProducts = async () => {
  const conn = await getConnection();
  const result = await conn.query("SELECT * FROM stockage");
  return result;
};

const getProductById = async (id) => {
  const conn = await getConnection();
  const result = await conn.query("SELECT * FROM stockage WHERE id = ?", id);
  return result[0];
};

const getProductsByType = async () => {
  const conn = await getConnection();
  const result = await conn.query(
    "SELECT * FROM stockage WHERE type_piece = 'Distribution'"
  );
  return result;
};

const ajoutProduct = async (stockage) => {
  const conn = await getConnection();
  const result = await conn.query("INSERT INTO stockage SET ?", stockage);
  return await result.json;
};

const modifProduct = async (id, stockage) => {
  const conn = await getConnection();
  const result = await conn.query("UPDATE stockage SET ? WHERE id = ?", [
    stockage,
    id,
  ]);
  console.log(result);
};

const deleteProduct = async (id) => {
  const conn = await getConnection();
  const result = await conn.query("DELETE FROM stockage WHERE id = ?", id);
  return result;
};

function createWindow() {
  window = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true, //responsive design
      contextIsolation: false,
    },
  });

  window.loadFile("./src/ui/index.html");
}

module.exports = {
  createWindow,
  ajoutProduct,
  modifProduct,
  deleteProduct,
  getProducts,
  getProductById,
  getProductsByType,
};

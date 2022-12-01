const uuid = require("uuid");

class Products {
  constructor(id, { name, descripcion, codigo, price, stock, url }) {
    this.id = id;
    this.name = name;
    this.descripcion = descripcion;
    this.codigo = codigo;
    this.price = price;
    this.stock = stock;
    this.url = url;
  }
}

const db = {};

function getProducto({ id }) {
  if (!db[id]) {
    throw new Error("Productos no exists");
  }
  return db;
}

function getProductos({ field, value }) {
  const productos = Object.values(db);
  if (field && value) {
    return productos.filter((s) => s[field] == value);
  }
  return productos;
}

function createProducto({ data }) {
  const id = uuid.v1();
  const newProducto = new Products(id, data);
  db[id] = newProducto;

  return newProducto;
}

function updateProducto(id, { data }) {
  if (!db[id]) {
    throw new Error("Error");
  }
  const updateProducto = new Products(id, data);
  db[id] = updateProducto;
  return updateProducto;
}

function deleteProducto(id) {
  if (!db[id]) {
    throw new Error("Error");
  }
  const deleteProducto = db[id];
  delete db[id];
  return deleteProducto;
}

module.exports = {
  getProducto,
  getProductos,
  createProducto,
  updateProducto,
  deleteProducto,
};

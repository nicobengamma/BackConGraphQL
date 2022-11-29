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

function getProductos({ id }) {
  if (!db[id]) {
    throw new Error("Productos no exists");
  }
  return db;
}

function createProducto({ data }) {
  const id = uuid.v1();
  const newProducto = new Products(id, data);
  db[id] = newProducto;

  return newProducto;
}

function updateProducto() {}

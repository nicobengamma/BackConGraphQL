const graphql = require("graphql");
const { buildSchema } = graphql;

const schemaProducts = buildSchema(`type Productos {
   id: ID!
   name: String,
  descripcion: String,
  codigo: Number,
  price: Number,
  stock: Number,
  url: String, 
}
input ProductosInput {
  name: String,
  descripcion: String,
  codigo: Number,
  price: Number,
  stock: Number,
  url: String,
}
type Query {
    getProductos(id: ID!): Productos,
    getProductos(field: String, value: String): [Productos]
}
type Mutation {
    createProducto(data: ProductoInput): Producto,
    updateProducto(id: ID!, data: ProductosInput): Producto,
    deleteProducto(id: ID!): Producto
}
`);

module.exports = schemaProductos;

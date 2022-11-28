const uuid = require("uuid");

class Products {
  constructor(id, { name, age }) {
    (this.id = id), (this.name = name);
    this.age = age;
  }
}

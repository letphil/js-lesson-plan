// put find, list, update, create, delte functions here

const dbConnect = require("../db/connect.js");

async function list() {
  const connect = await dbConnect("users");
  const find = await connect.collection.find().toArray();
  return find;
}

module.exports = {
  list,
};

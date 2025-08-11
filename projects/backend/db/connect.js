require("dotenv").config();

const { MongoClient } = require("mongodb");

async function dbConnect(collection) {
  const client = new MongoClient(process.env.MONGO_URI);
  await client.connect();
  console.log("CONNECTED TO SERVER!");
  const db = client.db();

  const dbCollection = db.collection(collection);

  return {
    client,
    db,
    collection: dbCollection,
  };
}

module.exports = dbConnect;

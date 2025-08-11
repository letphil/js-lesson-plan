## javascript databases

### What are JavaScript Databases?

- JavaScript Databases are Databases that can be Accessed and Manipulated using JavaScript
- They allow for Storing, Retrieving, and Managing Data in a Structured Format

### Common JavaScript Databases

- **MongoDB**
  - A NoSQL database that uses a document-oriented data model.
- **Firebase**
  - A Backend-as-a-Service (BaaS) that provides a real-time database and
    authentication services.
- **SQLite**
  - A lightweight, serverless SQL database that is often used in mobile applications.
- **IndexedDB**
  - A low-level API for client-side storage of significant amounts of structured data, including files/blobs.
- **PouchDB**
  - An open-source JavaScript database that syncs with CouchDB and is designed for offline applications.
- **NeDB**
  - A lightweight JavaScript database that is designed to be embedded in Node.js applications.
- **PostgreSQL with Node.js**
  - A powerful, open-source relational database that can be accessed using Node.js libraries like `pg`.
- **MySQL with Node.js**
  - A widely used relational database that can be accessed using Node.js libraries like `mysql` or `mysql2`.

### How to Use JavaScript Databases

- **MongoDB Example**
  ```javascript
  const { MongoClient } = require("mongodb");
  const url = "mongodb://localhost:27017";
  const client = new MongoClient(url);
  async function run() {
    try {
      await client.connect();
      const database = client.db("testdb");
      const collection = database.collection("testcollection");
      const doc = { name: "Alice", age: 25 };
      const result = await collection.insertOne(doc);
      console.log(`New document inserted with id: ${result.insertedId}`);
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);
  ```

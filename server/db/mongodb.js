const { MongoClient } = require("mongodb")

const connectionURL = "mongodb://127.0.0.1:27017";
const client = new MongoClient(connectionURL);
const databaseName = "tong-manager";


async function main() {
     await client.connect(connectionURL);
     const db = client.db(databaseName);
}
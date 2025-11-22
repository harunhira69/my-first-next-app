const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.irtmkrl.mongodb.net/?appName=Cluster0`;

app.use(express.json());
app.use(cors());

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");

      const db = client.db("e_commerce");
    const bikesCollection = db.collection("bike");

    // Example route to fetch data from a collection
    app.get('/bike', async (req, res) => {
      const collection = client.db('e_commerce').collection('bike');
      const bikes = await collection.find().toArray();
      res.send(bikes);
    });

  } catch (err) {
    console.error(err);
  }
}

run().catch(console.dir);

// Basic test route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

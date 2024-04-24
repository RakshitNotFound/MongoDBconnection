const { MongoClient } = require("mongodb");
// Connection URI
const uri =
  "mongodb://localhost:27017";
// Create a new MongoClient
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");

    const myDB = client.db("fruitsDB");

    //inserting many
const myColl = myDB.collection("fruit");
// const doc = [{ name: "Apple", color: "Red" },
// {name: "Orange", color: "orange" },
// {name: "Banana", color: "Yellow" }];
// const result = await myColl.insertMany(doc);

//inserting one
// const doc = { name: "Kiwi", color: "Green"}
// const result=await myColl.insertOne(doc);

// console.log(
//    `A document was inserted with the _id: ${result.insertedId}`,
// );

//Finding
const findResult=await myColl.find();
 
for await (const doc of findResult) {
    console.log(doc);
  }
    

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);



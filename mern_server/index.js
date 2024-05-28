
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const { MongoClient, ServerApiVersion, ObjectId} = require('mongodb');
const uri = "mongodb+srv://mern-book:man0045chau@cluster0.ceuepvl.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const bookCollections = client.db("BookInventory").collection("books");
    const blogging = client.db("Review").collection("Blogs");
    // insert a  books to the database

    app.post("/upload-book", async(req, res)=>{
     const data = req.body;
     const result = await bookCollections.insertOne(data)
     res.send(result)

    })
    // app.get("/all-books", async(req, res)=>{
    //  const books = bookCollections.find();
    //  const result = await books.toArray();
    //  res.send(result);
    // })

    app.patch("/book/:id", async(req, res)=>{
     const id = req.params.id;
     const updateBookData = req.body;
     const filter = {_id: new ObjectId(id)};
     
     const updateDoc = {
      $set: {
       ...updateBookData
      },
     }
     const options = {upsert: true};
     const result = await bookCollections.updateOne(filter, updateDoc, options);
     res.send(result);
    })
    app.delete("/book/:id", async(req, res)=>{
     const id = req.params.id;
     const filter = {_id: new ObjectId(id)};
     const result = await bookCollections.deleteOne(filter);
     res.send(result);
    })

    // find a category
    app.get("/all-books", async(req, res)=>{
     let query = {};
     if(req.query?.category){
      query={category: req.query.category}
     }
     const result = await bookCollections.find(query).toArray();
     res.send(result);
    })
    

    app.get("/book/:id", async(req, res)=>{
     const  id = req.params.id;
     const filter={_id: new ObjectId(id)};
     const result = await bookCollections.findOne(filter);
     res.send(result);
    })
    app.get("/blog/:id", async(req, res)=>{
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const result = await blogging.findOne(filter);
      res.send(result);
    })
    app.patch("/blog/:id", async(req, res)=>{
      const id = req.params.id;
      const updateData = req.body;
     const filter = {_id: new ObjectId(id)}; 
     const updateDoc = {
      $set: {
       ...updateData
      },
     }
     const options = {upsert: true};
     const result = await blogging.updateOne(filter, updateDoc, options);
     res.send(result);
    })

    app.post("/blog", async(req, res)=>{
      const data = req.body;
      const result = await blogging.insertOne(data);
      res.send(result);
    })

    app.delete("/blog/:id", async(req, res)=>{
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const result = await blogging.deleteOne(filter);
      res.send(result);

    })
    app.get("/all-blogs", async(req, res)=>{
      let query = {};
      if(req.query?.authorName){
       query={authorName: req.query.authorName}
      }
      const result = await blogging.find(query).toArray();
      res.send(result);
     })
     app.get("/search-book/:bookTitle", async(req, res) => {
      try {
        const title = req.params.bookTitle;
        const query = { title: { $regex: new RegExp(title, 'i') } };
        const result = await bookCollections.find(query).toArray();
        res.send(result);
      } catch (error) {
        console.error("Error searching for books:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });
    

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
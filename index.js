const express  = require('express')
const app = express()
const port =  process.env.PORT || 6001
const verificationRouter = require('./routes/verification')
const bodyParser = require('body-parser')
const { MongoClient } = require("mongodb");
require('dotenv').config();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
})

app.use('/verification/aadhaar', verificationRouter)




const uri = process.env.DB_URL
const client = new MongoClient(uri);
async function run() {
    try {

      // Connect the client to the server 
      await client.connect();
      // Establish and verify connection
      await client.db("admin").command({ ping: 1 });
      console.log("Connected successfully to Database");

    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);
  
  



app.get('/',(req, res)=>{
    res.json({
        "status":true,
        "message":"it's working"
    })
})


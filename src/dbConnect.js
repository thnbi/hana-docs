import { MongoClient } from "mongodb";
import { config } from "dotenv";

config();

const client = new MongoClient(process.env.MONGO_URI)

let documentsCollection;
try{
   await client.connect();

   const db = client.db("docs-hana");
   documentsCollection = db.collection("documents");

   console.log("Connected to MongoDB");
}catch(err){
    console.log(err);
}

export default documentsCollection;
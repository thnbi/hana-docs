import { documentsCollection } from "./dbConnect";

function findDocuments(name) {
   const requestedDocument = documentsCollection.findOne({ name });
   return requestedDocument;
}

function updateDocument(name, text) {
   const updatedDocument = documentsCollection.updateOne(
      { name },
      { $set: { text } }
   );
   return updatedDocument;
}

export { findDocuments, updateDocument };
import io from "./server.js";
import { findDocuments, updateDocument } from "./dbConnect.js";

io.on("connection", (socket) => {
	socket.on("join-document", async (documentName, returnText) => {
		socket.join(documentName);

		const requestedDocument = await findDocuments(documentName);

		if (requestedDocument) {
			returnText(requestedDocument.text);
		}
	});

	socket.on("text-change", async ({ text, documentName }) => {
		const update = await updateDocument(documentName, text);

		if (update.modifiedCount) {
			socket.to(documentName).emit("text-change-client", text);
		}
	});
});


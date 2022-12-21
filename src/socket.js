import io from "./server.js";

const documents = [
	{ name: "JavaScript", text: "JavaScript is a programming language" },

	{ name: "Node", text: "Node" },
	{ name: "Socket.io", text: "socket.io" },
];

io.on("connection", (socket) => {
	console.log("New connection ID: " + socket.id);

	socket.on("join-document", (documentName, getText) => {
		socket.join(documentName);
      const document = getDocument(documentName);

		if (document) {
			getText(document.text);
		}
		
	});

	socket.on("text-change", ({ text, documentName }) => {
		socket.to(documentName).emit("text-change-client", text);
	});
});

function getDocument(documentName) {
   return documents.find((document) => document.name === documentName);
}

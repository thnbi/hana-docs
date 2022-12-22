import { setText } from "./document.js";

const socket = io();

function joinDocument(documentName) {
	socket.emit("join-document", documentName, (text) => {
		setText(text);
	});
}

function eventTextChangEmit(data) {
	socket.emit("text-change", data);
}

socket.on("text-change-client", (text) => {
	setText(text);
});

export { eventTextChangEmit, joinDocument };

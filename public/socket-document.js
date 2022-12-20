import { setText } from "./document.js";

const socket = io();

function eventTextChangEmit(text) {
	socket.emit("text-change", text);
}

socket.on("text-change-client", (text) => {
	setText(text);
});

export { eventTextChangEmit };
import { eventTextChangEmit } from "./socket-document.js";

const textArea = document.getElementById("editor-texto");

textArea.addEventListener("keyup", () => {
	eventTextChangEmit(textArea.value);
});

function setText(text) {
	textArea.value = text;
}

export { setText };

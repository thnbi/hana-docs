import { eventTextChangEmit, joinDocument } from "./socket-document.js";

const params = new URLSearchParams(window.location.search);
const documentName = params.get("nome");
const docTitle = document.getElementById("titulo-documento");

docTitle.textContent = documentName || "Novo Documento";

joinDocument(documentName);

const textArea = document.getElementById("editor-texto");

textArea.addEventListener("keyup", () => {
	eventTextChangEmit({
		text: textArea.value,
		documentName,
	});
});

function setText(text) {
	textArea.value = text;
}

export { setText };

function EmailsEditor(containerNode) {
	const element = document.createElement('div');

	element.innerHTML = 'Hello world!!!';

	containerNode.appendChild(element);

	return element;
}

window.EmailsEditor = EmailsEditor;

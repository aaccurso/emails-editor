const ENTER_KEY = 13;

export class HtmlElement {
	constructor(node, options) {
		// When node is a string then create element
		if (typeof node === 'string') {
			this.node = document.createElement(node);
		} else {
			this.node = node;
		}
		for (const optionsKey in options) {
			if (options.hasOwnProperty(optionsKey)) {
				this.node[optionsKey] = options[optionsKey];
			}
		}
	}

	appendChild(htmlElement) {
		htmlElement.parent = this;
		this.node.appendChild(htmlElement.node);

		return this;
	}

	setChangeEvent(handler) {
		this.node.addEventListener('change', handler);

		return this;
	}

	setPressEnterEvent(handler) {
		this.node.addEventListener('keyup', event => {
			if (event.keyCode === ENTER_KEY) {
				event.preventDefault();

				return handler(event);
			}
		});
	}
}

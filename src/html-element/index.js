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

	setKey(value) {
		this.node.setAttribute('key', value);

		return this;
	}

	removeChildByKey(value) {
		const childToRemove = this.node.querySelector(`[key="${value}"]`);
		this.node.removeChild(childToRemove);

		return this;
	}

	setChangeEvent(handler) {
		this.node.addEventListener('change', event => {
			event.preventDefault();
			handler(event);
		});

		return this;
	}

	setClickEvent(handler) {
		this.node.addEventListener('click', event => {
			event.preventDefault();
			handler(event);
		});

		return this;
	}

	setPressEnterEvent(handler) {
		this.node.addEventListener('keyup', event => {
			if (event.keyCode === ENTER_KEY) {
				event.preventDefault();
				handler(event);
			}
		});
	}
}

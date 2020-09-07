import { HtmlElement } from "../html-element";

export class Widget {
	constructor(props) {
		this.props = props;
		this.children = [];
		this.state = null;
		this.element = null;
	}

	addChildren(...childrenWidgets) {
		childrenWidgets.forEach(childWidget => {
			this.children.push(childWidget);
			this.element.node.appendChild(childWidget.element.node);
		});

		return this;
	}

	setState(state) {
		this.state = {
			...this.state,
			...state,
		};
		this.children.forEach(child => child.update({ ...this.props, ...this.state }));

		return this;
	}

	update(props) {
		this.props = {
			...this.props,
			...props,
		};
		this.children.forEach(child => child.update(this.props));
	}
}

export class SimpleWidget extends Widget {
	constructor(node, options) {
		super();
		this.element = new HtmlElement(node, options);
	}
}

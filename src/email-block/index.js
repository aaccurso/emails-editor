import { HtmlElement } from '../html-element';

export class EmailBlock {
	constructor({ email }) {
		this.email = email;
		this.element = new HtmlElement(
			'li',
			{ innerHTML: email.value },
		);
		this.element.setKey(email.value);
	}
}

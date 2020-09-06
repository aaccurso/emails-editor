import { HtmlElement } from '../html-element';

export class EmailBlock {
	constructor(props) {
		this.props = props;
		this.email = props.email;
		this.element = new HtmlElement('li');
		this.element.setKey(this.email.value);
		// <EmailBlockLabel/>
		this.emailBlockLabel = new HtmlElement('span', {
			innerHTML: this.email.value,
		});
		this.element.appendChild(this.emailBlockLabel);
		// <EmailBlockRemoveButton/>
		this.emailBlockRemoveButton = new HtmlElement('button', {
			type: 'button',
			innerHTML: 'x',
		});
		this.emailBlockRemoveButton.setEvent('click', this.removeEmail.bind(this));
		this.element.appendChild(this.emailBlockRemoveButton);
	}

	removeEmail() {
		this.props.onRemove(this.email);
	}
}

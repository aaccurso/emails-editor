import { HtmlElement } from '../html-element';

export class EmailBlock {
	constructor(props) {
		this.props = props;
		this.email = props.email;
		this.element = new HtmlElement('li', {
			className: `email-block ${this.email.isValid ? 'is-valid' : 'is-invalid'}`
		});
		this.element.setKey(this.email.value);
		// <EmailBlockLabel/>
		this.emailBlockLabel = new HtmlElement('span', {
			innerHTML: this.email.value,
			className: 'email-block-label',
		});
		this.element.appendChild(this.emailBlockLabel);
		// <EmailBlockRemoveButton/>
		this.emailBlockRemoveButton = new HtmlElement('button', {
			type: 'button',
			innerHTML: 'x',
			className: 'email-block-remove-button'
		});
		this.emailBlockRemoveButton.setEvent('click', this.removeEmail.bind(this));
		this.element.appendChild(this.emailBlockRemoveButton);
	}

	removeEmail() {
		this.props.onRemove(this.email);
	}
}

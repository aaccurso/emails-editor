import { HtmlElement } from '../html-element';
import removeIcon from './remove.svg';

export class EmailBlock {
	constructor(props) {
		this.props = props;
		this.email = props.email;
		// <EmailBlockLabel/>
		this.emailBlockLabel = new HtmlElement(
			'span',
			{
				innerHTML: this.email.value,
				className: 'email-block-label',
			});
		// <EmailBlockRemoveButton/>
		this.emailBlockRemoveButton = new HtmlElement(
			'button',
			{
				type: 'button',
				innerHTML: removeIcon,
				className: 'email-block-remove-button',
			})
			.setEvent('click', this.removeEmail.bind(this));
		// <EmailBlock/>
		this.element = new HtmlElement(
			'li',
			{
				className: `email-block ${this.email.isValid ? 'is-valid' : 'is-invalid'}`,
			})
			.setKey(this.email.value)
			.appendChild(this.emailBlockLabel)
			.appendChild(this.emailBlockRemoveButton);
	}

	removeEmail() {
		this.props.onRemove(this.email);
	}
}

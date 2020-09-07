import './styles.css';
import { HtmlElement } from '../html-element';
import { Widget, SimpleWidget } from '../widget';
import removeIcon from './remove.svg';

export class EmailBlock extends Widget {
	constructor(props) {
		super(props);
		// <EmailBlock/>
		this.element = new HtmlElement(
			'li',
			{
				className: `email-block ${this.props.email.isValid ? 'is-valid' : 'is-invalid'}`,
			})
		.setKey(this.props.email.value);
		// <EmailBlockLabel/>
		this.emailBlockLabel = new SimpleWidget(
			'span',
			{
				innerHTML: this.props.email.value,
				className: 'email-block-label',
			});
		// <EmailBlockRemoveButton/>
		this.emailBlockRemoveButton = new SimpleWidget(
			'button',
			{
				type: 'button',
				innerHTML: removeIcon,
				className: 'email-block-remove-button',
			});
		this.emailBlockRemoveButton.element.setEvent('click', this.removeEmail.bind(this));
		// Add children
		this.addChildren(this.emailBlockLabel, this.emailBlockRemoveButton);
	}

	removeEmail() {
		this.props.onRemove(this.props.email);
	}
}

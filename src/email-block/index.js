import './styles.css';
import {HtmlElement} from '../html-element';
import {SimpleWidget, Widget} from '../widget';
import removeIcon from './remove.svg';

export class EmailBlock extends Widget {
	constructor(props) {
		super(props);
		const { value, isValid } = this.props.email;
		// <EmailBlock/>
		this.element = new HtmlElement(
			'li',
			{
				className: `email-block ${isValid ? 'is-valid' : 'is-invalid'}`,
			})
			.setKey(value);
		// <EmailBlockLabel/>
		this.emailBlockLabel = new SimpleWidget(
			'span',
			{
				innerHTML: value,
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
		this.emailBlockRemoveButton.element.node.setAttribute('aria-label', `Remove ${value}`);
		this.emailBlockRemoveButton.element.setEvent('click', this.removeEmail.bind(this));
		// Add children
		this.addChildren(this.emailBlockLabel, this.emailBlockRemoveButton);
	}

	removeEmail() {
		this.props.onRemove(this.props.email);
	}
}

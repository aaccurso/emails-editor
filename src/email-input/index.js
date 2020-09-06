import { HtmlElement } from '../html-element';
import { COMMA_KEY, ENTER_KEY, transformValueToEmails } from "../utils";

export class EmailInput {
	constructor(props) {
		this.props = props;
		this.element = new HtmlElement(
			'input',
			{
				type: 'email',
				placeholder: 'add more people...',
				className: 'email-input',
			},
		);
		this.onKeyUpHandler = this.onKeyUpHandler.bind(this);
		this.onChangeHandler = this.onChangeHandler.bind(this);
		this.onPasteHandler = this.onPasteHandler.bind(this);
		this.element.setEvent('keyup', this.onKeyUpHandler);
		this.element.setEvent('blur', this.onChangeHandler);
		this.element.setEvent('paste', this.onPasteHandler);
	}

	onChangeHandler(event) {
		const value = event.target.value;
		this.props.onChange(transformValueToEmails(value));
		event.target.value = '';
	}

	onKeyUpHandler(event) {
		if (event.keyCode === ENTER_KEY || event.keyCode === COMMA_KEY) {
			this.onChangeHandler(event);
		}
	}

	onPasteHandler(event) {
		const value = event.clipboardData.getData('Text');
		this.props.onChange(transformValueToEmails(value));
	}
}

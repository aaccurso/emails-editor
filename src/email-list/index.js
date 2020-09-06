import { HtmlElement } from '../html-element';
import { EmailBlock } from '../email-block';
import { differenceBy } from "../utils";
import {EmailInput} from "../email-input";

export class EmailList {
	constructor(props) {
		this.props = props;
		this.element = new HtmlElement('ul', {
			className: 'email-list',
		});
		this.emailInput = new EmailInput({ onChange: this.props.onChange });
		this.element.appendChild(this.emailInput.element);
		this.previousEmails = [];
		this.render(this.props);
	}

	render({ emails }) {
		const addedEmails = differenceBy(emails, this.previousEmails, 'value');
		const removedEmails = differenceBy(this.previousEmails, emails, 'value');
		removedEmails.forEach(email => {
			this.element.removeChildByKey(email.value);
		});
		addedEmails.forEach(email => {
			const emailBlock = new EmailBlock({ email, onRemove: this.props.onRemove });
			this.element.insertBefore(emailBlock.element, this.emailInput.element);
		});
		this.previousEmails = [...emails];
	}
}

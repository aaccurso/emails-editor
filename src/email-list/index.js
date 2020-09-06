import { HtmlElement } from '../html-element';
import { EmailBlock } from '../email-block';
import { differenceBy } from "../utils";

export class EmailList {
	constructor(props) {
		this.props = props;
		this.element = new HtmlElement('ul');
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
			const emailBlock = new EmailBlock({ email });
			this.element.appendChild(emailBlock.element);
		});
		this.previousEmails = [...emails];
	}
}
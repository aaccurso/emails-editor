import { HtmlElement } from '../html-element';
import { EmailBlock } from '../email-block';
import { differenceBy } from "../utils";
import { EmailInput } from "../email-input";
import { Widget } from '../widget';

export class EmailList extends Widget {
	constructor(props) {
		super(props);
		this.element = new HtmlElement('ul', {
			className: 'email-list',
		});
		this.emailInput = new EmailInput({ onChange: this.props.onChange });
		this.addChildren(this.emailInput);
		this.previousEmails = [];
		this.update(this.props);
	}

	update(props) {
		const { emails } = props;
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
		super.update(props);
	}
}

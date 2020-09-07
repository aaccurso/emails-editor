import './styles.css';
import { HtmlElement } from '../html-element';
import { Widget, SimpleWidget } from '../widget';
import { generateRandomEmail } from '../utils';

export class EmailsEditorFooter extends Widget {
	constructor(props) {
		super(props);
		this.addRandomEmail = this.addRandomEmail.bind(this);
		this.displayEmailsCount = this.displayEmailsCount.bind(this);
		// <EmailsEditorFooter/>
		this.element = new HtmlElement('div', {
			className: 'emails-editor-footer',
		});
		// <AddEmailButton/>
		this.addEmailButton = new SimpleWidget('button', {
			type: 'button',
			className: 'button primary',
			innerHTML: 'Add Email',
		});
		this.addEmailButton.element.setEvent('click', this.addRandomEmail);
		// <GetEmailsCountButton/>
		this.getEmailsCountButton = new SimpleWidget('button', {
			type: 'button',
			className: 'button primary',
			innerHTML: 'Get Emails Count',
		});
		this.getEmailsCountButton.element.setEvent('click', this.displayEmailsCount);
		// Add children
		this.addChildren(this.addEmailButton, this.getEmailsCountButton);
	}

	addRandomEmail() {
		this.props.addEmails([generateRandomEmail()]);
	}

	displayEmailsCount() {
		const validEmailsCount = this.props.emails.filter(email => email.isValid).length;
		alert(`You have ${validEmailsCount} valid emails.`);
	}
}

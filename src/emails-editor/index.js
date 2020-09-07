import { EmailList } from '../email-list';
import { HtmlElement } from '../html-element';
import { differenceBy, removeItem } from '../utils';

export class EmailsEditor {
	constructor(props) {
		// State
		this.state = {
			emails: props.emails || [],
		};
		// <EmailList/>
		this.emailList = new EmailList({
			emails: this.state.emails,
			onRemove: this.removeEmail.bind(this),
			onChange: this.addEmails.bind(this),
		});
		// <EmailsEditorContent/>
		this.emailsEditorContent = new HtmlElement(
			'div',
			{
				className: 'emails-editor-content',
			})
			.appendChild(this.emailList.element);
		// <EmailsEditorFooter/>
		this.emailsEditorFooter = new HtmlElement(
			'div',
			{
				className: 'emails-editor-footer',
			});
		// <EmailsEditor/>
		this.element = new HtmlElement(
			props.containerNode,
			{
				className: 'emails-editor',
			})
			.appendChild(this.emailsEditorContent)
			.appendChild(this.emailsEditorFooter);
	}

	addEmails(emails) {
		const newEmails = differenceBy(emails, this.state.emails, 'value');
		this.state.emails = [
			...this.state.emails,
			...newEmails,
		];
		this.emailList.render({ emails: this.state.emails });
	}

	removeEmail(emailToRemove) {
		this.state.emails = removeItem(this.state.emails, emailToRemove, 'value');
		this.emailList.render(this.state);
	}
}

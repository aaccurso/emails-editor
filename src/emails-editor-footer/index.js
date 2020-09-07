import { HtmlElement } from '../html-element';
import { Widget, SimpleWidget } from '../widget';

export class EmailsEditorFooter extends Widget{
	constructor(props) {
		super(props);
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
		// <GetEmailsCountButton/>
		this.getEmailsCountButton = new SimpleWidget('button', {
			type: 'button',
			className: 'button primary',
			innerHTML: 'Get Emails Count',
		});
		// Add children
		this.addChildren(this.addEmailButton, this.getEmailsCountButton);
	}
}

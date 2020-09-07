import './styles.css';
import { HtmlElement } from '../html-element';
import { Widget } from '../widget';
import { differenceBy, removeItem } from '../utils';
import { EmailsEditorFooter } from '../emails-editor-footer';
import { EmailsEditorContent } from '../emails-editor-content';

export class EmailsEditor extends Widget {
	constructor(props) {
		super(props);
		this.addEmails = this.addEmails.bind(this);
		this.removeEmail = this.removeEmail.bind(this);
		// State
		this.state = {
			emails: props.emails || [],
		};
		// <EmailsEditor/>
		this.element = new HtmlElement(
			props.containerNode,
			{
				className: 'emails-editor',
			});
		// <EmailsEditorContent/>
		this.emailsEditorContent = new EmailsEditorContent({
			...this.state,
			headerTitle: this.props.headerTitle,
			onRemove: this.removeEmail,
			onChange: this.addEmails,
		});
		// <EmailsEditorFooter/>
		this.emailsEditorFooter = new EmailsEditorFooter({
			...this.state,
			addEmails: this.addEmails,
		});
		this.addChildren(this.emailsEditorContent, this.emailsEditorFooter);
	}

	addEmails(emails) {
		const newEmails = differenceBy(emails, this.state.emails, 'value');
		this.setState({
			emails: [
				...this.state.emails,
				...newEmails,
			],
		});
	}

	removeEmail(emailToRemove) {
		this.setState({
			emails: removeItem(this.state.emails, emailToRemove, 'value'),
		});
	}
}

import { EmailList } from './email-list';
import { EmailInput } from './email-input';
import { HtmlElement } from './html-element';

function EmailsEditor(containerNode, options = {}) {
	// State
	const state = {
		emails: options.emails || [],
	};
	// <EmailsEditor/>
	const emailsEditor = new HtmlElement(containerNode);
	// <EmailList/>
	const emailList = new EmailList(state);
	emailsEditor.appendChild(emailList.element);
	// <EmailInput/>
	const onEmailInputChange = email => {
		state.emails.push(email);
		emailList.render(state);
	};
	const emailInput = new EmailInput({ onChange: onEmailInputChange });
	emailsEditor.appendChild(emailInput.element);
}

window.EmailsEditor = EmailsEditor;

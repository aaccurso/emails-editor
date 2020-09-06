import { EmailList } from './email-list';
import { EmailInput } from './email-input';
import { HtmlElement } from './html-element';
import { removeItem } from './utils';

function EmailsEditor(containerNode, options = {}) {
	// State
	const state = {
		emails: options.emails || [],
	};
	// <EmailsEditor/>
	const emailsEditor = new HtmlElement(containerNode);
	// <EmailList/>
	const removeEmail = emailToRemove => {
		state.emails = removeItem(state.emails, emailToRemove, 'value');
		emailList.render(state);
	};
	const emailList = new EmailList({ emails: state.emails, onRemove: removeEmail });
	emailsEditor.appendChild(emailList.element);
	// <EmailInput/>
	const addEmail = email => {
		state.emails.push(email);
		emailList.render({ emails: state.emails });
	};
	const emailInput = new EmailInput({ onChange: addEmail });
	emailsEditor.appendChild(emailInput.element);
}

window.EmailsEditor = EmailsEditor;

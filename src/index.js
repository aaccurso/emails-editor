import './index.css';
import { EmailList } from './email-list';
import { EmailInput } from './email-input';
import { HtmlElement } from './html-element';
import { differenceBy, removeItem } from './utils';

function EmailsEditor(containerNode, options = {}) {
	// State
	const state = {
		emails: options.emails || [],
	};
	// <EmailsEditor/>
	const emailsEditor = new HtmlElement(containerNode, {
		className: 'emails-editor',
	});
	// <EmailsEditorContent/>
	const emailsEditorContent = new HtmlElement('div', {
		className: 'emails-editor-content',
	});
	emailsEditor.appendChild(emailsEditorContent);
	// <EmailList/>
	const removeEmail = emailToRemove => {
		state.emails = removeItem(state.emails, emailToRemove, 'value');
		emailList.render(state);
	};
	const emailList = new EmailList({ emails: state.emails, onRemove: removeEmail });
	emailsEditorContent.appendChild(emailList.element);
	// <EmailInput/>
	const addEmails = emails => {
		const newEmails = differenceBy(emails, state.emails, 'value');
		state.emails = [
			...state.emails,
			...newEmails,
		];
		emailList.render({ emails: state.emails });
	};
	const emailInput = new EmailInput({ onChange: addEmails });
	emailsEditorContent.appendChild(emailInput.element);
}

window.EmailsEditor = EmailsEditor;

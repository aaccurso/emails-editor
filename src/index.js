import './index.css';
import { EmailsEditor } from './emails-editor';

function EmailsEditorWidget(containerNode, options = {}) {
	const emailsEditor = new EmailsEditor({
		containerNode,
		...options,
	});

	return {
		instance: emailsEditor,
		getEmails: () => emailsEditor.state.emails,
	};
}

window.EmailsEditor = EmailsEditorWidget;

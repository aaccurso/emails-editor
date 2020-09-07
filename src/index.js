import './index.css';
import { EmailsEditor } from './emails-editor';

function EmailsEditorWidget(containerNode, options = {}) {
	return new EmailsEditor({
		containerNode,
		...options,
	});
}

window.EmailsEditor = EmailsEditorWidget;

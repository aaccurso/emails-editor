import { HtmlElement } from '../html-element';
import { Widget } from '../widget';
import { EmailList } from '../email-list';

export class EmailsEditorContent extends Widget {
	constructor(props) {
		super(props);
		// <EmailsEditorFooter/>
		this.element = new HtmlElement(
			'div',
			{
				className: 'emails-editor-content',
			});
		// <EmailList/>
		this.emailList = new EmailList({
			...this.state,
			...this.props,
		});
		this.addChildren(this.emailList);
	}
}

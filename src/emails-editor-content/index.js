import './styles.css';
import { HtmlElement } from '../html-element';
import { SimpleWidget, Widget } from '../widget';
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
		// <EmailsEditorContentHeader/>
		this.header = new SimpleWidget('div', {
			className: 'header',
			innerHTML: this.props.headerTitle || 'Emails Editor',
		});
		// <EmailList/>
		this.emailList = new EmailList({
			...this.state,
			...this.props,
		});
		this.addChildren(this.header, this.emailList);
	}
}

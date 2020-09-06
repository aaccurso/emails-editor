import { HtmlElement } from '../html-element';
import { EmailBlock } from '../email-block';

export class EmailList {
	constructor(props) {
		this.props = props;
		this.element = new HtmlElement('ul');
		this.render(this.props);
	}

	render({ emails }) {
		emails.map(email => {
			const emailBlock = new EmailBlock({ email });
			this.element.appendChild(emailBlock.element);
		});
	}
}

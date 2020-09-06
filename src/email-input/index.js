import { HtmlElement } from '../html-element';

export class EmailInput {
	constructor(props) {
		this.props = props;
		this.element = new HtmlElement(
			'input',
			{ type: 'text', placeholder: 'add more people...' },
		);
		this.onChangeHandler = this.onChangeHandler.bind(this);
		this.element.setChangeEvent(this.onChangeHandler);
		this.element.setPressEnterEvent(this.onChangeHandler);
	}

	onChangeHandler(event) {
		const value = event.target.value;
		this.props.onChange({
			value,
		});
	};
}

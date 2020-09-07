import { screen, fireEvent } from '@testing-library/dom';
import { EmailsEditor } from './emails-editor'
import { COMMA_KEY, ENTER_KEY } from './utils';

describe('Emails Editor', () => {
	beforeEach(() => {
		document.body.innerHTML = '';
	});

	it('should add a new email on input blur or enter or comma', () => {
		const container = document.createElement('div');
		document.body.appendChild(container);
		const emailsEditor = new EmailsEditor({ containerNode: container });
		const input = screen.getByPlaceholderText('add more people...');
		fireEvent.change(input, { target: { value: 'blur@mail.com' } });
		fireEvent.blur(input);
		expect(screen.getByText('blur@mail.com')).toBeInTheDocument();
		fireEvent.change(input, { target: { value: 'enter@mail.com' } });
		fireEvent.keyUp(input, { keyCode: ENTER_KEY });
		expect(screen.getByText('enter@mail.com')).toBeInTheDocument();
		fireEvent.change(input, { target: { value: 'comma@mail.com' } });
		fireEvent.keyUp(input, { keyCode: COMMA_KEY });
		expect(screen.getByText('comma@mail.com')).toBeInTheDocument();
	});

	it('should add new emails separated by comma on paste', () => {
		const container = document.createElement('div');
		document.body.appendChild(container);
		const emailsEditor = new EmailsEditor({ containerNode: container });
		const input = screen.getByPlaceholderText('add more people...');
		fireEvent.paste(input, {
			clipboardData: {
				getData: () => 'pasted1@mail.com, pasted2@mail.com, pasted3@mail.com',
			},
		});
		expect(screen.getByText('pasted1@mail.com')).toBeInTheDocument();
		expect(screen.getByText('pasted2@mail.com')).toBeInTheDocument();
		expect(screen.getByText('pasted3@mail.com')).toBeInTheDocument();
	});

	it('should remove an email', () => {
		const container = document.createElement('div');
		document.body.appendChild(container);
		const emailsEditor = new EmailsEditor({
			containerNode: container,
			emails: [
				{
					value: 'remove@mail.com',
				},
			],
		});
		expect(screen.getByText('remove@mail.com')).toBeInTheDocument();
		const removeButton = screen.getByLabelText('Remove remove@mail.com');
		fireEvent.click(removeButton);
		expect(screen.queryByText('remove@mail.com')).not.toBeInTheDocument();
	});
});

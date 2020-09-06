export const differenceBy = (array1, array2, key) => {
	return array1.filter(a => !array2.some(b => b[key] === a[key]))
};

export const removeItem = (array, item, key) => {
	const itemIndex = array.findIndex(anItem => anItem[key] === item[key]);
	return [
		...array.slice(0, itemIndex),
		...array.slice(itemIndex + 1, array.length),
	];
};

export const ENTER_KEY = 13;
export const COMMA_KEY = 188;

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const validateEmail = email => EMAIL_REGEX.test(email);

export const transformValueToEmails = value => value.split(',').map(rawEmail => {
	const email = rawEmail.trim();

	return {
		value: email,
		isValid: validateEmail(email),
	};
})
// Filter empty emails
.filter(email => Boolean(email.value));

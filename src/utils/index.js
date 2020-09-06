export const differenceBy = (array1, array2, key) => {
	return array1.filter(a => !array2.some(b => b[key] === a[key]))
};

export const removeItem = (array, item, key) => {
	const itemIndex = array.findIndex(anItem => anItem[key] === item[key]);
	return [
		...array.slice(0, itemIndex),
		...array.slice(itemIndex + 1, array.length),
	];
}

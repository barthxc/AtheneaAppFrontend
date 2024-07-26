const capitalize = (str: string) => str.charAt(0).toLocaleUpperCase() + str.slice(1, str.length);

interface Options {
	by?: string;
	onlyFirst?: boolean;
}

export const capitalizeString = (str: string, options?: Options) => {
	const { by = " ", onlyFirst = false } = options ?? {};

	if (onlyFirst) return capitalize(str);

	const words = str.split(by);
	let formatted = "";
	for (const word of words) {
		const capitalizedWord = capitalize(word);
		formatted += `${capitalizedWord}${by}`;
	}

	// return the string removing the last space
	// not using .trim() to avoid unexpected format
	// this way might be better than adding a space conditionally if the string has many spaces
	return formatted.slice(0, formatted.length - 1);
};

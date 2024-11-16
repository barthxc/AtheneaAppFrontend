export const getDifferenceInDaysBetweenDates = (from: Date, to: Date) => {
	const differenceInTime = to.getTime() - from.getTime();
	const differenceInDays = differenceInTime / (1000 * 60 * 60 * 24);
	return Math.ceil(differenceInDays);
};

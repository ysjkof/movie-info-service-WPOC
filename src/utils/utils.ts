export const isArray = (arr: any[]) => Array.isArray(arr);
export const isZeroLengthArray = (arr: any[]) => arr.length === 0;

export const getRegex = (term: string) => new RegExp(term, "i");

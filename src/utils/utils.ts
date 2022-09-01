export const isArray = (arr: any[]) => Array.isArray(arr);
export const isZeroLengthArray = (arr: any[]) => arr.length === 0;

export const getRegex = (term: string) => new RegExp(term, 'i');

export function removeInArrayByIndex<T>(array: T[], index: number) {
  return [...array.slice(0, index), ...array.slice(index + 1)];
}

export function convertToIntOrZero(str: string): number {
  let result = parseInt(str);
  if (isNaN(result)) result = 0;
  return result;
}

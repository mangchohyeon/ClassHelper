export function getArray<T>(num: number, value? : any): (T | undefined)[] {
  return new Array(num).fill(value);
}
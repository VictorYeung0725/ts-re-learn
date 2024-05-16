//3
export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

export type mutationFunction = (v: number) => number;

//array mutation function take in an array of numbvers
export function mutateArray(
  number: number[],
  mutate: mutationFunction
): number[] {
  return number.map(mutate);
}

console.log(mutateArray([1, 2, 3], (v) => v * 10));

//function return another function type
//NOTE javascript closure
type adderFunction = (val: number) => number;
export function createAdder(number: number): adderFunction {
  return (val: number) => number + val;
}

const addOne = createAdder(1);
console.log(addOne(55));

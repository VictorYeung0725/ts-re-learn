function addNumber(a: number, b: number): number {
  return a * b;
}

// module.exports = addNumber;

export default addNumber;

export const addString = (string1: string, string2: string = ''): string =>
  `${string1} ${string2}`;

//NOTE this is a union type , any other type
export const format = (title: string, param: string | number): string => {
  return `${title} ${param}`;
};

//NOTE return void
export const testFromat = (title: string, param: string): void => {
  console.log(format(title, param));
};

//NOTE return promise
export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data from ${url}`);

//Ts only at the compile time not run time
const introduce = (saluation: string, ...name: string[]): string => {
  return `${saluation} ${name.join(' ')}`;
};

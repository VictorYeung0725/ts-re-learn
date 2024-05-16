//1

//Skip the basic
let whoseName = 'victor';
let isAdult = false;

console.log(isAdult);

//object as maps
//NOTE Record
const id: Record<number, string> = {
  10: 'a',
  20: 'b',
};

id[30] = 'c';

for (let i = 0; i < 10; i++) {
  console.log(i);
}

[1, 2, 3].forEach((item) => console.log(item));

//ts infer out to be a number array
const out = [1, 2, 3].map((item) => item * 10);
//ts infer out to be a string array
const out2: number = [1, 2, 3].map((item) => `item * 10`);

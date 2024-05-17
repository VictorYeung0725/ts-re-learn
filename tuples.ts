//NOTE 6
//Defining a Tuples
type ThreeDCoodinate = [x: number, y: number, y: number];

function add3DCoodinate(
  c1: ThreeDCoodinate,
  c2: ThreeDCoodinate
): ThreeDCoodinate {
  return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]];
}

console.log(add3DCoodinate([0, 0, 0], [10, 20, 30]));

//Tuples with different type
//NOTE React useState
function simpleString(inital: string): [() => string, (v: string) => void] {
  let str: string = inital;
  return [
    () => str,
    (v: string) => {
      str = v;
    },
  ];
}

const [str1getter, str1setter] = simpleString('hello');
const [str2getter, str2setter] = simpleString('jack');
console.log(str2getter());
console.log(str1getter());
str1setter('googleBy');
console.log(str1getter());
console.log(str2getter());

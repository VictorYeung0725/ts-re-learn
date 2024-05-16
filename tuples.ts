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

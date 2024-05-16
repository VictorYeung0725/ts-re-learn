//4
interface Coordinate {
  x: number;
  y: number;
}
// export function parseCoordinateFromObject(obj: Coordinate): Coordinate {
//   return {
//     ...obj,
//   };
// }

// function parseCoordinateFromNumbers(x: number, y: number): Coordinate {
//   return { x, y };
// }

//NOTE function overloading// when do i need it? what it use for
function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(string: string): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let coord: Coordinate = {
    x: 0,
    y: 0,
  };

  //run at complie time not at the run time
  if (typeof arg1 === 'object') {
    coord = {
      ...(arg1 as Coordinate),
    };
  } else if (typeof arg1 === 'string') {
    (arg1 as string).split(',').forEach((str) => {
      const [key, value] = str.split(':');
      coord[(key as 'x') || 'y'] = parseInt(value, 10);
    });
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }
  return coord;
}

console.log(parseCoordinate(10, 20));
console.log(parseCoordinate({ x: 52, y: 35 }));
console.log(parseCoordinate('x:21,y:35'));

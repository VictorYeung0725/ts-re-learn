// interface Cat {
//   name: string;
//   breed: string;
// }

interface Cat {
  name: string;
  breed: string;
}

type ReadOnlyCat = Readonly<Cat>;

function makeCat(name: string, breed: string): ReadOnlyCat {
  return { name, breed };
}

const kitty = makeCat('Kitty', 'Tabby');
//this is not immutable cat
//NOTE here we dont want that
kitty.name = 'pitter';

function makeCoordinate(
  x: number,
  y: number,
  z: number
): readonly [number, number, number] {
  return [x, y, z];
}

const c1 = makeCoordinate(10, 20, 30);
// still able to replace
c1[0] = 50;

const reallyConst = [1, 2, 3] as const;
//no complaint after as const
//get immutable
reallyConst[0] = 50;

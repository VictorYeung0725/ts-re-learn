//reproduce map,forEach,filter with reduce
//and have to be type safe

function myForEach<T>(items: T[], forEachFunc: (v: T) => void): void {
  items.reduce((acc, val) => {
    forEachFunc(val);
    return undefined;
  }, undefined);
}
myForEach(['a', 'b', 'c'], (v) => console.log(`forEach ${v}`));

function myFilter<T>(items: T[], filterFunc: (v: T) => boolean): T[] {
  return items.reduce(
    (acc, val) => (filterFunc(val) ? [...acc, val] : acc),
    [] as T[]
  );
}
console.log(myFilter([1, 2, 3, 4, 5, 6, 7, 8], (val) => val < 5));

//Complex one using reduce to reproduce map function with type safety

function myMap<T, K>(items: T[], mapFunc: (v: T) => K): K[] {
  //change the type in map function
  return items.reduce((acc, val) => [...acc, mapFunc(val)], [] as K[]);
}

console.log(myMap([1, 2, 3, 4, 5, 6, 7, 8], (val) => val * 5));

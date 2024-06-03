// type MyFlexibleDogInfo = {
//   name: string;
// } & Record<string, string>;

// const dog: MyFlexibleDogInfo = {
//   name: 'piggle',
//   breed: 'Mutt',
// };
type MyFlexibleDogInfo = {
  name: string;
  [key: string]: string | number;
};

const dog: MyFlexibleDogInfo = {
  name: 'piggle',
  breed: 'Mutt',
  age: 12,
};

interface DogInfo {
  name: string;
  age: number;
}

type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
  // [Property in keyof Type]: null;
};

type DogInfoOptions = OptionsFlags<DogInfo>;

type Listener<Type> = {
  [Property in keyof Type as `on${Capitalize<string & Property>}Change`]?: (
    newValue: Type[Property]
  ) => void;
};

//Pratical example for this
function listenToObject<T>(obj: T, listener: Listener<T>): void {
  console.log('need to implement first');
  throw 'Need to be implemented';
}

const lg: DogInfo = {
  name: 'LG',
  age: 8,
};

type DogInfoListener = Listener<DogInfo>;

listenToObject(lg, {
  onNameChange: (v: string) => {},
  onAgeChange: (v: number) => {},
});

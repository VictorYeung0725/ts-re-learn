//what it use for ?
function plunk<DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] {
  return items.map((item) => item[key]);
}

const dogs = [
  { name: 'mimi', age: 2 },
  { name: 'gg', age: 5 },
];

console.log(plunk(dogs, 'age'));
console.log(plunk(dogs, 'name'));

//event map
interface BaseEvent {
  time: number;
  user: string;
}

interface EventMap {
  addToCard: BaseEvent & { quantity: number; product: string };
  checkout: BaseEvent;
}

function sendEvent<Name extends keyof EventMap>(
  name: Name,
  data: EventMap[Name]
): void {
  console.log([name, data]);
}
sendEvent('addToCard', {
  product: 'apple',
  quantity: 1,
  time: 12,
  user: 'victor',
});
sendEvent('checkout', { time: 20, user: 'victor' });

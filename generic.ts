function simpleState<T>(inital: T): [() => T, (v: T) => void] {
  let val: T = inital;
  return [
    () => val,
    (v: T) => {
      val = v;
    },
  ];
}

//we can overwriting inferred type with generic T
const [val1getter, val1setter] = simpleState(10);

console.log(val1getter());
val1setter(62);
console.log(val1getter());

// NOTE const [val2getter, val2setter] = simpleState(null);
//if we set initial value type to null this will complain
//but wen can atually set a generic type to simpleState so that it can accept number of string with null value
const [val2getter, val2setter] = simpleState<string | null>(null);
console.log(val2getter());
val2setter('str');
console.log(val2getter());
//as a result now , we start as null but we set it to string after

interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}

//One more example
function ranker<RankItem>(
  items: RankItem[],
  rankAlgo: (v: RankItem) => number
): RankItem[] {
  //this is pretty cool with generic , we can also move the type out of the function , but still able to access the type of this Rank
  // interface Rank {
  //   item: RankItem;
  //   rank: number;
  // }

  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item,
    rank: rankAlgo(item),
  }));

  ranks.sort((a, b) => a.rank - b.rank);

  return ranks.map((rank) => rank.item);
}

//example
interface Pokemon {
  name: string;
  hp: number;
}
const pokemon: Pokemon[] = [
  {
    name: 'annie',
    hp: 20,
  },
  {
    name: 'victor',
    hp: 5,
  },
];

const ranks = ranker(pokemon, ({ hp }) => hp);
console.log(ranks);

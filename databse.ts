interface Databse<T, K> {
  get(id: K): T;
  set(id: K, value: T): void;
}

//also what if we make not only the value to generic but also the key to generic , <T , K> we can also provide a K

interface Persistable {
  //you can read or write your state from string ?
  saveToString(): string;
  restoreFromString(storedState: string): void;
}

//why this compliant about dbType
//NOTE here we create a dbType to solve that, but why ?
type DBkeyType = string | number | symbol;
class InMemoryDatabase<T, K extends DBkeyType> implements Databse<T, K> {
  // private db: Record<string, string> = {};
  //NOTE here we need need to use type casting Record<K, T>???
  protected db: Record<K, T> = {} as Record<K, T>;
  get(id: K): T {
    return this.db[id];
  }
  set(id: K, value: T): void {
    this.db[id] = value;
  }
}

//now persistableMemoryDatabase get everything from inMemoryDatabse
//NOTE here we also implement to make it assitable
class PersistableMemoryDatabse<T, K extends DBkeyType>
  extends InMemoryDatabase<T, K>
  implements Persistable
{
  saveToString(): string {
    //BUG here we can not access DB
    //even though we already extends from inMemoryDatabse
    //so we have to change it from private to protected
    return JSON.stringify(this.db);
  }
  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState);
  }
}
console.log(PersistableMemoryDatabse);

// const myDB = new InMemoryDatabase();
// console.log(myDB);
// myDB.set('foo', 'bar');

// //here we overwritten the value of key foo
// //so in order to prevent this from happening
// // we need to go inside the Databse and change the memebr visibility
// //NOTE three different member settings
// //1. private only for
// //2. protect only descend can seen it
// //3. abstract anyone can see it
// // BUG myDB.db['foo'] = 'hi';

// console.log(myDB.get('foo'));

const persistenDb = new PersistableMemoryDatabse<number, string>();
console.log(persistenDb);
persistenDb.set('foo', 1);
console.log(persistenDb.get('foo'));
console.log(persistenDb.saveToString());
const save = persistenDb.saveToString();
// persistenDb.set('foo', 'db1-baz');
//provide geniric type for Class so that it can accept the type when create new object
persistenDb.set('foo', 3);
console.log(persistenDb.get('foo'));

const myDb2 = new PersistableMemoryDatabse<number, string>();
myDb2.restoreFromString(save);
console.log(myDb2.get('foo'));

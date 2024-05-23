interface Databse {
  get(id: string): string;
  set(id: string, value: string): void;
}

interface Persistable {
  //you can read or write your state from string ?
  saveToString(): string;
  restoreFromString(storedState: string): void;
}

class InMemoryDatabase implements Databse {
  // private db: Record<string, string> = {};
  protected db: Record<string, string> = {};
  get(id: string): string {
    return this.db[id];
  }
  set(id: string, value: string): void {
    this.db[id] = value;
  }
}

//now persistableMemoryDatabase get everything from inMemoryDatabse
//NOTE here we also implement to make it assitable
class PersistableMemoryDatabse extends InMemoryDatabase implements Persistable {
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

const persistenDb = new PersistableMemoryDatabse();
console.log(persistenDb);
persistenDb.set('foo', 'bar');
console.log(persistenDb.get('foo'));
console.log(persistenDb.saveToString());
const save = persistenDb.saveToString();
persistenDb.set('foo', 'db1-baz');
console.log(persistenDb.get('foo'));

const myDb2 = new PersistableMemoryDatabse();
myDb2.restoreFromString(save);
console.log(myDb2.get('foo'));

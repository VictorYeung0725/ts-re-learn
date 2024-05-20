//what if i need to add new property later on
// then i have to copy and pass it to to interface
//thus here we can use Partial

interface MyUser {
  name: string;
  id: string;
  email?: string;
}

interface MyUserOptionals {
  name?: string;
  id?: string;
  email?: string;
}

function merge(user: MyUser, overrides: MyUserOptionals): MyUser {
  return {
    ...user,
    ...overrides,
  };
}

console.log(
  merge(
    { name: 'jack', id: 'foo', email: 'test1@gmail.com' },
    { email: 'test2@gmail.com' }
  )
);

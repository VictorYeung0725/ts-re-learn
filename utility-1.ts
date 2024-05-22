//what if i need to add new property later on
// then i have to copy and pass it to to interface
//thus here we can use Partial

interface MyUser {
  name: string;
  id: string;
  email?: string;
  phone?: string;
}

type MyUserOptionals = Partial<MyUser>;
// interface MyUserOptionals {
//   name?: string;
//   id?: string;
//   email?: string;
// }

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

type RequireUser = Required<MyUser>;
type JustEmailAndName = Pick<MyUser, 'email' | 'name'>;

// const mapById = (user: MyUser[]): Record<string, MyUser> => {
//   return user.reduce((a, v) => {
//     return {
//       ...a,
//       [v.id]: v,
//     };
//   }, {});
// };

type UserWithoutId = Omit<MyUser, 'id'>;

const mapById = (user: MyUser[]): Record<MyUser['id'], UserWithoutId> => {
  return user.reduce((a, v) => {
    const { id, ...others } = v;
    return {
      ...a,
      [id]: others,
    };
  }, {});
};

console.log(
  mapById([
    {
      id: 'fo',
      name: 'Mr. Fo',
    },
    {
      id: 'baz',
      name: 'Mr.Baz',
    },
  ])
);

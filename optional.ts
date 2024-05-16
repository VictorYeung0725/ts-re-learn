//5

//NOTE Optional parameter
function printIngredient(quantity: string, ingredient: string, extra?: string) {
  console.log(`${quantity} ${ingredient} ${extra ? `${extra}` : ''}`);
}
printIngredient('IC', 'four');
printIngredient('IC', 'four', 'something mroe');

//NOTE Optional fields
interface User {
  id: string;
  info?: { email?: string };
}

function getEmail(user: User): string {
  if (user.info) {
    return user.info.email;
  }
  return '';
}

//NOTE this one improtant to learn
function getEmailEasy(user: User): string {
  return user?.info?.email ?? '';
}

function addWithCallback(x: number, y: number, callback?: () => void) {
  console.log(x, y);

  //NOTE what happen if callback is optional?
  // callback();
  // if (callback) {}
  callback?.();
}

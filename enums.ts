//Enumarations
//Why we need to use this or when need to use it
// const beforeLoad = 'beforeLoad';
// const loading = 'loading';
// const loaded = 'loaded';

//NOTE
enum loadingState {
  beforeLoad = 'beforeLoad',
  loading = 'loading',
  loaded = 'loaded',
}
//NOTE a better way for debug
const englishLoadingState = {
  [loadingState.beforeLoad]: 'Before Load',
};

const isLoading = (state: loadingState) => state === loadingState.loading;
//here complaint, and check the type must between above three type
console.log(isLoading('dogs'));

//What is literal type

function rollDice(dict: number): number {
  let pip = 0;
  for (let i = 0; i < dict; i++) {
    pip += Math.floor(Math.random() * 5) + 1;
  }
  return pip;
}

/* 4. Parametr qismində { name: 'Yeməyin adı', source: 'plant, meat or dairy' } 
formatında yeməklər massivini alan və onların hamısının vegetarian olub-olmadığını müəyyən edən 
isTheDinnerVegan() funksiyasını yazmaq.

Nümunə:
const meal = [
  { name: 'arugula', source: 'plant' },
  { name: 'tomatoes', source: 'plant' },
  { name: 'lemon', source: 'plant' },
  { name: 'olive oil', source: 'plant' },
];
const dinner = [
  { name: 'hamburger', source: 'meat' },
  { name: 'cheese', source: 'dairy' },
  { name: 'ketchup', source: 'plant' },
  { name: 'bun', source: 'plant' }
];
console.log(isTheDinnerVegan(meal));
console.log(isTheDinnerVegan(dinner));

Nəticə:
true
false
 */
console.clear()
const meal = [
    { name: 'arugula', source: 'plant' },
    { name: 'tomatoes', source: 'plant' },
    { name: 'lemon', source: 'plant' },
    { name: 'olive oil', source: 'plant' },
];
const dinner = [
    { name: 'hamburger', source: 'meat' },
    { name: 'cheese', source: 'dairy' },
    { name: 'ketchup', source: 'plant' },
    { name: 'bun', source: 'plant' }
];
function isTheDinnerVegan(dinner){
    if ((dinner.find(element =>element.source === 'meat'))||(dinner.find(element => element.source == 'diary')) ){
        return false
    }else{
        return true;
    }
}

console.log(isTheDinnerVegan(meal));
console.log(isTheDinnerVegan(dinner));
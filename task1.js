/* 1. Massivi çevirin. Parametr qismində massiv alan və əks ardıcıllıqla yazılmış həmin 
elementlərdən ibarət massivi qaytaran reverseArray() funksiyasını yazın.
Nümunə:
const sentence = [“sense.“, “make”, “all”, “will”, “This”];
console.log(reverseArray(sentence)); 
Nəticə:
[‘This’, ‘will’, ‘all’, ‘make’, ‘sense.’];
*/

console.clear()
const sentence = ['sense.', 'make', 'all', 'will', 'This'];
console.log(sentence);

function reverseArray(array){
    return array.reverse();
}

console.log(reverseArray(sentence));

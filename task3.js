/* 3. Parametrlər qismində 2 massiv qəbul edən və eyni qiymətlər çıxaran justCoolStuff() funksiyasını yazmaq.
Nümunə:
const coolStuff = [
  'gameboys',
  'skateboards',
  'backwards hats',
  'my room',
  'temporary tattoos'
];
const myStuff = [
  'sweaters',
  'skateboards',
  'family-night',
  'my room',
];
console.log(justCoolStuff(myStuff, coolStuff));

Nəticə:
['skateboards', 'my room']
 */
const coolStuff = [
    'gameboys',
    'skateboards',
    'backwards hats',
    'my room',
    'temporary tattoos'
  ];
  const myStuff = [
    'sweaters',
    'skateboards',
    'family-night',
    'my room',
  ];
  function justCoolStuff(arr1,arr2){
    newArr=[];
    arr1.forEach((element1)=>arr2.forEach((element2)=>{
        if(element1===element2){
            newArr.push(element1);
        }
    }))
    return newArr;
  }
  console.log(justCoolStuff(myStuff,coolStuff));
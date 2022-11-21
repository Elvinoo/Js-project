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
    newarr=[];
    len=0;
    if(arr1.length>arr2.length){
        len=arr2.length;
    }else{
        len=arr1.length
    }
   for (let i=0;i<len;i++){
    if(arr1[i]==arr2[i]){
        newarr.push(arr1[i]);
    }
   }
   return newarr
  }
  console.log(justCoolStuff(myStuff,coolStuff))
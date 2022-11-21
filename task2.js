/* 2. Yadplanetliləri salamlayın. Sətirlər massivini qəbul edən və konsola hər yadplanetli üçün salamlama çıxarmaq 
üçün dövrdən istifadə edən greetAliens() funksiyasını yazın. 
Salamlama belə bir formatda olmalıdır: "Oh powerful [name], we humans offer our unconditional surrender!"
Nümunə:
const aliens = ['Blorgous', 'Glamyx', 'Wegord', 'SpaceKing'];
greetAliens(aliens);

Nəticə:
Oh powerful Blorgous, we humans offer our unconditional surrender!
Oh powerful Glamyx, we humans offer our unconditional surrender!
Oh powerful Wegord, we humans offer our unconditional surrender!
Oh powerful SpaceKing, we humans offer our unconditional surrender! */
console.clear();
const aliens = ['Blorgous', 'Glamyx', 'Wegord', 'SpaceKing'];
greetAliens(aliens);
function greetAliens(array){
    array.forEach(element=>{
        console.log(`Oh powerful ${element}, we humans offer our unconditional surrender!`)
    })
}
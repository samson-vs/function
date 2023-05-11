// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function square(a, b) {
    let res = a*b;
    if (a<b){
        // document.write(res);
        console.log(res);
    } else if (a>b){
        // document.write(res);
        console.log(res);
    };
    return;
};

square(6,7);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function squareCircle(r) {
    let squ = Math.PI*Math.pow(r,2);
    // document.write(squ);
    console.log(squ);
    return;
} ;
squareCircle(5);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
   function squa(h,r) {
      let res = 2*Math.PI*h*r;
       console.log(res);
       return;
   };
   squa(3,5);
// - створити функцію яка приймає масив та виводить кожен його елемент

function iter(arr){
    for (const arrElements of arr){
        console.log(arrElements);
    };
};
let users = [
    {name:"jonh" ,age:30},
    {name:"peter", age: 31},
    {name:"matt" ,age: 29},
    {name:"henry" ,age: 35},
]
iter(users);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragraf(textContent, tag) {
    document.write(`<${tag}> ${textContent} </${tag}>`);
}
paragraf('lorem text', 'p')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function list(textLi){
    document.write('<ul>')
      document.write(`<li> ${textLi}</li>`);
      document.write(`<li> ${textLi}</li>`);
      document.write(`<li> ${textLi}</li>`);
    document.write('</ul>')
}
list('lorem text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function listSec(textLi, tag){
//     document.write('<ul>')
//     document.write(`<${tag}> ${textLi} </${tag}>`);
//     document.write(`<${tag}> ${textLi} </${tag}>`);
//     document.write(`<${tag}> ${textLi} </${tag}>`);
//     document.write('</ul>')
//     for (let x of tag) {
//
//         for (let i = 0; i <tag.length; i+x ) {
//             console.log()
//         }
//     }
//
// }
// listSec('lorem text' ,'li');

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function add(arr,...array) {
    for (const item of array) {
        if (typeof item === "number"){
            arr.push(item);
        }
       else if ( typeof item === "boolean"){
            arr.push(item);}
       else if ( typeof item === "string"){
            arr.push(item);}
    }
    return arr;
}
let x = add([],12,'asd',true);
// console.log(x)
    document.write('<ul>')
    document.write(`<li> ${x} </li>`);
    document.write(`<li> ${x} </li>`);
    document.write(`<li> ${x} </li>`);
    document.write('</ul>')



// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let usersObj =[
    {id: 1, name: 'vova', age: 29 },
    {id: 3, name: 'masha', age: 29 },
    {id: 4, name: 'ihor', age: 29 },
    {id: 5, name: 'den', age: 29 },
    {id: 6, name: 'viktor', age: 29 },
]
    function printArr(arr) {
        for (const element of arr) {
            document.write(`<div> ${element.id} </div>`)
            document.write(`<div> ${element.name} </div>`)
            document.write(`<div> ${element.age} </div>`)
        }
    }
    printArr(usersObj)
// - створити функцію яка повертає найменьше число з масиву
let numbers = [-1 , 0 , 4, 7, 10]
let minimum = numbers[0];
for (const item of numbers) {
    if(item < minimum) {
        minimum = item;
    }
}
console.log(minimum);
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13



function suma(arr) {
    let sum = 0
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];

    }
    console.log(sum)
}

suma([1,2,10])

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
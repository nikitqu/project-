'use strict';

//                   Типы данных

// let number = 4;

// console.log(4/0);  // infinity
// console.log(-4/0); // -infinity
// console.log('string' * 9); //naN

// const person = 'Alex';

// const bool = true; 

// console.log(something); // null-когда не существует

// let und;
// console.log(und); // undefined - пусто

// объект -коллекция данных 
 
// const obj = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };

// console.log(obj.name); // вызываем
// console.log(obj["age"]);

// let arr = ['plum', 'orange', 5];
// console.log(arr[1]);

// const arr = ['a', 'b', 'c'];
// const arrObj = {
//     a: 'a',
//     1: 'b',
//     2: 'c'
// };

// console.log(arr[0]);
// console.log(arrObj[1]);

// arrObj.b = '1234';

// console.log(arrObj['b']);

// const obj = {
//     Anna: 500,
//     'Alice': 800
// };

// const b = "b";

// obj[b] = 'Nick';

// obj['Jenny'] = 1500;

// console.log(obj['b']);
// console.log(obj.Jenny);


//------------------------- 19. Практика, ч.1. Начинаем создавать приложение

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personMovieDB = {
//     count: numberOfFilms,
//     movie: {},
//     actors: {},
//     genres: [],
//     private: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его', ''),   
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его', '');

//       personMovieDB.movie[a] = b;
//       personMovieDB.movie[c] = d;

//      console.log(personMovieDB); 

//  ----------------------------------------------УСЛОВИЯ 

// if (4 == 9 ){
//     console.log('OK');
// }else {
//     console.log('Error');
// }

// const num = 160;

// if(num < 49 ){
//     console.log('Мало');
// } else if(num > 100){
//     console.log('Много');
// } else{
//     console.log('OK!');
// }

// const hamburger = 5;
// const fries = 4;

// if (hamburger && fries) {
//     console.log('Я Сыт!');
// } 

// console.log(hamburger && fries);  // true or false
// console.log( NaN || 2 || undefined );  // 2
// console.log( NaN && 2 && undefined ); // NaN
// console.log( 1 && 2 && 3 ); // 3 
// console.log( !1 && 2 || !3 ); // false 
// console.log( 25 || null && !3 ); // 25
// console.log( NaN || null || !3 || undefined || 5); // 5
// console.log( NaN || null && !3 && undefined || 5); // 5
// console.log( 5 === 5 && 3 > 1 || 5); // true

//  -----------------------------------Циклы-----------------------------------


// for (начало; условие; шаг) {
//     // ... тело цикла ...
//   }

// let num = 50;

// for (let i = 1; i < 8; i++){
// console.log(num);
// num++;
// }

//-------------------------------- (д) Цикл в цикле и метки


// for (let i = 0; i < 3; i++){
//     console.log(i);
//     for (let j = 0; j < 3; j++){
//         console.log(j);
//     }
// }

// *
// **
// ***
// ****
// *****
// ******

// let result = '';
// let lenght = 7;

// for(let i = 1; i < lenght; i++){
//     for(let j = 0; j < i; j++){
//         result += '*';
//     }
    
//     result += '\n'; //перенос на след. строку
// }

// console.log(result);


// // for(let i = 5; i <11; i++){
// //     console.log(i);
// // }


// for (let i = 20; i >= 10; i--) {
//     if (i === 13) break;
//     console.log(i)
// }

// for (let i = 2; i <11; i++){

//     console.log(i);
// } 


// const arr = [];
//     for(let i =5; i<11;i++){
//         arr[0] = i;
//     }

// -------------------------------24. Практика, ч2. Применяем условия и циклы

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    private: false
};


for(let i = 0; i<2; i++){

    const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его', '');

    if(a != null && b != null && a != '' && b != '' && a.length < 50){
        personMovieDB.movie[a] = b;
        console.log('Done!');
    } else {
        console.log('Error');
        i--;

    }

}

if (personMovieDB.count <10){
    console.log('Просмотрено мало фильмов');
} else if (personMovieDB.count >= 10 && personMovieDB.count < 30){
    console.log('Вы классический зритель');
}else if(personMovieDB.count >= 30){
    console.log('Вы киноман');
} else{
    console.log('Произошла ошибка');
}

     console.log(personMovieDB); 














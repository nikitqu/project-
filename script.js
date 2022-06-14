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


const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt('Один из последних просотренных фильмов?', '');
const b = prompt('На сколько оцените его', '');





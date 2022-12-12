// "use strict";

/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// console.log("count is ", personalMovieDB.count);

// let lastFilmYouSee = prompt("Один из последних просмотренных фильмов?");
// let yourRaitingToThisFilm = +prompt("На сколько оцените его?");

// personalMovieDB.movies[lastFilmYouSee] = yourRaitingToThisFilm;

// console.log(personalMovieDB);

// let result = "";
// let lenght = 10;

// for (let i = 1; i < lenght; i++) {
//   for (let j = 0; j < i; j++) {
//     result += "|";
//   }
//   result += "\n";
// }

// console.log(result);

// // Место для первой задачи
// function firstTask() {
//   for (let i = 5; i <= 10; i++) {
//     console.log(i);
//   }
//   // Пишем решение вот тут
// }

// firstTask();

// // Место для второй задачи
// function secondTask() {
//   for (let i = 20; i >= 10; i--) {
//     if (i === 13) {
//       break;
//     }
//     console.log(i);
//   }
//   // Пишем решение вот тут
// }

// secondTask();

// // Место для третьей задачи
// function thirdTask() {
//   for (let i = 2; i <= 10; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
//   // Пишем решение вот тут
// }
// thirdTask();

// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//   if (i % 2 === 0) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

function fourTask() {
  let i = 2;
  while (i <= 16) {
    if (i % 2 === 0) {
      i++;
      continue;
    } else {
      console.log(i);
    }
    i++;
  }
}
fourTask();

function fifthTask() {
  const arrayOfNumbers = [];

  for (let i = 5; i < 11; i++) {
    arrayOfNumbers[i - 5] = i;
  }

  console.log(arrayOfNumbers);
  return arrayOfNumbers;
}

fifthTask();

"use strict"

const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  geners: [],
  privat: false
}

for (let i = 0; i < numberOfFilms; i++){
  const a = prompt('Один из последних просмотренный фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log("Done");
  } else {
    console.log("Error");
    i--;
  }   
}

if (personalMovieDB.count < 10) {
  console.log("You watch a little count of films");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("You perfect person, who watched more films. It is exelent, you classic veiver!");
} else if (personalMovieDB.count >= 30) {
  consol.log("You are film fan!");
} else {
  console.log("Find a error:(");
}

console.log(personalMovieDB)
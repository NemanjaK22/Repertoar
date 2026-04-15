import React from "react";
import Movie from "./Movie";
const movies = [
  {
    title: "Captain America - The First Avenger",
    hall: 2,
    price: 350
  },
  {
    title: "The Papillon",
    hall: 1,
    price: 300
  },
  {
    title: "The Lost City of Z",
    hall: 5,
    price: 350
  }
];

const today = new Date();

const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();

const formattedDate = `${day}.${month}.${year}`;

export default () => (
  <>
  <h1>Repertoar za danas ({formattedDate})</h1>
  {
    movies.map(movie =>(
        <Movie title ={movie.title} hall = {movie.hall} price ={movie.price}/>
    ))
  }
  </>
);

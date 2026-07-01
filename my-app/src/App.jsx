import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import About from "./pages/About";

import AppInfo from "./components/AppInfo";
import AuthorInfo from "./components/AuthorInfo";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const initialMovies = [
  {
    id: 1,
    title: "Captain America - The First Avenger",
    hall: 2,
    price: 350,
    poster:
      "https://m.media-amazon.com/images/I/51Xp+8qDCbL._AC_UF350,350_QL50_.jpg",
    likes:0,
    dislikes:0
  },

  {
    id:2,
    title: "The Papillon",
    hall: 1,
    price: 300,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjIxMTMyOTE2NF5BMl5BanBnXkFtZTgwMDYyN2Y1NTM@._V1_.jpg",
    likes:0,
    dislikes:0
  },

  {
    id:3,
    title: "The Lost City of Z",
    hall: 5,
    price: 350,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMzU2ODIyMWItMjU3Zi00ZmVhLWIyNDAtMWE5OWU2ZDEwMGFiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    likes:0,
    dislikes:0
  },

  {
    id:4,
    title: "Klaus",
    hall: 3,
    price: 400,
    poster:
      "https://m.media-amazon.com/images/I/71z8yj0j19L.jpg",
    likes:0,
    dislikes:0
  },

  {
    id:5,
    title: "Bullet Train",
    hall: 4,
    price: 450,
    poster:
      "https://m.media-amazon.com/images/I/71INz6LX8aL._AC_UF894,1000_QL80_.jpg",
    likes:0,
    dislikes:0
  }
];

function App() {

  const [movies, setMovies] = useState(initialMovies);
  const [selectedMovie,setSelectedMovie] = useState(null);

  const addMovie = (newMovie) => {

    setMovies((prevMovies) => [
      ...prevMovies,//pravi se novi niz
      newMovie
    ]);
  };

  const handleAction = (action, title) => {
    setMovies((prevMovies)=>
      prevMovies.map((movie)=>{
        if(movie.title !== title){
          return movie;
        }
      if(action === "Like"){
        return{
          ...movie,
          likes:movie.likes+1
        };
      }
      return{
        ...movie,
        dislikes:movie.dislikes + 1
      };
    })
  );
};
  const startEditMovie =(movie) => {
    setSelectedMovie(movie);
  }
  const updateMovie = (updatedMovie) => {
  setMovies((prevMovies) =>
    prevMovies.map((movie) =>
      movie.id === updatedMovie.id ? updatedMovie : movie
    )
  );

  setSelectedMovie(null);
};
  const today = new Date();

  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  const formattedDate = `${day}.${month}.${year}`;

  return (
    <BrowserRouter>

      <Header />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/movies"
          element={
            <Movies
              movies={movies}
              onAction={handleAction}
              onAddMovie={addMovie}
              onEditMovie={startEditMovie}
              selectedMovie={selectedMovie}
              onUpdateMovie={updateMovie}
            />
          }
        />

        <Route
          path="/about"
          element={<About />}
        >
          <Route path="app" element={<AppInfo />} />
          <Route path="author" element={<AuthorInfo />} />
        </Route>

      </Routes>

      <Footer date={formattedDate} />

    </BrowserRouter>
  );
}

export default App;
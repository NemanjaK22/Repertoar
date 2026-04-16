import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import About from "./pages/About";

import AppInfo from "./components/AppInfo";
import AuthorInfo from "./components/AuthorInfo";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const movies = [
  {
    title: "Captain America - The First Avenger",
    hall: 2,
    price: 350,
    poster: "https://m.media-amazon.com/images/I/51Xp+8qDCbL._AC_UF350,350_QL50_.jpg"
  },
  {
    title: "The Papillon",
    hall: 1,
    price: 300,
    poster: "https://m.media-amazon.com/images/M/MV5BMjIxMTMyOTE2NF5BMl5BanBnXkFtZTgwMDYyNzY1NTM@._V1_.jpg"
  },
  {
    title: "The Lost City of Z",
    hall: 5,
    price: 350,
    poster: "https://m.media-amazon.com/images/M/MV5BZmU2ODIyMWItMjU3Zi00ZmVhLWIyNDAtMWE5OWU2ZDExMGFiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    title: "Klaus",
    hall: 3,
    poster: "https://m.media-amazon.com/images/I/7128yjOjl9L.jpg"
  },
  {
    title: "Bullet Train",
    poster: "https://m.media-amazon.com/images/I/71INz6LX8aL._AC_UF894,1000_QL80_.jpg"
  }
];

const today = new Date();

const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();

const formattedDate = `${day}.${month}.${year}`;

 const handleAction = (type, title) => {
    alert(`Dodelili ste "${type}" za film "${title}"!`);
  };
export default () => (
   <BrowserRouter>
      <Header />

      <h1>Repertoar za danas {formattedDate}</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies movies={movies} onAction={handleAction} />} />
        <Route path="/about" element={<About /> }>
          <Route path="app" element={<AppInfo />} />
          <Route path="author" element={<AuthorInfo />} />
        </Route>

      </Routes>

      <Footer />
    </BrowserRouter>
);

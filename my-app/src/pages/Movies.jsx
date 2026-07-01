import React from "react";
import Movie from "../components/Movie"; 
import MovieForm from "../components/MovieForm";

const Movies = ({ movies, onAction, onAddMovie, onEditMovie, selectedMovie, onUpdateMovie }) => {
  return (
    <div>
      <h2>Repertoar filmova</h2>

      <MovieForm 
        onAddMovie={onAddMovie}
        selectedMovie={selectedMovie}
        onUpdateMovie={onUpdateMovie}
     /> //prikaz forme

      {movies.map((movie, index) => (
                <Movie
                  key={movie.id}
                  movie={movie}
                  title={movie.title}
                  hall={movie.hall || "Film jos uvek nije u ponudi"}
                  price={movie.price || "300"}
                  poster={movie.posterUrl || movie.poster}
                  onAction={onAction}
                  likes={movie.likes}
                  dislikes={movie.dislikes}
                  onEditMovie={onEditMovie}
                />
        ))} //prikaz svakog filma
    </div>
  );
};

export default Movies;
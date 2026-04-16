import React from "react";
import Movie from "../components/Movie"; 

const Movies = ({ movies, onAction }) => {
  return (
    <div>
      <h2>Repertoar filmova</h2>

      {movies.map((movie, index) => (
                <Movie
                  key={index}
                  title={movie.title}
                  hall={movie.hall || "Film jos uvek nije u ponudi"}
                  price={movie.price || "300"}
                  poster={movie.poster}
                  onAction={onAction}
                />
        ))}
    </div>
  );
};

export default Movies;
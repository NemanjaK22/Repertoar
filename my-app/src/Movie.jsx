import React from "react";

const Movie = (props) => {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "10px"
      }}
    >
      <img
        src={props.poster}
        style={{ width: "100px", height: "150px", objectFit: "cover" }}
      />
      <div className="movie">
        {props.title}, sala: {props.hall}, cena: {props.price} din
      </div>

      <button onClick={() => props.onAction("Like", props.title)}>
        Like
      </button>

      <button onClick={() => props.onAction("Dislike", props.title)}>
        Dislike
      </button>
    </div>
  );
};

export default Movie;
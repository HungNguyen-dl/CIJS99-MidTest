import React from "react";

const MovieCard = (props) => {
    const {movies,handleSelectMovie} = props;
    const {image, movieName, episode, id} = movies;
    const handleClickMovie =  () => {
      handleSelectMovie(id);
    }
  return (
    <div onClick={handleClickMovie}  className="card" style={{ width: "13rem" ,height:"24rem", cursor: "pointer"}}>
      <img src={image} className="card-img-top" alt={movieName} />
      <div className="card-body text-center">
        <h6 className="card-title">{movieName}</h6>
        <p className="card-text">
          Episode {episode}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;

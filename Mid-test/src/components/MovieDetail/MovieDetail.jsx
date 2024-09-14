import React from "react";
import "./MovieDetail.css";

const MovieDetail = (props) => {
  const {selectedMovie = {}} = props;
  if (!selectedMovie) {
    return (
      <div className="pt-5">
        <p>Chọn một bộ phim mà bạn yêu thích</p>
      </div>
    )
  }
  const {imageCarousel, movieName, description} = selectedMovie;

  return (
    <div className="pt-5 carousel" id="carouselExample">
      <div className="movie-detail carousel-inner">
        <img className="d-block w-100" src={imageCarousel} alt={movieName} />
        <div className="movie-infomation">
          <h1>{movieName}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;

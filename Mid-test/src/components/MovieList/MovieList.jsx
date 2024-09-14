import React from 'react'
import MovieCard from '../MovieCard/MovieCard'

const MovieList = (props) => {
  const {movies = [],handleSelectMovie} = props;
  const listMovies = movies && movies.map((movies) => <MovieCard movies={movies} key={movies.id} handleSelectMovie={handleSelectMovie}/>);

  return (
    <div className='d-flex align-items-center justify-content-center gap-4'>
      {listMovies}
    </div>
  )
}

export default MovieList
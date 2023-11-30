import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as client from './client';

function Details() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    const getMovie = async () => {
        const movie = await client.findMovieById(movieId);
        setMovie(movie);
    }

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div>
           {movie && (
               <>
                   <h1>{movie.Title} ({movie.Year})</h1>
                   <img src={movie.Poster} alt={movie.Title} />
                   <h3>Overview</h3>
                   <p><strong>Genre:</strong> {movie.Genre}</p>
                   <p><strong>Director:</strong> {movie.Director}</p>
                   <p><strong>Writer:</strong> {movie.Writer}</p>
                   <p><strong>Actors:</strong> {movie.Actors}</p>
                   <p><strong>Plot:</strong> {movie.Plot}</p>
                   <p><strong>Language:</strong> {movie.Language}</p>
                   <p><strong>Country:</strong> {movie.Country}</p>
                   <p><strong>Awards:</strong> {movie.Awards}</p>
                   <p><strong>Rating:</strong> {movie.imdbRating}</p>
                   <p><strong>Votes:</strong> {movie.imdbVotes}</p>
                   <p><strong>Box Office:</strong> {movie.BoxOffice}</p>
                   <p><strong>Runtime:</strong> {movie.Runtime}</p>
                   <div>
                       <h3>Ratings</h3>
                       {movie.Ratings.map((rating, index) => (
                           <p key={index}><strong>{rating.Source}:</strong> {rating.Value}</p>
                       ))}
                   </div>
               </>
           )}
        </div>
    );
}

export default Details;
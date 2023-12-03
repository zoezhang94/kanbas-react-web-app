import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as client from './client';
import * as userClient from './users/client';
import * as likesClient from './likes/client';

function Details() {
    const [currentUser, setCurrentUser] = useState(null);
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [likes, setLikes] = useState([]);

    const fetchUser = async () => {
        try {
            const user = await userClient.account();
            setCurrentUser(user);
        } catch (error) {
            setCurrentUser(null);
        }
    }

    const getMovie = async () => {
        const movie = await client.findMovieById(movieId);
        setMovie(movie);
    }

    const currentUserlikeMovie = async () => {
        const _likes = await likesClient.createUserLikesMovie
            (currentUser._id, movieId);
        setLikes([...likes, _likes])
    }

    const fetchLikes = async () => {
        const likes = await likesClient.findUsersThatLikeMovie(movieId);
        setLikes(likes);
    }

    useEffect(() => {
        getMovie();
        fetchUser();
        fetchLikes();
    }, []);

    return (
        <div>
            {movie && (
                <div>
                    {currentUser && (
                        <button className='btn btn-danger float-end'
                            onClick={currentUserlikeMovie}>
                            Like
                        </button>)
                    }
                    <h1>{movie.Title} ({movie.Year})</h1>
                    <img src={movie.Poster} alt={movie.Title} />

                    <h2>likes</h2>
                    <ul className="list-group">
                        {likes.map((like, index) => (
                            <li key={index} className="list-group-item">
                                <Link to={`/project/users/${like.user._id}`}>
                                    {like.user.username}
                                </Link>
                            </li>
                        ))}
                    </ul>
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
                </div>
            )}
        </div>
    );
}

export default Details;
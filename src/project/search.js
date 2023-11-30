import React, { useEffect, useState } from 'react';
import * as client from './client';
import { Link,useParams,useNavigate } from 'react-router-dom';

function Search() {
    const { searchTerm } = useParams();
    const [search, setSearch] = useState(searchTerm);
    const [results, setResults] = useState(null);
    const Navigate = useNavigate();

    const searchMovies = async (searchTerm) => {
        const results = await client.findMoviesByTitle(searchTerm);
        setResults(results);
        setSearch(searchTerm);
    };

    useEffect(() => {
        if (searchTerm) {
            searchMovies(searchTerm);
        }
    }   , [searchTerm]);


    return (
        <div>
            <h1>Search</h1>
            <button onClick={() => Navigate(`/project/search/${search}`)}
                className="btn btn-primary float-end">Search</button>
            <input type="text"
                className='form-control w-75'
                placeholder="Search..."
                value={search}
                onChange={e => setSearch(e.target.value)} />
            <ul className="list-group">
                {
                    results && results.map((movie, index) => {
                        return (
                            <li key={index} className="list-group-item">
                                <Link to={`/project/details/${movie.imdbID}`}>
                                    <h5>{movie.Title}</h5>
                                    {movie.Poster && <img src={movie.Poster} alt={movie.Title}
                                        style={{ maxWidth: '150px' }} />}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Search;
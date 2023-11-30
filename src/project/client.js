import axios from "axios";

export const OMDB_API = 'http://www.omdbapi.com/?apikey=';
export const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

export const findMoviesByTitle = async (search) => {
    const response = await axios.get(`${OMDB_API}${API_KEY}&s=${search}`);
    return response.data.Search;
}

export const findMovieById = async (id) => {
    const response = await axios.get(`${OMDB_API}${API_KEY}&i=${id}`);
    return response.data;
}
import config from './config.json';

const HTTP_POST = 'POST';
const HTTP_PATCH = 'PATCH';
const HTTP_DELETE = 'DELETE';
const MOVIES_URL = config.srApi.host + 'v1/movies/';
const HEADERS = {
    'Content-Type': 'application/json'
};

const SrApi = {
    getMovies() {
        return fetch(MOVIES_URL)
            .then(response => response.json())
            .catch(error => console.error(error));
    },

    getMovie(id) {
        return fetch(MOVIES_URL + id)
            .then(response => response.json())
            .catch(error => console.error(error));
    },

    addMovie(movieData) {
        return fetch(MOVIES_URL, {
            method: HTTP_POST,
            headers: HEADERS,
            body: JSON.stringify(movieData)
        }).then(response => response.json())
            .catch(error => console.error(error));
    },

    updateMovie(id, movieData) {
        return fetch(MOVIES_URL + id, {
            method: HTTP_PATCH,
            headers: HEADERS,
            body: JSON.stringify(movieData)
        }).then(response => response.json())
            .catch(error => console.error(error));
    },

    deleteMovie(id) {
        return fetch(MOVIES_URL + id, {
            method: HTTP_DELETE,
            headers: HEADERS
        }).then(response => response.json())
            .catch(error => console.error(error));
    }
}

export default SrApi;

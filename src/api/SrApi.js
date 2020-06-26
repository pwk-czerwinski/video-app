import config from './config.json';

const MOVIES_URL = config.srApiHost + 'v1/movies/';

const SrApi = {
    addMovie(movieData) {
        return fetch(MOVIES_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movieData)
        }).then(response => response.json())
            .catch(error => console.error(error));
    },

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

    deleteMovie(id) {
        return fetch(MOVIES_URL, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id})
        }).then(response => response.json())
            .catch(error => console.error(error));
    },

    updateMovie(id, movieData) {
        return fetch(MOVIES_URL, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movieData)
        }).then(response => response.json())
            .catch(error => console.error(error));
    }
}

export default SrApi;

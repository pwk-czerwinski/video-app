import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/database';
import config from './config.json';

firebase.initializeApp(config.firebase);
firebase.analytics();

const database = firebase.database();

const Firebase = {
    getMovies() {
        return database.ref('videos')
            .once('value')
            .then(snapshot => {
                const videos = [];

                snapshot.forEach(childSnapshot => {
                    videos.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    });
                });

                return videos;
            })
            .catch(error => console.error(error));
    },

    getMovie(id) {
        return database.ref('videos/' + id)
            .once('value')
            .then(snapshot => {
                return {
                    id: snapshot.key,
                    ...snapshot.val()
                };
            })
            .catch(error => console.error(error));
    },

    addMovie(movieData) {
        return database.ref('videos')
            .push({
                title: movieData.title,
                description: movieData.description,
                video_url: movieData.video_url
            })
            .then(() => movieData)
            .catch(error => console.error(error));
    },

    updateMovie(id, movieData) {
        return database.ref('videos/' + id)
            .update({
                title: movieData.title,
                description: movieData.description,
                video_url: movieData.video_url
            })
            .then(() => this.getMovie(id))
            .catch(error => console.error(error));
    },

    deleteMovie(id) {
        return this.getMovie(id)
            .then(movie => database.ref('videos/' + id)
                .remove()
                .then(() => movie)
            )
            .catch(error => console.error(error));
    }
}

export default Firebase;

import React, { useState, useEffect } from 'react';
import Video from './Video';
import SrApi from '../api/SrApi';

function VideoList() {
    const [ movies, setMovies ] = useState([]);

    useEffect(() => {
        SrApi.getMovies().then(movies => {
            movies = movies.filter(movie => movie.video_url.includes('youtube') && movie.video_url.length > 20);
            setMovies(movies)
        });
    }, []);

    return(
        <div>
            { movies.map(movie =>
                <Video
                    key={movie.id }
                    title={movie.title}
                    description={movie.description}
                    url={movie.video_url.replace('watch?v=', 'embed/')}
                />)
            }
        </div>
    );
}

export default VideoList;

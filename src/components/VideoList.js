import React, { useState, useEffect } from 'react';
import Video from './Video';
import SrApi from '../api/SrApi';
import {NavLink} from 'react-router-dom';

function VideoList() {
    const [ movies, setMovies ] = useState([]);

    const deleteMovie = id => {
        SrApi.deleteMovie(id);
        SrApi.getMovies().then(movies => {
            movies = movies.filter(movie => movie.video_url.includes('youtube') && movie.video_url.length > 20);
            setMovies(movies)
        });
    }

    useEffect(() => {
        SrApi.getMovies().then(movies => {
            movies = movies.filter(movie => movie.video_url.includes('youtube') && movie.video_url.length > 20);
            setMovies(movies)
        });
    }, []);

    return(
        <div className="container">
            <div className="content">
                { movies.map(movie =>
                    <div key={movie.id }>
                        <Video
                            title={movie.title}
                            description={movie.description}
                            url={movie.video_url.replace('watch?v=', 'embed/')}
                            width={320}
                            height={240}
                        />
                        <NavLink to={`/video/${movie.id}`}><button>More Details</button></NavLink><br/>
                        <NavLink to={`/video/${movie.id}/update`}><button>Edit</button></NavLink><br/>
                        <button onClick={() => deleteMovie(movie.id)}>Delete</button>
                    </div>
                    )
                }
            </div>
        </div>
    );
}

export default VideoList;

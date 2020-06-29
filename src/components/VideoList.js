import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Video from './Video';
import Firebase from '../api/Firebase';

function VideoList() {
    const [ movies, setMovies ] = useState([]);

    const deleteMovie = id => {
        Firebase.deleteMovie(id).then(movie => Firebase.getMovies().then(fetchedMovies => {
            fetchedMovies = fetchedMovies.filter(movie => movie.video_url.includes('youtube') && movie.video_url.length > 20);
            setMovies(fetchedMovies);
            alert(movie.title + ' has been deleted');
        }));
    }

    useEffect(() => {
        Firebase.getMovies().then(movies => {
            setMovies(movies);
        });
    }, []);

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="new-video">
                        <NavLink to="/video/create"><button className="btn-add-new">Add New Video</button></NavLink>
                    </div>
                </div>
            </div>
            <div className="row video-list">
                { movies.map(movie =>
                    <div key={movie.id } className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 video-item">
                        <Video
                            title={movie.title}
                            description={movie.description}
                            url={movie.video_url.replace('watch?v=', 'embed/')}
                            width={320}
                            height={240}
                        />
                        <NavLink to={`/video/${movie.id}`}>
                            <button className="btn-more-details">More Details</button>
                        </NavLink>
                        <NavLink to={`/video/${movie.id}/update`}>
                            <button className="btn-edit">Edit</button>
                        </NavLink>
                        <button className="btn-delete" onClick={() => deleteMovie(movie.id)}>Delete</button>
                    </div>
                    )
                }
            </div>
        </div>
    );
}

export default VideoList;

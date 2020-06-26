import React, { useState, useEffect } from 'react';
import Video from "./Video";
import SrApi from "../api/SrApi";

function VideoList() {
    const [ movies, setMovies ] = useState([]);

    useEffect(() => {
        SrApi.getMovies().then(movies => setMovies(movies));
    }, []);

    return(
        <div>
            { movies.map(movie =>
                <Video
                    key={movie.id }
                    title={movie.title}
                    description={movie.description}
                    url={movie.video_url}
                />)
            }
        </div>
    );
}

export default VideoList;

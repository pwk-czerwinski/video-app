import React, {useEffect, useState} from 'react';
import Video from './Video';
import SrApi from '../api/SrApi';

const VideoDetails = (props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [videoUrl, setVideoUrl] = useState('');

    useEffect(() => {
        SrApi.getMovie(props.match.params.id).then(movie => {
            setTitle(movie.title);
            setDescription(movie.description);
            setVideoUrl(movie.video_url);
        });
    }, [props.match.params.id]);

    return (
        <div className="container">
            <Video
                title={title}
                description={description}
                url={videoUrl}
                width={960}
                height={720}
            />
        </div>
    );
}

export default VideoDetails;

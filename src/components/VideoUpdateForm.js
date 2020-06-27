import React, { useState, useEffect } from 'react';
import SrApi from '../api/SrApi';

const VideoUpdateForm = (props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [videoUrl, setVideoUrl] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const handleVideoUrlChange = (e) => {
        setVideoUrl(e.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (title.length < 3) {
            alert('Title too short. Title should contain minimum 2 characters.');
        } else if (description.length < 11) {
            alert('Description too short. Description should contain minimum 10 characters.');
        } else if (videoUrl.length < 21) {
            alert('Video URL too short. Video URL should contain minimum 20 characters.');
        } else {
            SrApi.updateMovie(props.match.params.id,{
                title,
                description,
                video_url: videoUrl
            });
        }
    }

    useEffect(() => {
        SrApi.getMovie(props.match.params.id).then(movie => {
            setTitle(movie.title);
            setDescription(movie.description);
            setVideoUrl(movie.video_url);
        });
    }, [props.match.params.id]);

    return (
        <div className="container">
            <form onSubmit={handleSubmit} autoComplete="off">
                <label htmlFor="title">Title</label><br />
                <input type="text" id="title" name="title" value={title} onChange={handleTitleChange} /><br />
                <label htmlFor="description">Description</label><br />
                <input type="text" id="description" name="description" value={description} onChange={handleDescriptionChange} /><br />
                <label htmlFor="video_url">Video URL</label><br />
                <input type="text" id="video_url" name="video_url" value={videoUrl} onChange={handleVideoUrlChange} /><br />
                <input type="submit" value="Update video" />
            </form>
        </div>
    );
}

export default VideoUpdateForm;

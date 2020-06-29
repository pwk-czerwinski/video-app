import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Firebase from '../api/Firebase';

const VideoCreateForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    const [addedNewMovie, setAddedNewMovie] = useState(false);

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
            Firebase.addMovie({
                title,
                description,
                video_url: videoUrl.includes('watch?v=') ? videoUrl.replace('watch?v=', 'embed/') : videoUrl
            }).then(movie => {
                setAddedNewMovie(true);
                alert(movie.title + ' has been added');
            });
        }
    }

    return (
        <div className="container">
            { addedNewMovie === true ? <Redirect to="/" /> : null }
                <form id="video-add-form" className="video-form" onSubmit={handleSubmit} autoComplete="off">
                    <div className="row">
                        <div className="col-12">
                            <label htmlFor="title">Title</label><br />
                            <input type="text" id="title" name="title" className="video-form-input" value={title} onChange={handleTitleChange} /><br />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <label htmlFor="description">Description</label><br />
                            <input type="text" id="description" name="description" className="video-form-input" value={description} onChange={handleDescriptionChange} /><br />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <label htmlFor="video_url">Video URL</label><br />
                            <input type="text" id="video_url" name="video_url" className="video-form-input" value={videoUrl} onChange={handleVideoUrlChange} /><br />
                        </div>
                    </div>
                </form>
                <div className="row">
                    <div className="col-12">
                        <button type="submit" form="video-add-form" className="btn-add-new video-form-input">Add video</button>
                    </div>
                </div>
        </div>
    );
}

export default VideoCreateForm;

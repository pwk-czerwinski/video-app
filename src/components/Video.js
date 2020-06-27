import React from 'react';

function Video({ title, description, url }) {
    return(
        <div className="item">
            <iframe
                width="320"
                height="240"
                title={title}
                src={url}
                allowFullScreen={true}
            />
            <h3>{ title }</h3>
            <p>{ description }</p>
        </div>
    );
}

export default Video;

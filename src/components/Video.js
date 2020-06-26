import React from 'react';

function Video({ title, description, url }) {
    return(
        <div>
            <h3>{ title }</h3>
            <p>{ description }</p>
            <iframe
                width="320"
                height="240"
                title={title}
                src={url}
                allowFullScreen={true}
            />
        </div>
    );
}

export default Video;

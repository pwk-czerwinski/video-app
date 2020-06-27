import React from 'react';

function Video({ title, description, url, width, height }) {
    return(
        <>
            <iframe
                width={width}
                height={height}
                title={title}
                src={url}
                allowFullScreen={true}
            />
            <h3>{ title }</h3>
            <p>{ description }</p>
        </>
    );
}

export default Video;

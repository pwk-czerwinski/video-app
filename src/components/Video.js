import React from 'react';

function Video({ title, description, url }) {
    return(
        <div>
            <h3>{ title }</h3>
            <p>{ description }</p>
            <a href={ url }>Link</a>
        </div>
    );
}

export default Video;

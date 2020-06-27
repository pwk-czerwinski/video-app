import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container">
            Page Not Found - 404 code - <Link to="/">Go Home</Link>
        </div>
    )
}

export default NotFound;

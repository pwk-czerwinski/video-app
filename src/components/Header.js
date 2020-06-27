import React from 'react';

const Header = (props) => (
    // <div className="container-fluid">
        <div className="header">
            <h1 className="header__title">{props.title}</h1>
            <h2 className="header__subtitle">{props.subtitle}</h2>
        </div>
    // </div>
);

Header.defaultProps = {
    title: 'Videos',
    subtitle: 'Your favourite youtube videos'
};

export default Header;

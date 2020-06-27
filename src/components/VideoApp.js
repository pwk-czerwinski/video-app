import React from 'react';
import VideoList from './VideoList';
import Header from './Header';

function VideoApp() {
  return (
      <div>
          <Header />
          <div className="container">
            <VideoList />
          </div>
      </div>
  );
}

export default VideoApp;

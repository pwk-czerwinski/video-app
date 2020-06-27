import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import VideoList from '../components/VideoList';
import VideoDetails from '../components/VideoDetails';
import VideoCreateForm from '../components/VideoCreateForm';
import VideoUpdateForm from '../components/VideoUpdateForm';
import About from '../components/About';
import NotFound from '../components/NotFound';

const VideoAppRouter = () => (
    <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" component={VideoList} exact={true} />
                <Route path="/video/create" component={VideoCreateForm} />
                <Route path="/video/:id/update" component={VideoUpdateForm} />
                <Route path="/video/:id" component={VideoDetails} />
                <Route path="/about" component={About} />
                <Route component={NotFound} />
            </Switch>
    </BrowserRouter>
);

export default VideoAppRouter;

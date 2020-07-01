import React from 'react';
import { Route } from 'react-router-dom';
import Signup from './../Components/Signup/Signup';
import Post from './../Components/Post/Post';
import Leaderboards from './../Components/Leaderboards/Leaderboards';
import MyAchievements from './../Components/MyAchievements/MyAchievements';
import CreatePost from './../Components/CreatePost/CreatePost';
import Home from './../Components/Home/Home';
import Login from './../Components/Login/Login';

const Routes = () => (
  <div>
    <Route exact path="/" component={Login} />
    <Route path="/home" component={Home} />
    <Route path="/createpost" component={CreatePost} />
    <Route path="/achievements" component={MyAchievements} />
    <Route path="/leaderboards" component={Leaderboards} />
    <Route path="/post" component={Post} />
    <Route path="/signup" component={Signup} />
  </div>
);

export default Routes;

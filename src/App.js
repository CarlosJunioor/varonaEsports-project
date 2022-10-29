import React, {useState, useEffect} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AuthProvider } from './config/context';
import Home from './pages/Home';
import Reset from './pages/Reset';
import Profile from './pages/Profile';
import Admin from './pages/Admin';
import Teams from './pages/Teams';
import TeamInvite from './pages/TeamInvite';
import Events from './pages/Events';
import Event from './pages/Event';
import TeamDetails from './pages/TeamDetails';
import AdminEvents from './pages/admin/Events';
import AdminEvent from './pages/admin/Event';
import AdminEventCreate from './pages/admin/CreateEvent';
import AdminSeries from './pages/admin/Series';
import AdminUpdateSeries from './pages/admin/UpdateSeries';
import AdminCreateSeries from './pages/admin/CreateSeries';


import About from './pages/About';
import Contact from './pages/Contact';
import TeamLol from './pages/TeamLol';
import TeamVal from './pages/TeamVal';
import TeamWild from './pages/TeamWild';

function App() {
  
  return (
    <AuthProvider>
    <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/reset">
            <Reset />
          </Route>
          <Route path="/profile/:username">
            <Profile />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
          <Route exact path="/events/:game">
            <Events />
          </Route>
          <Route exact path='/teamlol'>
            <TeamLol />
            </Route>
            <Route exact path='/teamval'>
            <TeamVal />
            </Route>
            <Route exact path='/teamwild'>
            <TeamWild />
            </Route>
          <Route path="/e/:id">
            <Event />
          </Route>
          <Route exact path="/teams">
            <Teams />
          </Route>
          <Route path="/i/:id">
            <TeamInvite />
          </Route>
          <Route path="/teams/:id">
            <TeamDetails />
          </Route>
          <Route exact path="/admin/events">
            <AdminEvents />
          </Route>
          <Route path="/admin/event/:id">
            <AdminEvent />
          </Route>
          <Route exact path="/admin/events/create">
            <AdminEventCreate />
          </Route>
          <Route exact path="/admin/series">
            <AdminSeries />
          </Route>
          <Route exact path="/admin/series/create">
            <AdminCreateSeries />
          </Route>
          <Route path="/admin/series/:id">
            <AdminUpdateSeries />
          </Route>
          
        </Switch>
    </Router>
    </AuthProvider>
  );
}

export default App;

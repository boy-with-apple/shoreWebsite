import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import HomePage from './pages/Home';
import AboutPage from './pages/About';
import MenuPage from './pages/Menu';
import EventsPage from './pages/Events';
import EntertainmentPage from './pages/Entertainment';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';


import 'bootstrap/dist/css/bootstrap.min.css';


import MainNavigation from './components/Navigation/MainNavigation';
import Footer from './components/Footer/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <MainNavigation/>
          <main>
            <Switch>
              <Redirect from="/" to="/home" exact/>
              <Route path="/home" component={HomePage}/>
              <Route path="/about" component={AboutPage}/>
              <Route path="/menu" component={MenuPage}/>
              <Route path="/events" component={EventsPage}/>
              <Route path="/entertainment" component={EntertainmentPage}/>
              <Route path="/login" component={LoginPage}/>
              <Route path="/signup" component={SignupPage}/>
            </Switch>
          </main>
          <Footer/>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;

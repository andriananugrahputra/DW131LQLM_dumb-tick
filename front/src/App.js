import React from 'react';
import Categories from './components/categories'
import EventsToday from './components/eventsToday'
import Dropdown from './components/dropdown'
import LoginRegister from './components/loginregister'
import Login from './pages/login'
import Test from './test'
import AppBarHome from './components/appbar'
import Home from './pages/home'

import Footer from './components/footer'
import{BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div>
      <Switch>
        <Route path='/categories'>
          <Categories/>
        </Route>
        <Route path='/footer'>
          <Footer/>
        </Route>
        <Route path='/appbar'>
          <AppBarHome/>
        </Route>
        <Route path='/event_today'>
          <EventsToday/>
        </Route>
        <Route path='/test'>
          <Test/>
        </Route>
        <Route path='/dropdown'>
          <Dropdown/>
        </Route>
        <Route path='/logres'>
          <LoginRegister/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
      </div>
      
    </Router>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/header";
import Footer from './components/Footer/footer';

import DashBoard from './components/DashBoard/dashboard';

import Login from "./components/Login/login";


import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        {/* <Login></Login>
        <DashBoard></DashBoard> */}

        <Route exact path='/dashboard' component={DashBoard}></Route>
        <Route exact path="/" component={Login}></Route>
      </Router>

      <Footer></Footer>

    </div>
  );
}

export default App;


import './App.css';
import Navbar from './component/Navbar';
import News from './component/News';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import React, { Component } from 'react';

export default class App extends Component {

  render() {
  
    return (
      <div>
    
      <Router>
     
      <Navbar/>
      
      <Routes>
        <Route exact path="/home" key='cricket' element={<News category='cricket' pageSize={6}/>} />
        <Route exact path="/entertainment" key='bollywood' element={<News category='bollywood' pageSize={6}/>} />
        <Route exact path="/health" key='health' element={<News category='health' pageSize={6}/>} />
        <Route exact path="/science" key='politics' element={<News category='politics' pageSize={6}/>} />
        <Route exact path="/technology" key='technology' element={<News category='technology' pageSize={6}/>} />
  
      </Routes>
      
    
    </Router>

    </div>

    )
  }
}


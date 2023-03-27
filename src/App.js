import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
  const [mode, setMode] = useState('light');
 
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      // showAlert("Dark mode has been enabled", "success");
      // document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // showAlert("Light mode has been enabled", "success");
      // document.title = 'TextUtils - Light Mode';
    }
  }
    return (
      <div>
        <Router>
        <Navbar  mode={mode} toggleMode={toggleMode}/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
        <Switch>
        <Route exact path="/dailynews"><News mode={mode} setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/></Route> 
          <Route exact path="/home"><News mode={mode} setProgress={setProgress} apiKey={apiKey} key="home" pageSize={pageSize} country="in" category="general"/></Route> 
          <Route exact path="/"><News mode={mode} setProgress={setProgress} apiKey={apiKey} key="home" pageSize={pageSize} country="in" category="general"/></Route> 
          <Route exact path="/business"><News mode={mode} setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/></Route> 
          <Route exact path="/entertainment"><News mode={mode} setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/></Route> 
          <Route exact path="/general"><News mode={mode} setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/></Route> 
          <Route exact path="/health"><News mode={mode} setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/></Route> 
          <Route exact path="/science"><News mode={mode} setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/></Route> 
          <Route exact path="/sports"><News mode={mode} setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/></Route> 
          <Route exact path="/technology"><News mode={mode} setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/></Route> 
        </Switch>
        </Router>
      </div>
    )

}

export default App;
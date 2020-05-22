import React, { Component }  from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import Fdas from './components/Greet'
//import { Greet } from './components/Greet'
import Classcomp from './components/ClassComponent'
import LoginCompom from './components/login'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Classcomp />
      <Fdas /> */}
      <Router>
                    <Switch>
                    <Route exact path='/' component={LoginCompom} />
                    <Route exact path='s/' component={Fdas} />
                    
                        {/* <Route exact path='/' component={Login} />
                        <Route path='/dashboard' component={Dashboard} />
                        <Route path='/index' component={Index}/>
                        <Route path='/register' component={Register} />
                        <Route path='/add' component={AddPage} />
                        <Route path='/edit/' component={EditPage} />
                        <Route path='/fileupload/' component={FileUploadPage} />
                        <Route path='*' component={NotFound} /> */}
                    </Switch>
                </Router>
    </div>
  );
}

export default App;

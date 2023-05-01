import React, { Component } from 'react';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
 
import Home from './Home';
import Authenticated from './Authenticated';
import Stem from './Stem';
import Environment from './Environment';
import './app.sass';

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
            <Routes>
             <Route path="/" component={Stem} exact/>
             <Route path="/authenticated" component={Authenticated}/>
             <Route path="/environment" component={Environment}/>
             <Route path='/' element={<Home/>} />
            </Routes>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;
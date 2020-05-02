import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
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
            <Switch>
             <Route path="/" component={Stem} exact/>
             <Route path="/authenticated" component={Authenticated}/>
             <Route path="/environment" component={Environment}/>
             <Route path="/home" component={Home}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;
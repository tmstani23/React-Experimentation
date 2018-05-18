import React, { Component } from 'react';
import Home from './Home'
import About from './About'
import Topics from './Topics'
import {
  BrowserRouter,
  Route,
  Link,
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      //wrap in browser router component for routing
      //Assign paths to links
      //Assign routes to linked paths
      //Assign ui components within route component
        //to display ui component when that route is selected by user
      <BrowserRouter>
        <div className="App">
          <div> 
            
            <ul>
              <li><Link to ='/'>Home</Link></li>
              <li><Link to ='/about'>About</Link></li>
              <li><Link to ='/topics'>Topics</Link></li>
            </ul>
            
            <hr />
            {/* use exact path to avoid issues with path being displayed by 
            multiple components*/}
            <Route exact path = '/' component = {Home} />
            <Route path = '/about' component = {About} />
            <Route path = '/topics' component = {Topics} />
          
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

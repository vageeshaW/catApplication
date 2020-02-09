import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Create from "./components/create.component";
import List from "./components/list.component";

function App() {
  return (
    <Router>
    <div className="container">
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Cat App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Breeds</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Breed</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
      <Route path="/" exact component={List} />
      <Route path="/create" component={Create} />
    </div>
    </Router>
  );
}

export default App;

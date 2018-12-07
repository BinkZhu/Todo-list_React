import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import TodoApp from './TodoApp';
import About from './About';

const Index = () => <h2>Home</h2>;
//const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName="current-link" to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink activeClassName="current-link" to="/about/">About</NavLink>
          </li>
          <li>
            <NavLink activeClassName="current-link" to="/users/">Users</NavLink>
          </li>
          <li>
            <NavLink activeClassName="current-link" to="/todo/">TodoApp</NavLink>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Index} />
      <Route path="/about/" component={About} />
      <Route path="/users/" component={Users} />
      <Route path="/todo/" component={TodoApp} />
    </div>
  </Router>
);

export default AppRouter;
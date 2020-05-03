import React from "react";
import Navbar from "./components/navbar/navbar.component";
import Projects from "./components/projects/projects.component";
import About from "./components/about/about.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <main>
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/" component={About} />
        </main>
      </Switch>
    </Router>
  );
}

export default App;

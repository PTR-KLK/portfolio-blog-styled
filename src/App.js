import React from "react";
import Sidebar from "./components/sidebar/sidebar.component";
import Content from "./components/content/content.component";
import Article from './components/article/article.component';
import Projects from './components/projects/projects.component';
import About from './components/about/about.component';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
      <Content>
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/blog" component={Article} />
          <Route exact path="/" component={About} />
      </Content> 
      </Switch>
    </Router>
  );
}

export default App;

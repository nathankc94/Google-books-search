import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import SearchBook from "./pages/SearchBooks";
import SavedBook from "./pages/SavedBooks";
import NoMatch from "./pages/NoMatch";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={SearchBook} />
          <Route exact path="/saved" component={SavedBook} />
          <Route exact path="/saved/:id" component={SavedBook} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  ); 
}

export default App;

import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Projects from "./components/pages/Project";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Projects" exact component={Projects} />
          <Route path="/Contact" exact component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

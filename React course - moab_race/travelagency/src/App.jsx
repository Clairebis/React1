import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./components/Home";
import Tours from "./components/Tours";
import About from "./components/About";

function App() {
  return (
    <>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tours">Tours</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/tours" component={Tours} />
          <Route path="/about" component={About} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

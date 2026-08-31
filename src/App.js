import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import SignIn from './SignIn';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Footer />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Sign">
              <SignIn />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

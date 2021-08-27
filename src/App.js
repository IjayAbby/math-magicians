import './App.css';
import { Route, Switch } from 'react-router-dom';
import Calculator from './components/Calculator';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Quote from './pages/Quote';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/calculator">
          <div className="App">
            <Calculator />
          </div>
        </Route>

        <Route path="/quote">
          <Quote />
        </Route>
      </Switch>
    </>
  );
}

export default App;

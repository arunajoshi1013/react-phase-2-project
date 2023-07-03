//import logo from './logo.svg';
import './App.css';
import RecipeList from './RecipeList';
import RecipeDetails from './RecipeDetails';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <p>
            Let's go.
          </p>
          <RecipeDetails />
          <RecipeList />
      </div>
    </Router>
  );
}

export default App;

import './App.css';
import RecipeList from './RecipeList';
import RecipeDetails from './RecipeDetails';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>
        Aruna Joshi's collection of Indian recipes
      </h1>
      <BrowserRouter>
        <nav>
          <Link style={{ margin: 10 }} to="/new">
            Add a new Recipe
          </Link>
          <Link to="/">
            List of recipes
          </Link>
        </nav>
      </BrowserRouter>
    </div>
  );
}

export default App;

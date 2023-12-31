import './App.css';
import RecipeList from './RecipeList';
import RecipeDetails from './RecipeDetails';
import RecipeInput from './RecipeInput';
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
        <Routes>
        <Route exact path="/new" element={
              <RecipeInput/>
            }
          />
          <Route exact path="/:id" element={
              <RecipeDetails />
            }
          />
          <Route path="/" element={
            <RecipeList />
          }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
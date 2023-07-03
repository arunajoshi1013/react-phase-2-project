//import logo from './logo.svg';
import './App.css';
import RecipeList from './RecipeList';
import RecipeDetails from './RecipeDetails';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <h1>
            Indian Recipes
          </h1>
          <RecipeList />
          <Routes>
            <Route exact path="/:id" Component={RecipeDetails}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;

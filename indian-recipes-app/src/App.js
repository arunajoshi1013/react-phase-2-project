//import logo from './logo.svg';
import './App.css';
import RecipeList from './RecipeList';
import RecipeDetails from './RecipeDetails';

function App() {
  return (
    <div className="App">
        <p>
          Let's go.
        </p>
        <RecipeDetails />
        <RecipeList />
    </div>
  );
}

export default App;

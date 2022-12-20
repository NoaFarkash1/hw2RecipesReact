import './App.css';
import EHeader from './EHeader';
import FCRecipeCard from './Functional Components/FCRecipeCard';
import { images } from './Assets/images';
import CCMyKitchen from './Class Components/CCMyKitchen';

function App() {
  return (
    <div className="App">
      {EHeader}
      <CCMyKitchen/><br/>
    </div>
  );
}

export default App;

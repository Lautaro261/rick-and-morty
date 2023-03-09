import './App.css';
import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import { Rick } from './data.js'
import characters from './data.js';

function App() {
  return (
    <div className="App">
      <h1>Proyecto de Rick And Morty</h1>
      <Card
      name={Rick.name}
      species={Rick.species}
      gender={Rick.gender}
      image={Rick.image}
      onClose={()=>window.alert('Se cerro la card')}
      />

      <Cards
      characters={characters}/>


      
    </div>
  );
}

export default App;

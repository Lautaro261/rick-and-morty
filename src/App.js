import './App.css';
import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'
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

      <SearchBar onSearch={(characterId)=>{window.alert(characterId)}} />
      {/* Search  recibe una props con una funcion alert con el id del personaje */}


    </div>
  );
}

export default App;

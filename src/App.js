import style from './App.module.css'
import Cards from './components/Cards/Cards.jsx'
import SearchBar from './components/SearchBar/SearchBar.jsx'
import characters from './data.js';

function App() {
  return (
    <div className={style.App}>
      <h1>Proyecto de Rick And Morty</h1>

      <Cards
      characters={characters}/>

      <SearchBar onSearch={(characterId)=>{window.alert(characterId)}} />
      {/* Search  recibe una props con una funcion alert con el id del personaje */}


    </div>
  );
}

export default App;

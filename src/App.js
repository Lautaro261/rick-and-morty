import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import style from "./App.module.css";
import Cards from "./components/Cards/Cards.jsx";
import Navbar from "./components/Nav/Navbar.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";

/* import characters from './data.js'; */






function App() {


  const [characters, setCharacters] = useState([]);



  const onSearchBar = (character) => {
    console.log("SOY ONSEARCHBAR me estoy ejecutando");
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name && !characters.find((char) => char.id === data.id)) {
          console.log(data);
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };



  const onClose = (id) => {
    console.log("ONCLOSE me estoy ejecutando");
    setCharacters(characters.filter((char) => char.id !== id));
  };





  return (
    <div className={style.App}>


      <Navbar onSearchBar={onSearchBar} />
      <Routes>
        <Route path="/home" element={<Cards onClose={onClose} characters={characters}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/detail/:detailId" element={<Detail/>}/>
      </Routes>

      {/* <SearchBar onSearch={(characterId)=>{window.alert(characterId)}} /> */}
      {/* Search  recibe una props con una funcion alert con el id del personaje */}


    </div>
  );
}




export default App;

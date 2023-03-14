import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Detail(){

    const { detailId } = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);


    return(
        <div>
            {character.origin?(
                <div>
                    <p>{character.name}</p>
                    <p>{character.status}</p>
                    <p>{character.species}</p>
                    <p>{character.gender}</p>
                    <p>{character.origin.name}</p>
                  <img src={character.image} alt="img"/>
                </div>
            ):(
                <h3>Cargando...</h3>
            )}
            
        </div>
    )
}


/* 
    Name
    Status
    Specie
    Gender
    Origin
    Image */
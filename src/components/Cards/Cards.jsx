import Card from "../Card/Card.jsx";
// ESTE ES UN COMPONENTE CONTENEDER O SMART.          HAY LOGICA!!!

export default function Cards (props){
    const { characters } = props;
    // characters es un ARRAY [{},{},{}] con objetos adentros, con datos de cada personaje

    return(
        <div>
            <ul>
                {characters.map((personaje, index)=>{
                    return(
                        <Card
                        key={index}
                        id={personaje.id}
                        name={personaje.name}
                        species={personaje.species}
                        gender={personaje.gender}
                        image={personaje.image}
                        onClose={props.onClose}
                        />
                    )
                })}
            </ul>

        </div>
    )
}
export default function Card (props){
    return(
        <div>
            <hr/>
            <h2>SOY CARD</h2>
            <button onClick={props.onClose}>X</button>
            <p>{props.name}</p>
            <p>{props.species}</p>
            <p>{props.gender}</p>
            <img src={props.image} alt='imagen'/>
            <hr/>
        </div>
    )
}
import style from './Card.module.css'

export default function Card (props){


    return(
        <div className={style.divPrincipal}>
            <button className={style.botonCruz} onClick={()=> props.onClose(props.id)}>X</button>
            <p>{props.name}</p>
            <p>{props.species}</p>
            <p>{props.gender}</p>
            <p>{props.id}</p>
            <img src={props.image} alt='imagen'/>
        </div>
    )
}
import style from './Card.module.css';
import {Link} from "react-router-dom";

export default function Card (props){


    return(
        <div className={style.divPrincipal}>
            <button className={style.botonCruz} onClick={()=> props.onClose(props.id)}>X</button>
            <Link to={`/detail/${props.id}`}> 
              <p>{props.name}</p>
            </Link>
            <p>{props.species}</p>
            <p>{props.gender}</p>
            <p>{props.id}</p>
            <img src={props.image} alt='imagen'/>
        </div>
    )
}
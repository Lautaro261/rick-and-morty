import { useState } from "react"

export default function SearchBar (props){
   let [id, setId]=useState('')

    const handlerChange =(event)=>{
        setId(id = event.target.value)
    }

    // handlerChange se esta ejecutando (OK)

    return(
        <div>
            <input type='search' onChange={handlerChange} />
            <button onClick={()=>props.onSearch(id)}>Buscar</button>
        </div>
    )
}
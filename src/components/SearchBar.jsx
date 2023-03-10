export default function SearchBar (props){
    return(
        <div>
            <h1>Soy Search Bar</h1>
            <input type='search'/>
            <button onClick={()=>{props.onSearch(5)}}>Buscar</button>
        </div>
    )
}
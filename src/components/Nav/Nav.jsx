import SearchBar from "../SearchBar/SearchBar.jsx";
import style from "./Nav.module.css"

export default function Navbar (props){
    return(
        <div className={style.navbar}>
            <SearchBar  onSearch={props.onSearchBar}/>
        </div>
    )
}
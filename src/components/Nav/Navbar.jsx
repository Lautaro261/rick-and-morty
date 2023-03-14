import SearchBar from "../SearchBar/SearchBar.jsx";
import style from "./Navbar.module.css";
import {Link} from "react-router-dom";

export default function Navbar (props){
    return(
        <div className={style.navbar}>
            <SearchBar  onSearch={props.onSearchBar}/>
            <ul>
                <Link to="/home"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
                
            </ul>
        </div>
    )
}
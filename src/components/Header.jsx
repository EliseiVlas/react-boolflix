import { NavLink } from "react-router-dom";
import { useState } from 'react';

export default function Header({ setQuery }) {

 // stato del imput del piatto
 const [nuovoArticolo, setNuovoArticolo] = useState("");
 function handlenuovoArticolo(e) {
    setNuovoArticolo(e.target.value);
}
function handleSubmit(e) {
    e.preventDefault();
    setQuery(nuovoArticolo.trim()); 
  }
    return (
        <header>
            <div className="nav-link">
                <NavLink to={"/"}><h1>Bootflix</h1></NavLink>
                <NavLink to={"/film"}>Film</NavLink>
                <NavLink to={"/serie"}>Serie TV</NavLink>
            </div>
            <form id='form-search' onSubmit={handleSubmit}>
                {/* valore nome piatto */}
                <input
                    type="text"
                    name="title"
                    onChange={handlenuovoArticolo}
                    value={nuovoArticolo}
                    placeholder='Nome film/serie tv'
                />
                <button>Cerca</button>
            </form>
        </header>
    );
}
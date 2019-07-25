import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNav = (props) => {

    const handleSubmit = (e)=> {
        props.searchTag(e.target.text);
    }
    return(
        <nav className="main-nav">
            <ul>
                <li><NavLink to="/planes" onClick={handleSubmit}>Planes</NavLink></li>
                <li><NavLink to="/trains" onClick={handleSubmit}>Trains</NavLink></li>
                <li><NavLink to="/automobiles" onClick={handleSubmit}>Automobiles</NavLink></li>
            </ul>
        </nav>
    )
}

export default MainNav;
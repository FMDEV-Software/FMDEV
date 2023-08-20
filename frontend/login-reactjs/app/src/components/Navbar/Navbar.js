import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Navbar.module.css";

function Navbar() {
    return (

        <nav className={Styles.bar}>
            <Link to="/" className={Styles.home}>Home</Link>
            <ul className={Styles.list}>
                <Link to="/place1" className={Styles.item}>PlaceHolder1</Link>
                <Link to="/place2" className={Styles.item}>PlaceHolder2</Link>
                <Link to="/place3" className={Styles.item}>PlaceHolder3</Link>
                <Link to="/place4" className={Styles.item}>PlaceHolder4</Link>
            </ul>
        </nav>

    )
}

export default Navbar

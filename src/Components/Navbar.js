import React from 'react';
import { Link } from 'react-router-dom';
//CSS
import styles from "./Navbar.module.css"
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.name}>
                Typing test
            </div>
            <div>
                <Link to="/">Main Page</Link>
            </div>
        </div>
    );
};

export default Navbar;
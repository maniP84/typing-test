import React, {useState ,useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
//Styles
import styles from "./Main.module.css"
import "./Main.css"

const Main = (props) => {






    return (
        <div className={styles.onMain}>
            <div className={styles.continer}>
                <p className={styles.wellcome}>Wellcome to type test</p>
                <p className={styles.check}>Check your typing skills in 60 seconds</p>
                <p className={styles.select}>SELECT YOUR TEST</p>
                <div>
                    <i ref={props.icon} class="fas fa-chevron-down"></i>
                    <h1 onClick={props.selectHandler} ref={props.selectTime} className={styles.selectSecond}>1 Minute Test</h1>
                    <ul className="ul" ref={props.ul}>
                        <li onClick={props.choses59} value="59">1 Minute Test</li>
                        <li onClick={props.choses29} value="29">30 Second Test</li>
                    </ul>
                </div>
                <button className={styles.start} onClick={props.event}><Link to="/test">Start</Link></button>
            </div>
            <div>
        </div>
        </div>
        
    );
};

export default Main;
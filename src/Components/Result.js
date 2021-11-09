import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
//styles
import styles from "./Result.module.css"
import "./Result.css"

const Result = (props) => {
    const [timer, setTimer] = useState(props.timer)
    const [WPM, setWPM] = useState(props.currect)
    const [Lstorage, setLStorage] = useState(localStorage.getItem("WPM"))
    
    
    useEffect(() => {
        console.log(props.timer)
        if(props.timer === 29) {
            console.log(localStorage.getItem("WPM"))
            setWPM(WPM *2)
            localStorage.setItem("WPM", WPM * 2)
        }
        if(Lstorage === null || WPM > localStorage.getItem("WPM")) {
            localStorage.setItem("WPM", WPM)
        }
        setLStorage(localStorage.getItem("WPM"))

    },[])

    return (
        <div className={styles.container}>
            <div className={styles.wpmContainer}>
                <div className={styles.scoreContainer}>
                    <i class="fas fa-tachometer-alt"></i>
                    <p className={styles.yourTest}> Your Test Score</p>
                </div>
              <p className={styles.wpm}>WPM: {WPM}</p>
              <p className={styles.best}>Your best score: {Lstorage} WPM</p>
              <div className={styles.buttonContainer}>
                <button onClick={props.reTakeHandler} className={styles.retake}><Link to="/">Retake Test</Link></button>
              </div>
            </div>
        </div>
    );
};

export default Result;
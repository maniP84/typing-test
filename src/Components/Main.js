import { Link } from 'react-router-dom';
//Styles
import styles from "./Main.module.css"
import "./Main.css"

const Main = (props) => {
    const {icon, selectHandler, selectTime, choses59, choses29, event, ul} = props
    return (
        <div className={styles.onMain}>
            <div className={styles.continer}>
                <p className={styles.wellcome}>Wellcome to type test</p>
                <p className={styles.check}>Check your typing skills in 60 seconds</p>
                <p className={styles.select}>SELECT YOUR TEST</p>
                <div>
                    <i ref={icon} class="fas fa-chevron-down"></i>
                    <h1 onClick={selectHandler} ref={selectTime} className={styles.selectSecond}>1 Minute Test</h1>
                    <ul className="ul" ref={ul}>
                        <li onClick={choses59} value="59">1 Minute Test</li>
                        <li onClick={choses29} value="29">30 Second Test</li>
                    </ul>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.start} onClick={event}><Link to="/test">Start</Link></button>
                </div>
            </div>
            <div>
        </div>
        </div>
        
    );
};

export default Main;
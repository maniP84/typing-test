import React, { useState, useEffect, useContext, useRef } from 'react';
//Styles
import styles from "./Test.module.css"
import "./Test.css"
const Test = (props) => {
  const input = useRef()
  const {second, minutes, type, text, startState, num} = props
  const spanTag = document.querySelectorAll ("span")
  const [value, setValue] = useState("")
  const spans = useRef()
  const textSplit = text[0].split("")
  let typeSplit = type.split("")
  useEffect(() => {
    if(typeSplit[typeSplit.length - 1] === textSplit[typeSplit.length - 1] && typeSplit.length > 0 ) {
        spanTag[typeSplit.length - 1].className = "textStyle"
        console.log(spanTag[typeSplit.length - 1]) 
      }
      if(typeSplit[typeSplit.length - 1] !== textSplit[typeSplit.length - 1] && typeSplit.length > 0) {
        spanTag[typeSplit.length - 1].className = "falseTextStyle"
      }
      input.current.focus()
    },[type, text, second])
    
    
    const backSpace = event => {
      if(event.keyCode === 8 && typeSplit.length > 0) {
        spanTag[typeSplit.length - 1].className = "spans"
        
      }
      
    }
    
      if(second === 0 && !startState) {
      props.history.push('/result')
    }
    return (
        <div className={styles.container}>
        <div>
            <p className={styles.timer}>{minutes}:{second <= 9 ? "0" + second : second}</p>
        </div>
          <div className={styles.inputContainer}>
        <input ref={input} type="text" value={type} onKeyDown={backSpace} onChange={props.typeHandler}/>
          <p className={styles.text}>
            {
                textSplit.map(text => <span ref={spans} className="span">{text}</span>)
            }
          </p>
          </div>
            </div>
    );
};

export default Test;
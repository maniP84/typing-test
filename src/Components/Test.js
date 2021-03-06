import React, { useState, useEffect, useContext, useRef } from 'react';
import { v4 } from 'uuid';
//Styles
import styles from "./Test.module.css"
import "./Test.css"
const Test = (props) => {

  const input = useRef()
  const {second, minutes, type, text, startState, typeHandler, textRandom} = props
  const spanTag = document.querySelectorAll("span")
  const textSplit = text[textRandom].split("")
  let typeSplit = type.split("")
  useEffect(() => {
    if(typeSplit[typeSplit.length - 1] === textSplit[typeSplit.length - 1] && typeSplit.length > 0 ) {
        spanTag[typeSplit.length - 1].className = "textStyle"
      }
      if(typeSplit[typeSplit.length - 1] !== textSplit[typeSplit.length - 1] && typeSplit.length > 0) {
        spanTag[typeSplit.length - 1].className = "falseTextStyle"
      }
      input.current.focus()
      document.addEventListener("click", () => {
        input.current.focus()
      })
    },[type, text, second])
    
    
    // const backSpace = event => {
    // console.log("sdsdf")
    //   if(event.keyCode === 8 && typeSplit.length > 0) {
    //     spanTag[typeSplit.length - 1].className = "spans"
        
    //   }
      
    // }
    const keyCodeHandler = event => {
      console.log("im dsdr")
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
        <input ref={input} type="text" OnKeyListener={keyCodeHandler} value={type} onChange={typeHandler}/>
          <p className={styles.text}>
            {
                textSplit.map(text => <span className="span">{text}</span>)
            }
          </p>
          </div>
            </div>
    );
};

export default Test;
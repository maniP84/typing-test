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
  // const [type, setType] = useState("")
  // const [text, setText] = useState(["hello im mani and im 16 years old"]) 
  // const [num, setnum] = useState(0)
  // const [minutes, setMinutes] = useState(1)
  // const [second, setSecond] = useState(0)
  // const [startState, setStartState] = useState(true)
  // const [key, setKey] = useState("")
  const textSplit = text[0].split("")
  // const textSpaceSplit = text[0].split(" ")
  // const typeSplitBySpace = type.split(" ")
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
    
    


    return (
        <div className={styles.container}>
        <div>
            <p className={styles.timer}>{minutes}:{second <= 9 ? "0" + second : second}</p>
        </div>
          <div className={styles.inputContainer}>
        <input ref={input} type="text" value={type} onKeyDown={props.backSpace} onChange={props.typeHandler}/>
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
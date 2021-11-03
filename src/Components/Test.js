import React, { useState, useEffect, useContext, useRef } from 'react';
//Styles
import styles from "./Test.module.css"
import "./Test.css"
const Test = (props) => {
  const input = useRef()
  const {second, minutes, type, text, startState, num} = props
  const spanTag = document.querySelectorAll ("span")
  const [value, setValue] = useState("")
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
      // if(typeSplitBySpace[num] === textSpaceSplit[num]) {
      //   setnum(prevNum => prevNum + 1)
        
      // }
    },[type, text, second])
    
    
    // const typeHandler = event => {
    //   setType(event.target.value)
    //   // setKey(event.nativeEvent.data)
    //   console.log(event.nativeEvent.data)
    //   console.log(textSplit[0])
    //   if(event.nativeEvent.data === textSplit[0] && startState) {
    //     start()
    //   }
      
    // }
    
    const backSpace = event => {
      if(event.keyCode === 8 && typeSplit.length > 0) {
        spanTag[typeSplit.length - 1].className = "spans"
        
      }
      
    }
    // function start() {
    //   console.log("masjisdkfj")
    //   setStartState(false)
    //   setMinutes(0)
    //   setSecond(30)
    //   interval = setInterval(() => {
    //     setSecond(pverSecond => pverSecond -1)
    //   },1000)
    // }
    const onpaste = event => {
      const paste = event.clipboardData.getData("text/plain")
      if((paste.match(/[-.]/))) return
      setValue(paste)
      console.log(paste)

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
        <input ref={input} type="text" onPaste={onpaste} onClo value={type} onKeyDown={backSpace} onChange={props.typeHandler}/>
          <p className={styles.text}>
            {
                textSplit.map(text => <span className="span">{text}</span>)
            }
          </p>
          </div>
        {/* <span>{num}</span> */}
            </div>
    );
};

export default Test;
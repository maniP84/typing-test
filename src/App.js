import React, { useState, useRef, useEffect } from 'react';
import {BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';

import styles from "./App.module.css"
import "./App.css"
//Components
import Test from "./Components/Test"
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import Result from './Components/Result';
import { createRef } from 'react/cjs/react.production.min';
var interval;

function App(props) {
  const spanTag = document.querySelectorAll ("span")
  let ul = useRef()
  let selectTime = useRef()
  let icon = useRef()
  var select = useRef()
  const [minutes, setMinutes] = useState(1)
  const [second, setSecond] = useState(0)
  const [type, setType] = useState("")
  const [startState, setStartState] = useState(true)
  const [showMain, setShowMain] = useState(true)
  const [liValue, setLiValue] = useState(59)
  const [viseble, setVisble] = useState(true)
  const [text, setText] = useState(["You're waiting for a train. A train that will take you far away. You know where you hope the train will take you, but you can't know for sure. Yet it doesn't matter. Now, tell me why?"]) 
  const [num, setnum] = useState(0)
  let textSplit = text[0].split("")
  const textSpaceSplit = text[0].split(" ")
  const typeSplitBySpace = type.split(" ")
  let typeSplit = type.split("")
  
  

  const typeHandler = event => {
    console.log(event)
    if(event.nativeEvent.data !== null || event.nativeEvent.inputType === "deleteContentBackward") {
      setType(event.target.value)
    }
    console.log(event.nativeEvent.data)
    if(type.length === 0 && event.target.value !== textSplit[0] ) {
      setType("")
    }

    if(event.nativeEvent.data === textSplit[0] && startState) {
      start()
    }
    
  }
  const backSpace = event => {
    if(event.keyCode === 8 && typeSplit.length > 0) {
      spanTag[typeSplit.length - 1].className = "spans"
      
    }
    
  }
  const sdf = "JavaScript is high-level, often just-in-time compiled and"
  useEffect(() => {
    if(typeSplitBySpace[num] === textSpaceSplit[num]) {
      setnum(prevNum => prevNum + 1)
    }
    // console.log(spanTag)
  },[type, text, second])
  
  function start() {
    setStartState(false)
    setMinutes(0)
    setSecond(liValue)
    interval = setInterval(() => {
      setSecond(pverSecond => pverSecond -1)
    },1000)
  }
  if(second === 0) {
    clearInterval(interval)
  }
  
  const secondButtonHandler = () => {
    setShowMain(false)
    // props.router.push('/test')
    if(liValue === 29) {
      setMinutes(0)
      setType("")
      setSecond(30)
    }
  }
  const choses59 = event => {
    selectTime.current.innerHTML = event.target.innerHTML
    ul.current.className = "ul"
    setVisble(true)
    icon.current.style.transform = "rotate(0deg)"
    setLiValue(event.target.value)
  }
  const choses29 = event => {
    selectTime.current.innerHTML = event.target.innerHTML
    ul.current.className = "ul"
    setVisble(true)
    icon.current.style.transform = "rotate(0deg)"
    setLiValue(event.target.value)
  }
  const reTakeHandler = () => {
    setMinutes(1)
    setSecond(0)
    setStartState(true)
    setType("")
    setnum(0)
  }
const selectHandler = () => {
  if(viseble) {
      ul.current.className = "ul-visble"
      icon.current.style.transform = "rotate(180deg)"
      setVisble(false)
  }
  if(!viseble) {
      ul.current.className = "ul"
      icon.current.style.transform = "rotate(0deg)"
      setVisble(true)
  }
} 

  return (
    <BrowserRouter>
    <Navbar/>
          {/* <div className={showMain ? styles.onMain : styles.notMain}>
            <div className={styles.continer}>
                <p className={styles.wellcome}>Wellcome to type test</p>
                <p className={styles.check}>Check your typing skills in 60 seconds</p>
                <p className={styles.select}>SELECT YOUR TEST</p>
                <div>
                  <i style={{color:"#ffffff", fontSize:"1.6rem", marginLeft:"2rem", marginTop:"0.5rem"}} class="fas fa-stopwatch"></i>
                  <img className={styles.timerSVG} src={timerSVG} alt='timer'/>
                <select ref={select}>
                    <option value={59}>1 Minute Test</option>
                    <option value={29}>30 Second Test</option>
                  </select>
                </div>
                <button className={styles.start} onClick={secondButtonHandler}><Link to="/test">Start Test</Link></button>
            </div>
        </div> */}
      <Switch>
        <Route path="/result" render={() => <Result reTakeHandler={reTakeHandler} timer={liValue} currect={num}/>}/>
        <Route path="/test" render={(props) => <Test select={select} backSpace={backSpace} typeHandler={typeHandler} second={second} minutes={minutes} type={type} startState={startState} text={text} num={num} {...props}/>}/>
        <Route path="/" render={(props) => <Main selectHandler={selectHandler} viseble={viseble} icon={icon} ul={ul} selectTime={selectTime} choses29={choses29} choses59={choses59} event={secondButtonHandler} {...props}/>}/>
      </Switch>
    </BrowserRouter>

  );
}

export default App;

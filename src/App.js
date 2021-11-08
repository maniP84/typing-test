import React, { useState, useRef, useEffect } from 'react';
import {BrowserRouter, Switch, Route, } from 'react-router-dom';

import "./App.css"
//Components
import Test from "./Components/Test"
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import Result from './Components/Result';
let interval;
const textRandom = (Math.round(Math.random() * 2))

function App() {
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
  // const [textRandom, setTextRandom] = ([(Math.round(Math.random() * 2))])
  const [text, setText] = useState(["Oceans and lakes have much in common, but they are also quitedifferent. Both are bodies of water, but oceans are very large bodiesof salt water, while lakes are much smaller bodies of fresh water.Lakes are usually surrounded by land, while oceans are what surroundcontinents. Both have plants and animals living in them. The ocean ishome to the largest animals on the planet, whereas lakes support muchsmaller forms of life." ,"Ants are found everywhere in the world. They make their homein buildings, gardens, etc. They live in anthills. Ants are veryhardworking insects. Throughout the summers they collect food forthe winter season. Whenever they find a sweet on the floor, theystick to the sweet and carry it to their home. Thus, in this way, theyclean the floor. Ants are generally red and black in colour. Theyhave two eyes and six legs. They are social insects. ", "The stars are tiny points of light in the space. On a clear night wecan see around 2,000 to 3,000 stars without using a telescope. Starslook tiny in the sky because they are far away from the Earth. Inancient times the sky watchers found patterns of stars in the sky. "]) 
  const [num, setnum] = useState(0)
  let textSplit = text[textRandom].split("")
  const textSpaceSplit = text[textRandom].split(" ")
  const typeSplitBySpace = type.split(" ")
  let typeSplit = type.split("")
  
  

  const typeHandler = event => {
    if(event.nativeEvent.data !== null || event.nativeEvent.inputType === "deleteContentBackward") {
      setType(event.target.value)
    }
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
  useEffect(() => {
    if(typeSplitBySpace[num] === textSpaceSplit[num]) {
      setnum(prevNum => prevNum + 1)
    }
  },[type, text, second])
  
  function start(event) {
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
      <Switch>
        <Route path="/result" render={() => <Result reTakeHandler={reTakeHandler} timer={liValue} currect={num}/>}/>
        <Route path="/test" render={(props) => <Test select={select}  backSpace={backSpace} textRandom={textRandom} typeHandler={typeHandler} second={second} minutes={minutes} type={type} startState={startState} text={text} num={num} {...props}/>}/>
        <Route path="/" render={(props) => <Main selectHandler={selectHandler} viseble={viseble} icon={icon} ul={ul} selectTime={selectTime} choses29={choses29} choses59={choses59} event={secondButtonHandler} {...props}/>}/>
      </Switch>
    </BrowserRouter>

  );
}

export default App;

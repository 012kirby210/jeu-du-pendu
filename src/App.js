import './App.css';

import React, { Component } from 'react'

import Keyboard from './Components/Keyboard/Keyboard'
import Cardboard from './Components/Cardboard/Cardboard'
import HangedPicture from './Components/HangedPicture/HangedPicture'
import MyButton from './Components/MyButton/Mybutton';

const word = "wings"
const keySet = "abcdefghijklmnopqrstuvwxyz";

class App extends Component{

  generateWordToFound() {
    let result = [];
    result = word.split('').map(
      (letter)=>({symbol:letter,feedback:"hidden"})
    )
    return result;
  }

  generateKeys() {
    return keySet.split('').map((letter)=>({symbol:letter,used:"unused",keyState:"released"}));
  }

  state = {
    word: this.generateWordToFound(),
    keys: this.generateKeys(),
    tries: 0,
    misses: 0,
    win: false,
    fail: false
  }

  keyPressedState = {lastIndex:-1};

  handleKeyBoardKeyClick = (index) => {
    const { keys, word, tries, misses } = this.state;
    let newWord, newKeys, newMatches, oldMatches;

    oldMatches = word.filter((letter) => (letter.feedback === "visible")).length;
    newWord = word.map(
      (letter) => ((letter.symbol === keys[index].symbol)?{symbol: letter.symbol, feedback:"visible"} : letter)
    );
    newMatches = newWord.filter((letter) => (letter.feedback === "visible")).length;
    
    let tryIsAMiss = (newMatches===oldMatches);
    let win = newWord.filter((letter) => (letter.feedback === "hidden")).length === 0;
    let fail = tryIsAMiss ? (misses+1 >= 8) : (misses >= 8);

    (newKeys = keys) && (newKeys[index].used = "used");
    this.setState({
      word: newWord,
      keys: newKeys,
      tries: tries+1,
      misses: tryIsAMiss ? misses+1:misses,
      win: win,
      fail: fail
    });
  }

  handleKeyPressed = (index) => {
    this.changeKeyState(index,"pressed");
  }

  handleKeyReleased = (index) => {
    this.changeKeyState(index,"released");
  }

  changeKeyState = (index,value) => {
    const { keys } = this.state;
    let newKeys = keys;
    newKeys[index].keyState = value;
    this.setState({keys: newKeys});
  }

  handleKeyDown = (event) => {
    let { lastIndex } = this.keyPressedState;
    let index = Math.abs((event.keyCode-65)%26);
    if (lastIndex !== index){
      this.handleKeyPressed(index);
      this.handleKeyBoardKeyClick(index);
      this.keyPressedState.lastIndex = index;
    }
  }

  handleKeyUp = (event) => {
    let index = Math.abs((event.keyCode-65)%26);
    this.handleKeyReleased(index);
    this.keyPressedState.lastIndex = -1;
  }


  handleButtonClick = ({target:{outerHTML}}) => {
    console.log(outerHTML);
  }

  componentDidMount() {
    window.addEventListener('keydown',this.handleKeyDown);
    window.addEventListener('keyup',this.handleKeyUp);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown',this.handleKeyDown);
    window.removeEventListener('keyup',this.handleKeyUp);
  }

  render() {
    const { word, keys, misses, fail, win } = this.state
    return (
      <div className="App">
        <HangedPicture uncover={misses}/>
        <Cardboard word={word}/>
        { false && <MyButton clickHandler={this.handleButtonClick} textToDisplay="click me"/> }
        {win && <div className="game-issue">Gagné</div>}
        {fail && <div className="game-issue">Perdu</div>}
        <Keyboard letters={keys} onKeyClick={this.handleKeyBoardKeyClick} onKeyPressed={this.handleKeyPressed} onKeyReleased={this.handleKeyReleased}/>
      </div>
    )
  }
}

export default App;

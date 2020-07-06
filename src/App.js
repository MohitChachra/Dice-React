import React from 'react';
import logo from './logo.svg';

import './css/App.css'
import dice1 from'./dice-images/dice1.png';
import dice2 from'./dice-images/dice2.png';
import dice3 from'./dice-images/dice3.png';
import dice4 from'./dice-images/dice4.png';
import dice5 from'./dice-images/dice5.png';
import dice6 from'./dice-images/dice6.png';

const dices = [dice1,dice2,dice3,dice4,dice5,dice6];
class App extends React.Component{
  constructor(){
    super();
    this.state={
      face:5
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    let num = Math.floor(Math.random()*6);
    this.setState({
      face:num
    })
  }
  render(){
    return(
      <div className = "main__app">
        <h1>Dice roller</h1>
        <img className="diceImg" src={dices[this.state.face]} alt='dice'></img>
        <br/>
        <button onClick={this.handleClick} className='dice-roller'>Roll Dice</button>
      </div>
    )
  }
}

export default App;

import React, {useState} from 'react';
import './app.css';
import rock from './images/rock1.jpg';
import paper from './images/paper.jpg';
import scissors from './images/scissors.jpg';
import lizard from './images/lizard.jpg';
import spock from './images/spock1.jpg';
import game from './game.js'


export default function App(){

  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);


  
  return(<div className="app">

  <div className="intro">
    <h1>Rock Paper Scissors Lizard Spock !</h1>
        <p>Rules: Scissors cuts Paper, Paper covers Rock, Rock crushes Lizard, 
          Lizard poisons Spock, Spock smashes Scissors, Scissors decapitates Lizard,Lizard eats Paper
          Paper disproves Spock, Spock vaporizes Rock, and Rock crushes Scissors</p>
  </div>
    <h2>Choose an option</h2>
  <div className= "buttons-container">
    <div className="button-container">
     <div className="rock-button">
        <img className="buttonImage" src={rock} alt='rock' onClick={vento=>setPlayerScore(playerScore+1)}/>
     </div>

     </div>
     <div className="button-container">
    <div className="paper-button">
      <img className="buttonImage" src={paper} alt='paper' onClick={e=>setPlayerScore(playerScore+1)}/>
    </div>
    </div>

    <div className= "button-container">
    <div className="scissors-button">
      <img className="buttonImage" src={scissors} alt='scissors' onClick={se=>setPlayerScore(playerScore+1)}/>
    </div>
    </div>

    <div className= "button-container">
    <div className="lizard-button">
      <img className="buttonImage" src={lizard} alt='lizard' onClick={e=>setPlayerScore(playerScore+1)}/>
    </div>
    </div>

    <div className= "button-container">
    <div className="spock-button">
      <img className="buttonImage" src={spock} alt='spock' onClick={e=>setPlayerScore(playerScore+1)}/>
    </div>
    </div>
    
  </div>
  <div className="score-container">
      <div className="player-score">
        <p>Your score </p>
        <p>{playerScore}</p>
      </div>
      <div className="computer-score">
      <p>Rival score </p>
        <p>{computerScore}</p>
        </div>
    </div>
    
  </div>)
}



/*class App extends React.Component{

  constructor(){
    super();
      this.state={
        roundsLeft:5,  
        playerScore: 0,
        computerScore: 0,
        selectedOption:''
      }
      this.handlePlay = this.handlePlay.bind(this)
  }

  handlePlay(){
    this.setState(this.state.playerScore = )
    console.log(this.state.playerScore)
  }

  render(){
  return (
    <div className="App">

    <div className="intro">
      <h1>Rock Paper Scissors Lizard Spock !</h1>
          <p>Rules: Scissors cuts Paper, Paper covers Rock, Rock crushes Lizard, 
            Lizard poisons Spock, Spock smashes Scissors, Scissors decapitates Lizard,Lizard eats Paper
            Paper disproves Spock, Spock vaporizes Rock, and Rock crushes Scissors</p>
    </div>
      <h2>Choose an option</h2>
    <div className= "buttons-container">
      <div className="button-container">
       <div className="rock-button">
          <img className="buttonImage" src={rock} alt='rock' onClick={this.handlePlay}/>
       </div>

       </div>
       <div className="button-container">
      <div className="paper-button">
        <img className="buttonImage" src={paper} alt='paper' onClick={this.handlePlay}/>
      </div>
      </div>

      <div className= "button-container">
      <div className="scissors-button">
        <img className="buttonImage" src={scissors} alt='scissors' onClick={this.handlePlay}/>
      </div>
      </div>

      <div className= "button-container">
      <div className="lizard-button">
        <img className="buttonImage" src={lizard} alt='lizard' onClick={this.handlePlay}/>
      </div>
      </div>

      <div className= "button-container">
      <div className="spock-button">
        <img className="buttonImage" src={spock} alt='spock' onClick={this.handlePlay}/>
      </div>
      </div>
      
    </div>
    <div className="score-container">
        <div className="player-score">
          <p>Your score </p>
          <p>{this.state.playerScore}</p>
        </div>
        <div className="computer-score">
        <p>Rival score </p>
          <p>{this.state.computerScore}</p>
          </div>
      </div>
      
    </div>
  );
}
}





export default App;
*/
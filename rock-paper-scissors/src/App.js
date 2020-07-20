import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';
import rock from './images/4rock.png';
import paper from './images/2paper.png';
import scissors from './images/5scissors.png';
import lizard from './images/1lizardo.png';
import spock from './images/3spock.png';
import game from './game.js'



export default function App(){

  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [roundsLeft, setRoundsLeft] = useState(5);
 // const [playerDisplayChoice, setPlayerDisplayChoice] = useState(null);
 // const [computerDisplayChoice, setComputerDisplayChoice] = useState(null);
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [winner, setWinner] = useState('');
  const choices = [{url: rock, n:'rock'},{url:paper, n:'paper'},
    {url:scissors,n:'scissors'},{url:lizard, n:'lizard'},{url:spock,n:'spock'}]


  function handleChoosing(option){
    handlePlayerChoice(option)
    showComputerChoice()
    handleRoundWinner()
    handleMatchWinner()
  }

   function handlePlayerChoice(option){
     setPlayerChoice(option)
    displayChoice('player-choice')
    //mostrar imagen de espera de compu
   }

   function displayChoice(player){
    let div = document.getElementById(player);
    div.style.display = "block";
   }

function showComputerChoice(){
  setComputerChoice(randomChoice)
  setTimeout(function(){
    displayChoice('computer-choice')
    },2000);
  
}
function randomChoice(){
  let randomNumber = Math.floor(Math.random()*choices.length)
  console.log(choices[randomNumber])
  return (choices[randomNumber])
}

function handleRoundWinner(){
  console.log("PLAYERCHOICE",playerChoice.n, "COMPUTERCHOICE", computerChoice.n)
  if (playerChoice.n === computerChoice.n){
    setPlayerScore(playerScore+1)
    setComputerScore(computerScore+1)
  } else if ((computerChoice.n==='rock'&&(playerChoice.n==='paper'||playerChoice.n==='spock') )||
              (computerChoice.n==='paper'&&(playerChoice.n==='scissors'||playerChoice.n==='lizard'))||
              (computerChoice.n==='scissors'&&(playerChoice.n==='rock'||playerChoice.n==='spock'))||
              (computerChoice.n==='lizard'&&(playerChoice.n==='scissors'||playerChoice.n==='rock'))||
              (computerChoice.n==='spock'&&(playerChoice.n==='paper'||playerChoice.n==='lizard')) )
              {
                setWinner('You Win!')
                setPlayerScore(playerScore+1)
              }else{
                setComputerScore(computerScore+1)
                setWinner('Computer Wins!')
              }
  setTimeout(function(){
    let div = document.getElementById('winner');
    div.style.display = "block";
  },2000)

}


function handleMatchWinner(){
  if (roundsLeft>0){
  setRoundsLeft(roundsLeft-1)

}

}




  return(<div className="app">

  <div className="intro">
    <div className="title-container">
    <h1 className="title">Rock Paper Scissors Lizard Spock !</h1>
    </div>
  </div>


  <div className="game-info">
  <div className="score-container">
      <div className="player-score">
        <p>Your score </p>
        <p id="score">{playerScore}</p>
      </div>
      <div className="computer-score">
      <p>Rival score </p>
        <p id="score">{computerScore}</p>
        </div>
    </div>
    </div>
    <div className="rounds">
      <p>Rounds left: <span>{roundsLeft}</span></p>
    </div>

    <div className="buttons-princ">
  <div className= "buttons-container">
   
    <div className="button-container" id="rock-container">
     <div className="rock-button" data-toggle="collapse" href=".choice-image">
        <img className="buttonImage" id="rock" src={rock} alt='rock' 
          onClick={e=>handleChoosing({url:rock,n:'rock'})}/>
     </div>

     </div>
     <div className="button-container" id="paper-container">
    <div className="paper-button">
      <img className="buttonImage" src={paper} alt='paper' 
      onClick={e=>handleChoosing({url:paper,n:'paper'})}/>
    </div>
    </div>

    <div className= "button-container" id="scissors-container">
    <div className="scissors-button">
      <img className="buttonImage" src={scissors} alt='scissors' 
        onClick={se=>handleChoosing({url:scissors,n:'scissors}'})}/>
    </div>
    </div>

    <div className= "button-container" id="lizard-container">
    <div className="lizard-button">
      <img className="buttonImage" src={lizard} alt='lizard' 
        onClick={e=>handleChoosing({url:lizard,n:'lizard'})}/>
    </div>
    </div>

    <div className= "button-container" id="spock-container">
    <div className="spock-button">
      <img className="buttonImage" src={spock} alt='spock' 
        onClick={e=>handleChoosing({url:spock,n:'spock'})}/>
    </div>
    </div>
    </div>
  </div>


    <div className="winner">
    <p className="winner-announcer" id="winner">Winner: {winner}</p>
    </div>

<div className="container pt-3 border choices-container">
  <div className="row border">

  <div className="col choice-container border player-container">
    <p>Your choice</p>
  <img className="choice-image" id="player-choice" src={playerChoice.url} alt={playerChoice.n}/>
  </div>

  <div className="col choice-container border computer-container">
    <p>Computer choice</p>
      <img className="choice-image" id="computer-choice" src={computerChoice.url} alt={computerChoice.n}/>

  </div>
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
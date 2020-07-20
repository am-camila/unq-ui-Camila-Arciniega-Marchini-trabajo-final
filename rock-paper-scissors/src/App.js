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
  const [playerDisplayChoice, setPlayerDisplayChoice] = useState(null);
  const [computerDisplayChoice, setComputerDisplayChoice] = useState(rock);
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [winner, setWinner] = useState('');
  const choices = ['rock','paper','scissors','lizard','spock']


  function handleChoosing(option){
    console.log("handleChoosing", option)
    handlePlayerChoice(option)
    handleComputerChoice()

  }

   function handlePlayerChoice(option){
    setPlayerChoice(option)
    setPlayerDisplayChoice(searchURL(option))
    displayChoice('player-choice')
    //mostrar imagen de espera de compu
    console.log("handlePlayerChoice string",playerChoice)
    console.log("handlePlayerChoice url",playerDisplayChoice)

   }

   function displayChoice(id){
    let div = document.getElementById(id);
    div.style.display = "block";
   }

function handleComputerChoice(){
  let random=randomChoice()
  setComputerChoice(random)
  setComputerDisplayChoice(searchURL(random))
  setTimeout(function(){
    displayChoice('computer-choice')
    },2000);
  
}
function randomChoice(){
  let randomNumber = Math.floor(Math.random()*choices.length)
  return (choices[randomNumber])
}

function searchURL(choice){
 let url=null
  if(choice==='rock'){url=rock}
  if(choice==='paper'){url=paper}
  if(choice==='scissors'){url=scissors}
  if(choice==='lizard'){url=lizard}
  if(choice==='spock'){url=spock}
  
  return url
}

function handleRoundWinner(){
  console.log("PLAYERCHOICE",playerChoice, "COMPUTERCHOICE", computerChoice)
  if (playerChoice === computerChoice){
    setPlayerScore(playerScore+1)
    setComputerScore(computerScore+1)
    setWinner("It's a tie!")
  } else if ((computerChoice==='rock'&&(playerChoice==='paper'||playerChoice==='spock') )||
              (computerChoice==='paper'&&(playerChoice==='scissors'||playerChoice==='lizard'))||
              (computerChoice==='scissors'&&(playerChoice==='rock'||playerChoice==='spock'))||
              (computerChoice==='lizard'&&(playerChoice==='scissors'||playerChoice==='rock'))||
              (computerChoice==='spock'&&(playerChoice==='paper'||playerChoice==='lizard')) )
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
          onClick={e=>handleChoosing('rock')}/>
     </div>

     </div>
     <div className="button-container" id="paper-container">
    <div className="paper-button">
      <img className="buttonImage" src={paper} alt='paper' 
      onClick={e=>handleChoosing('paper')}/>
    </div>
    </div>

    <div className= "button-container" id="scissors-container">
    <div className="scissors-button">
      <img className="buttonImage" src={scissors} alt='scissors' 
        onClick={se=>handleChoosing('scissors')}/>
    </div>
    </div>

    <div className= "button-container" id="lizard-container">
    <div className="lizard-button">
      <img className="buttonImage" src={lizard} alt='lizard' 
        onClick={e=>handleChoosing('lizard')}/>
    </div>
    </div>

    <div className= "button-container" id="spock-container">
    <div className="spock-button">
      <img className="buttonImage" src={spock} alt='spock' 
        onClick={e=>handleChoosing('spock')}/>
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
  <img className="choice-image" id="player-choice" src={playerDisplayChoice} alt={playerChoice}/>
  </div>

  <div className="col choice-container border computer-container">
    <p>Computer choice</p>
      <img className="choice-image" id="computer-choice" src={computerDisplayChoice} alt={computerChoice}/>

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
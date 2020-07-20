import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';
import rock from './images/4rock.png';
import paper from './images/2paper.png';
import scissors from './images/5scissors.png';
import lizard from './images/1lizardo.png';
import spock from './images/3spock.png';



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
    let random=randomChoice()

    handlePlayerChoice(option)
    setComputerChoice(random)
    setComputerDisplayChoice(searchURL(random))
    setTimeout(function(){
      displayChoice('computer-choice')
      },2000);
    handleRoundWinner(option, random)
    handleMatchWinner()
    
  }

   function handlePlayerChoice(option){
    setPlayerChoice(option)
    setPlayerDisplayChoice(searchURL(option))
    displayChoice('player-choice')
    //mostrar imagen de espera de compu

   }

   function displayChoice(id){
    let div = document.getElementById(id);
    div.style.display = "block";
   }

function handleComputerChoice(){
  let random=randomChoice()
  //setComputerChoice(random)
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

function handleRoundWinner(playerChoice,computerChoice){
  console.log("PLAYER CHOICE",playerChoice, "COMPUTER CHOICE", computerChoice)
  if (playerChoice === computerChoice){
    setPlayerScore(playerScore+1)
    setComputerScore(computerScore+1)
    setWinner("It's a tie!")
  } else{
          if (((((computerChoice==='rock'&&(playerChoice==='paper'||playerChoice==='spock') )||
              (computerChoice==='paper'&&(playerChoice==='scissors'||playerChoice==='lizard')))||
              (computerChoice==='scissors'&&(playerChoice==='rock'||playerChoice==='spock')))||
              (computerChoice==='lizard'&&(playerChoice==='scissors'||playerChoice==='rock')))||
              (computerChoice==='spock'&&(playerChoice==='paper'||playerChoice==='lizard')) )
              {
                setWinner('You Win!')
                setPlayerScore(playerScore+1)
              }
  else{
              setComputerScore(computerScore+1)
              setWinner('Computer Wins!')
              }}
  setTimeout(function(){
    let div = document.getElementById('winner');
    div.style.display = "block";
  },2000)

}


function handleMatchWinner(){
  if (roundsLeft>0){
  setRoundsLeft(roundsLeft-1)
} else{
  //modal
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
<h2>you choose: {playerChoice}<span> computer choose: {computerChoice}</span></h2>
</div>)
}



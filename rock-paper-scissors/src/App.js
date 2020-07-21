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
  const [playerDisplayChoice, setPlayerDisplayChoice] = useState(null);
  const [computerDisplayChoice, setComputerDisplayChoice] = useState(null);
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [winner, setWinner] = useState('');
  const choices = ['rock','paper','scissors','lizard','spock'];


  function handleChoosing(option){
    
    let random=randomChoice();
    
    resetAllElementsDisplay();
    handlePlayerChoice(option);
    setComputerChoice(random);
    setComputerDisplayChoice(searchImage(random));
    displayComputerChoice()
    handleRoundWinner(option, random);
  }

   function handlePlayerChoice(option){
    setPlayerChoice(option);
    setPlayerDisplayChoice(searchImage(option));
    displayElement('player-choice');
   }

   function displayElement(id){
    let div = document.getElementById(id);
    div.style.display = "block";
   }

   function resetELementDisplay(id){
    let div = document.getElementById(id);
    div.style.display = "none";
   }

   function displayComputerChoice(){
    setTimeout(function(){
      displayElement('computer-choice')
      },500);
      setTimeout(function(){
        displayElement('cpu-text-choice')
        },500);
   }

   function resetAllElementsDisplay(){
    resetELementDisplay('player-choice');
    resetELementDisplay('computer-choice');
    resetELementDisplay('winner-text');
    resetELementDisplay('cpu-text-choice');
   }

function randomChoice(){
  let randomNumber = Math.floor(Math.random()*choices.length);
  return (choices[randomNumber]);
}

function searchImage(choice){
 let image=null;
  if(choice==='rock'){image=rock};
  if(choice==='paper'){image=paper};
  if(choice==='scissors'){image=scissors};
  if(choice==='lizard'){image=lizard};
  if(choice==='spock'){image=spock};

  return image;
}

function handleSetWinner(string){
  setWinner(string);
  setTimeout( function(){displayElement('winner-text')},900);

}

function handleRoundWinner(playerChoice,computerChoice){
  if (playerChoice === computerChoice){
    setPlayerScore(playerScore+1);
    setComputerScore(computerScore+1);
    handleSetWinner("It's a tie!")
  } else{
          if (((((computerChoice==='rock'&&(playerChoice==='paper'||playerChoice==='spock') )||
              (computerChoice==='paper'&&(playerChoice==='scissors'||playerChoice==='lizard')))||
              (computerChoice==='scissors'&&(playerChoice==='rock'||playerChoice==='spock')))||
              (computerChoice==='lizard'&&(playerChoice==='scissors'||playerChoice==='rock')))||
              (computerChoice==='spock'&&(playerChoice==='paper'||playerChoice==='lizard')) )
              {
               handleSetWinner('You Win!');
                setPlayerScore(playerScore+1);
              }
  else{
              setComputerScore(computerScore+1);
              handleSetWinner('Computer Wins!');
              }}
            }


function resetAll(){
  resetAllElementsDisplay();
  setPlayerScore(0);
  setComputerScore(0);

  
}

  return(
  <div className="app">

  <div className="intro">
    <div className="title-container">
    <h1 className="title">Rock Paper Scissors Lizard Spock !</h1>
    </div>
  </div>

  <div className="game-info">

  <div className="reset-button-container">
      <p className="button" onClick={resetAll}>Reset</p>
    </div>

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
        onClick={e=>handleChoosing('scissors')}/>
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


    <div className="winner" id="winner">
    <p className="winner-announcer" id="winner-text" >{winner}</p>
    </div>

<div className="container pt-3">
  <div className="row choices-container">
  <div className="col choice-container  player-container">
  <p className="choice-text">Your choice: <span>{playerChoice}</span></p>
  <img className="choice-image" id="player-choice" src={playerDisplayChoice} alt={playerChoice}/>
  </div>

  <div className="col choice-container  computer-container">
  <p className="choice-text">Computer choice: <span id="cpu-text-choice">{computerChoice}</span></p>
      <img className="choice-image" id="computer-choice" src={computerDisplayChoice} alt={computerChoice}/>
  </div>
  </div>
</div>

</div>)
}



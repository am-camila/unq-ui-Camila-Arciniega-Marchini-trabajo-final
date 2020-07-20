
export default function game(){

    const scorePlayer= 0;
    const scoreComputer= 0;
    const choicePlayer='';
    const winner='';
    const choices=['rock','paper','scissors','lizard','spock']
    

function setPlayerChoice(optionName){
    scorePlayer=optionName 
}

function getComputerChoosing(){
   let random = Math.floor(Math.random()*choices.length)
    return choices[random]
}

function getRoundWinner(){

}



}


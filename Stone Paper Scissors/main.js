let stone = "<img src='https://img.icons8.com/color/48/000000/angry-fist.png'>";
let paper = "<img src='https://img.icons8.com/emoji/48/000000/waving-hand-emoji.png'>";
let scissor = "<img src='https://img.icons8.com/color/48/000000/hand-scissors--v1.png'>";

let win = "<div class='alert alert-success' role='alert'>You WIN</div>";
let loose = "<div class='alert alert-danger' role='alert'>You LOOSE</div>";
let tie = "<div class='alert alert-info' role='alert'>You TIE</div>";


function getRandomChoice (){
  return  Math.floor(Math.random() * 3);
} 
window.onload = function(){
    document.getElementById('stone').innerHTML = stone;
    document.getElementById('paper').innerHTML = paper;
    document.getElementById('scissor').innerHTML = scissor;
}


function play(clicked_id){
    let userChoice = clicked_id;
    if(userChoice == "stone") {
        document.getElementById('you').innerHTML = stone;
    }
    else if (userChoice == "paper") {
        document.getElementById('you').innerHTML = paper;
    }
    else if (userChoice == "scissor") {
        document.getElementById('you').innerHTML = scissor;
    }
    
    let randomChoice = getRandomChoice();
  if(randomChoice == 0){
      document.getElementById('opponent').innerHTML = stone;
  }
  else if (randomChoice == 1) {
      document.getElementById('opponent').innerHTML = paper;
  } 
  else if (randomChoice == 2) {
    document.getElementById('opponent').innerHTML = scissor;
  }

    if(randomChoice == 0 && userChoice == "paper" || randomChoice == 1 && userChoice == "scissor" || randomChoice == 2 && userChoice == "stone") {
        document.getElementById('winner').innerHTML = win;
    }
    else if(userChoice == "paper" && randomChoice == 2 || userChoice == "scissor" && randomChoice == 0 || userChoice == "stone" && randomChoice == 1) {
        document.getElementById('winner').innerHTML = loose;
    }
    else {
        document.getElementById('winner').innerHTML = tie;
    }

}

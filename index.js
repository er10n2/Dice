let refreshEl = document.getElementById("refresh");
let img1 = document.getElementById("player1-img");
let img2 = document.getElementById("player2-img");

let rollBtn = document.getElementById("roll-btn");

function Roll(){

  let  random1 = Math.floor(Math.random()*6)+1;
  let  random2 = Math.floor(Math.random()*6)+1;

  img1.setAttribute("src", `dice${random1}.png`) ;
  img2.setAttribute("src", `dice${random2}.png`) ;


  if( random1 > random2){

    refreshEl.textContent = "Player 1 Wins!";

  }else if(random2 > random1){
    refreshEl.textContent = "Player 2 Wins!";
  }else{
    refreshEl.textContent = "Draw!"
  }




}
rollBtn.addEventListener("click", Roll);

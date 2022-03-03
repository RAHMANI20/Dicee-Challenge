 // get a random number between 1 and 6 for the player 1
var randomNumber1 = Math.floor(Math.random()*6+1);
// select a dice face by changing the attribute value of the source based  on the random number that we got back
document.querySelector(".dice").lastElementChild.setAttribute("src","images/dice"+randomNumber1+".png");
// get a random number between 1 and 6 for the player 1
var randomNumber2 = Math.floor(Math.random()*6+1);
// select a dice face by changing the attribute value of the source based  on the random number that we got back
document.querySelectorAll(".dice")[1].lastElementChild.setAttribute("src","images/dice"+randomNumber2+".png");

// we're going to change the h1 text depending on what was the result of the dice roll
if( randomNumber1 > randomNumber2){
  document.querySelector("h1").innerText = "<= Player 1 wins"; // player 1 won
}else if(randomNumber1 === randomNumber2){
  document.querySelector("h1").innerText = "=> Draw <= "; // equality
}else{
  document.querySelector("h1").innerText = "Player 2 wins =>"; // player 2 won
}

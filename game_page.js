player1name=localStorage.getItem("player1name")
player2name=localStorage.getItem("player2name")
player1score=0
player2score=0
document.getElementById ("p1n").innerHTML=player1name+":"
document.getElementById ("p2n").innerHTML=player2name+":"
document.getElementById ("p1s").innerHTML=player1score
document.getElementById ("p2s").innerHTML=player2score

document.getElementById("quturn").innerHTML="Question Turn:"+ player1name
document.getElementById("answrturn").innerHTML="Answer Turn:"+ player2name

function  send(){
number1=document.getElementById("num1").value
number2=document.getElementById("num2").value
answer=number1*number2
question="<h1> "+"q."+ number1 + "x" + number2 + "</h1>" 
inputc="<input id='answer'placeholder='answer here.'class='form-control'>"
checkbtn="<button id='bttn'class='btn btn-success' onclick='pushing()'> check </button>"
room=question+inputc+checkbtn
document.getElementById("output").innerHTML=room
document.getElementById("txt").value=""
}
var qt="player1"
var at="player2"
function pushing(){
getanswer=document.getElementById("answer").value
if (getanswer==word) {
if (at=="player1") {
player1score=player1score+1
document.getElementById("p1s").innerHTML=player1score
}    
else{
player2score=player2score+1
document.getElementById("p2s").innerHTML=player2score
}
}
if (qt=="player2") {
qt="player1"
document.getElementById("quturn").innerHTML="Question Turn"+player1name
}
else{
qt="player2"
document.getElementById("quturn").innerHTML="Question Turn"+player2name
}
if (at=="player2") {
at="player1"
document.getElementById("answrturn").innerHTML="Answer Turn"+player1name
}
else{
at="player2"
document.getElementById("answrturn").innerHTML="Answer Turn"+player2name
}
document.getElementById("output").innerHTML=""
}
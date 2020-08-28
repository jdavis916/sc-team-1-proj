console.log('script connected');

//signup page//
const userName = document.getElementById('username');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPass = document.getElementById('confirmpass');
const dob = document.getElementById('dob');
const form = document.getElementById('form');
const btnSubmit = document.getElementById('signup-submit');
const green = '#4CAF50';
const red = 'F44336';

btnSubmit.addEventListener('click', function(){
  validate(); 
   
});

function validate(){
  console.log('validateClicked');
  if(isEmpty(firstName)) return;
  if(!checkIfOnlyLetters(firstName)) return;
  return true;
}

function checkForSpaces(field){
    if(isEmpty(field.value.trim())){
        setInvalid(field, `${field.name} must not be empty`);
        return true;
    } else{
        setValid(field);
        return false;
    }
}
function isEmpty(value){
    if(value === '') return true;
    return false;
}
function setInvalid(field, message){
    field.classList.add("invalid");
    field.nextElementSibling.innerhtml = message;
    field.nextElementSibling.style.color = red;
}
function setValid(field){
    field.classList.remove("invalid");
    field.nextElementSibling.innerhtml = '';
    field.nextElementSibling.style.color = green;
}
function checkIfOnlyLetters(field){
    if(/^[a-zA-Z ]+$/.test(field.value)){
        setValid(field);
        return true;
    }else{
        setInvalid(field, `${field.name} must contain only letters`);
        return false;
    }
}
//end of signup page//

//--------------------------------------------------dice------------------------------------------------------------//
function rollDice(){
  var die1 = document.getElementById("die1");
  var die2 = document.getElementById("die2");
  var status = document.getElementById("status");
  // dice 1-6 //
  var d1 = Math.floor(Math.random() * 6) + 1;
  var d2 = Math.floor(Math.random() * 6) + 1;
  var diceTotal = d1 + d2;
  die1.innerHTML = d1;
  die2.innerHTML = d2;
  status.innerHTML = "You rolled "+diceTotal+"."

  // dice 1-20 //
  // var d1 = Math.floor(Math.random() * 20) + 1; //
}

  //----------------------------------------------end of dice--------------------------------------------//
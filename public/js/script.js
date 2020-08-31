console.log('script connected');

//signup page//
const userName = document.getElementById('username');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPass = document.getElementById('confirmpass');
const dob = document.getElementById('dob');
const form = document.getElementById('formSignUp');
const btnSubmit = document.getElementById('signup-submit');
const green = '#4CAF50';
const red = 'F44336';

btnSubmit.addEventListener('click', function(e){
  e.preventDefault();
  check();

});

function check(){
  if(validateUserNAme() === true, validateFirstName() === true){
    form.submit();
  }
}

function validateFirstName(){
  console.log('validateFirstNameClicked');
  if(checkForSpaces(firstName)) return;
  if(isEmpty(firstName)) return;
  if(!checkIfOnlyLetters(firstName)) return;
  //if(checkLength(firstName, 5, 15,)) return;
  return true;
}
function validateUserNAme(){
  console.log('validateFirstNameClicked');
  if(checkForSpaces(userName)) return;
  if(isEmpty(userName)) return;
  //if(checkLength(userName, 5, 15)) return;
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
    field.nextElementSibling.style.color;
}
function setValid(field){
    field.classList.remove("invalid");
    field.nextElementSibling.innerhtml = '';
    field.nextElementSibling.style.color;
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

/*function checkLength(field, mnlen, mxlen){ 
    if(field.length < mnlen || field.length > mxlen){ 
    alert("Please input the userid between " +mnlen+ " and " +mxlen+ " characters");
    return false;
  }else{ 
    alert("accepted")
    return true;
    }
}*/

//end of signup page//

//--------------------------------------------------dice------------------------------------------------------------//

function rollDice(){
  var die1 = document.getElementById("die1");
  var die2 = document.getElementById("die2");
  var die3 = document.getElementById("die3");
  var status = document.getElementById("status");
  var amtOfDice = document.getElementById("amtOfDice");
  var sidePerDie = document.getElementById("sidePerDie");

  // dice 1-6 //
  var d1 = Math.floor(Math.random() * 6) + 1;
  var d2 = Math.floor(Math.random() * 6) + 1;
  var d3 = Math.floor(Math.random() * 6) + 1;
  die1.innerHTML = d1;
  die2.innerHTML = d2;
  die3.innerHTML = d3;
}

  //----------------------------------------------end of dice--------------------------------------------//
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
  if(validateUserName() === true, 
    validateFirstName() === true,
    validateLastName() === true,
    validateEmail() === true,
    validatePassword() === true,
    retypePassword() === true,
    validateDateOfBirth() === true
  )
  {
    form.submit();
  }
}

function validateFirstName(){
  console.log('validateFirstNameClicked');
  if(checkForSpaces(firstName)) return;
  if(isEmpty(firstName)) return;
  if(!checkIfOnlyLetters(firstName)) return;
  if(checkLength(firstName, 2, 20, "First Name")) return;
  return true;
}
function validateUserName(){
  console.log('validateFirstNameClicked');
  if(checkForSpaces(userName)) return;
  if(isEmpty(userName)) return;
  if(checkLength(userName, 6, 20, "Username")) return;
  return true;
}
function validateLastName(){
  console.log('validateLastNameClicked');
  if(checkForSpaces(lastName)) return;
  if(isEmpty(lastName)) return;
  if(checkLength(lastName, 2, 20, "Last Name")) return;
  return true;
}
function validateEmail(){
  console.log('validateEmailClicked');
  if(checkForSpaces(email)) return;
  if(isEmpty(email)) return;
  if(checkEmail(email)) return;
  return true;
}
function validatePassword(){
  console.log('validatePasswordClicked');
  if(checkForSpaces(password)) return;
  if(isEmpty(password)) return;
  checkLength(password, 8, 30, "Password");
  return true;
}
function retypePassword(){
  console.log('retypePasswordClicked');
  if(checkForSpaces(confirmPass)) return;
  if(isEmpty(confirmPass)) return;
  if(checkConfirmPass(confirmPass)) return;
  return true;
}
function validateDateOfBirth(){
  console.log('validateDateOfBirthClicked');
  if(checkForSpaces(dob)) return;
  if(isEmpty(dob)) return;
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
function setInvalid(field){
    field.classList.add("invalid");
}
function setValid(field){
    field.classList.remove("invalid");
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

function checkLength(field, minlen, maxlen, name) {
  var value = field.value;

  if (value.length < minlen || value.length > maxlen) {
    alert(name+" must be in between " +minlen+ " to "+maxlen+" charcters long.")
    setInvalid(field);
    return false; 
  }
  setValid(field);
  return true;
}

function checkEmail(field){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(field.value.match(mailformat)){
    document.form.Email.focus();
    setValid(field);
    return true;
  }else{
    alert("Invalid email address");
    document.form.Email.focus();
    setInvalid(field);
    return false;
  }
}
function checkConfirmPass(field){
  var pass = document.form.Password.value;
  var confirm = document.form.Confirmpass.value;
  if (pass != confirm) {
    alert("Passwords do not match.");
    setInvalid(field);
    return false;
}
setValid(field);
return true;
}


//end of signup page

//--------------------------------------------------dice------------------------------------------------------------//

function rollDice(){
  var die1 = document.getElementById("die1");
  var die2 = document.getElementById("die2");
  var die3 = document.getElementById("die3");

  // dice 1-6 //
  var d1 = Math.floor(Math.random() * 6) + 1;
  var d2 = Math.floor(Math.random() * 6) + 1;
  var d3 = Math.floor(Math.random() * 6) + 1;
  die1.innerHTML = d1;
  die2.innerHTML = d2;
  die3.innerHTML = d3;
}

function rotateImage() {
  document.getElementById("die1").classList.toggle("dice-animation");
  document.getElementById("die2").classList.toggle("dice-animation");
  document.getElementById("die3").classList.toggle("dice-animation");
}
  //----------------------------------------------end of dice--------------------------------------------//

/*const firstName = document.getElementsByName('username')
const firstName
const firstName
const firstName
*/

/* Calculator */
"use strict";

var input = document.getElementById('cal-input'), // input/output button
  number = document.querySelectorAll('.cal-numbers div'), // number buttons
  operator = document.querySelectorAll('.cal-operators div'), // operator buttons
  result = document.getElementById('cal-result'), // equal button
  clear = document.getElementById('cal-clear'), // clear button
  resultDisplayed = false; // flag to keep an eye on what output is displayed

// adding click handlers to number buttons
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function(e) {

    // storing current input string and its last character in variables - used later
    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];

    // if result is not diplayed, just keep adding
    if (resultDisplayed === false) {
      input.innerHTML += e.target.innerHTML;
    } else if (resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
      // if result is currently displayed and user pressed an operator
      // we need to keep on adding to the string for next operation
      resultDisplayed = false;
      input.innerHTML += e.target.innerHTML;
    } else {
      // if result is currently displayed and user pressed a number
      // we need clear the input string and add the new input to start the new opration
      resultDisplayed = false;
      input.innerHTML = "";
      input.innerHTML += e.target.innerHTML;
    }

  });
}

// adding click handlers to number buttons
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function(e) {

    // storing current input string and its last character in variables - used later
    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];

    // if last character entered is an operator, replace it with the currently pressed one
    if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
      var newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
      input.innerHTML = newString;
    } else if (currentString.length == 0) {
      // if first key pressed is an opearator, don't do anything
      console.log("enter a number first");
    } else {
      // else just add the operator pressed to the input
      input.innerHTML += e.target.innerHTML;
    }

  });
}

// on click of 'equal' button
result.addEventListener("click", function() {

  // this is the string that we will be processing eg. -10+26+33-56*34/23
  var inputString = input.innerHTML;

  // forming an array of numbers. eg for above string it will be: numbers = ["10", "26", "33", "56", "34", "23"]
  var numbers = inputString.split(/\+|\-|\×|\÷/g);

  // forming an array of operators. for above string it will be: operators = ["+", "+", "-", "*", "/"]
  // first we replace all the numbers and dot with empty string and then split
  var operators = inputString.replace(/[0-9]|\./g, "").split("");

  console.log(inputString);
  console.log(operators);
  console.log(numbers);
  console.log("----------------------------");

  // now we are looping through the array and doing one operation at a time.
  // first divide, then multiply, then subtraction and then addition
  // as we move we are alterning the original numbers and operators array
  // the final element remaining in the array will be the output

  var divide = operators.indexOf("÷");
  while (divide != -1) {
    numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
    operators.splice(divide, 1);
    divide = operators.indexOf("÷");
  }

  var multiply = operators.indexOf("×");
  while (multiply != -1) {
    numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
    operators.splice(multiply, 1);
    multiply = operators.indexOf("×");
  }

  var subtract = operators.indexOf("-");
  while (subtract != -1) {
    numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
    operators.splice(subtract, 1);
    subtract = operators.indexOf("-");
  }

  var add = operators.indexOf("+");
  while (add != -1) {
    // using parseFloat is necessary, otherwise it will result in string concatenation :)
    numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
    operators.splice(add, 1);
    add = operators.indexOf("+");
  }

  input.innerHTML = numbers[0]; // displaying the output

  resultDisplayed = true; // turning flag if result is displayed
});

// clearing the input on press of clear
clear.addEventListener("click", function() {
  input.innerHTML = "";
})

/* ^ Calculator */
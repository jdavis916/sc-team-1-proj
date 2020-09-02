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

if(btnSubmit !== null){
btnSubmit.addEventListener('click', function(e){
  e.preventDefault();
  check();

  });
}

function check(){
  var formSubmit = true;
  if(validateUserName() === false){
    formSubmit = false;
  }
  if(validateFirstName() === false){
    formSubmit = false;
  }
  if(validateLastName() === false){
    formSubmit = false;
  }
  if(validateEmail() === false){
    formSubmit = false;
  }
  if(validatePassword() === false){
    formSubmit = false;
  }
  if(retypePassword() === false){
    formSubmit = false;
  }
  if(validateDateOfBirth() === false){
    formSubmit = false;
  }
console.log(formSubmit);
console.log(formSubmit == true);
console.log(formSubmit === true);
  if(formSubmit){
    form.submit();
  }
}

function validateUserName(){
  console.log('validateFirstNameClicked');
  if(checkForSpaces(userName)) return false;
  if(isEmpty(userName)) return false;
  if(!checkLength(userName, 6, 20, "Username")) return false;
  return true;
}
function validateFirstName(){
  console.log('validateFirstNameClicked');
  if(checkForSpaces(firstName)) return false;
  if(isEmpty(firstName)) return false;
  if(!checkIfOnlyLetters(firstName)) return false;
  if(!checkLength(firstName, 2, 20, "First Name")) return false;
  return true;
}
function validateLastName(){
  console.log('validateLastNameClicked');
  console.log(lastName);
  console.log(typeof lastName);
  if(checkForSpaces(lastName)) return false;
  if(isEmpty(lastName)) return false;
  if(!checkIfOnlyLetters(lastName)) return false;
  if(!checkLength(lastName, 2, 20, "Last Name")) return false;
  return true;
}
function validateEmail(){
  console.log('validateEmailClicked');
  if(checkForSpaces(email)) return false;
  if(isEmpty(email)) return false;
  if(!checkEmail(email)) return false;
  return true;
}
function validatePassword(){
  console.log('validatePasswordClicked');
  if(checkForSpaces(password)) return false;
  if(isEmpty(password)) return false;
  if(!checkLength(password, 8, 30, "Password"));
  return true;
}
function retypePassword(){
  console.log('retypePasswordClicked');
  if(checkForSpaces(confirmPass)) return false;
  if(isEmpty(confirmPass)) return false;
  if(!checkConfirmPass(confirmPass)) return false;
  return true;
}
function validateDateOfBirth(){
  console.log('validateDateOfBirthClicked');
  if(checkForSpaces(dob)) return false;
  if(isEmpty(dob)) return false;
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
    console.log(field.value);
    if(/^[a-zA-Z ]+$/i.test(field.value)){
        setValid(field);
        return true;
    }else{
        console.log(field);
        setInvalid(field);
        return false;
    }
}

function checkLength(field, minlen, maxlen, name) {
  var value = field.value;
  console.log(value);
  if (value.length < minlen || value.length > maxlen) {
    alert(name+" must be in between " +minlen+ " to "+maxlen+" charcters long.")
    setInvalid(field);
    return false; 
  }
  console.log(value.length);
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
  console.log(pass);
  console.log(confirm);
  console.log(pass != confirm);
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
if(result !== null){
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
}
// clearing the input on press of clear
if(clear !== null){
clear.addEventListener("click", function() {
  input.innerHTML = "";
})
}
/* ^ Calculator */
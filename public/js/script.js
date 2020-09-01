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
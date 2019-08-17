// JavaScript Document

//create some variables to represent the objects we want to work with 
const form = document.querySelector('form'); 
const email = document.getElementById('email'); 
const error = document.querySelector('.error'); 
const fName = document.getElementById('fName');
const lName = document.getElementById('lName');
const age = document.getElementById('age');
const city = document.getElementById('city');

email.addEventListener("input", function (event) {
  //each time the user types something, we check if the email field is valid
  if(email.validity.valid) {
    //in the case that there is an error message visible, if the field is valid, we remove the error message 
    error.innerHTML = ""; 
    error.className = "error"; 
  }
}, false);

fName.addEventListener("input", function (event) {
  //Remove error message if first name is valid
  if(fName.validity.valid){
    error.innerHTML = ""; 
    error.className = "error"; 
  }
}, false);

lName.addEventListener("input", function (event) {
  //Remove error message if last name is valid
  if(lName.validity.valid){
    error.innerHTML = ""; 
    error.className = "error"; 
  }
}, false);

age.addEventListener("input", function (event) {
  //Remove error message if AGE is valid
  if(age.validity.valid){
    error.innerHTML = ""; 
    error.className = "error"; 
  }
}, false);

city.addEventListener("input", function (event) {
  //location is not empty
  if(city.value != ""){
    error.innerHTML = ""; 
    error.className = "error"; 
  }
}, false);


form.addEventListener("submit", function (event) {
  //each time the user tries to send the form, we check that the email field is valid 
  if(!email.validity.valid) {
    error.innerHTML = "Hey, Please provide a valid email!"; 
    error.className = "error active"; 
    event.preventDefault();  
  }

  if(!fName.validity.valid){
    error.innerHTML = "Hey, First Name should only contain letters and not be empty!"; 
    error.className = "error active"; 
    event.preventDefault(); 
  }

  if(!lName.validity.valid){
    error.innerHTML = "Hey, Last Name should only contain letters and not be empty!"; 
    error.className = "error active"; 
    event.preventDefault(); 
  }

  if(!age.validity.valid){
    error.innerHTML = "Hey, Age should not be empty and only contain numbers between 10-99!"; 
    error.className = "error active"; 
    event.preventDefault(); 
  }

  if(location.value == ""){
    error.innerHTML = "Hey, Please provide location!"; 
    error.className = "error active"; 
    event.preventDefault(); 
  }

}, false); 

///////////////////////////////////////////////

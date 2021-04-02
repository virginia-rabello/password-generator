// Assignment code here

// This function request the password's length to the user
var passwordLength = function(){
  var length = 0;
  var endLoop = false;
  while (endLoop === false){
    length = prompt("How many characters would you like in your password? Choose a number between 8 and 128.");
    if (length === "" || length === null || length < 8 || length > 128){
      alert("You forgot to type a number or typed a invalid number");
    }
      else {
          endLoop = true;
        }
  }
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

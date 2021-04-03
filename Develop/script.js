//This is a class created for the ranges values
class ranges {
  constructor(min, max){
    this.min = min;
    this.max = max;
  }
};

//Class to store data argument for generate password function
class genData {
  constructor(rangeNum, range1, range2, range3, range4){
    this.rangeNum = rangeNum;
    this.range1 = range1;
    this.range2 = range2;
    this.range3 = range3;
    this.range4 = range4;
  }
};
//These constants are the ranges of the caracters for the ASCII table
  const rangeU = new ranges(65, 90);
  const rangeL = new ranges(97,122);
  const rangeN = new ranges(48,57);
  const rangeS1 = new ranges(32, 47);
  const rangeS2 = new ranges(58, 64);
  const rangeS3 = new ranges(91, 96);
  const rangeS4 = new ranges(123, 126);
  const rangeNS = new ranges(32, 64);
  const rangeLS = new ranges(91, 126);
  const rangeAll = new ranges(32, 126);

// This function gets the password's length chosen by the user
var getPasswordLength = function(){
  var length = document.getElementById("password-length").value;
    //Alert user if no value for the password's length is chosen
     if (length === "" || length === null || length >128 || length < 1){
      alert("You forgot to choose a number or typed a invalid number");
      location.reload(true);
      }
      else {
         return length;
        }
};
// Function to generate a random number in a range
var genRandomNum = function(min, max) {
  var value = Math.floor(Math.random() * (max - min) + min);

  return value;
};

//This function checks which checkboxes are checked and declares a variable with the information
var checkboxComb = function(){
  var upp = document.getElementById("uppercase").checked;
  var low = document.getElementById("lowercase").checked;  
  var num = document.getElementById("numeric").checked;
  var spc = document.getElementById("special-char").checked;

  if(!upp && !low && !num && !spc){
    alert("You have to chose and check at least one type of character!");
    location.reload(true);
  }
  if(!upp && !low && !num && spc){
    var data = new genData(4, rangeS1, rangeS2, rangeS3, rangeS4);
  }
  if(!upp && !low && num && !spc){
    var data = new genData(1, rangeN, null, null, null);
  }
  if(!upp && !low && num && spc){
    var data = new genData(3, rangeNS, rangeS3, rangeS4, null);
  }
  if(!upp && low && !num && !spc){
    var data = new genData(1, rangeL, null, null, null);
  }
  if(!upp && low && spc){
    var data = new genData(2, rangeNS, rangeLS, null, null);
  }
  if(!upp && low && num && !spc){
    var data = new genData(2, rangeN, rangeL, null, null);
  }
  if(upp && !low && !num && !spc){
    var data = new genData(1, rangeU, null, null, null);
  }
  if(upp && !low && !num && spc){
    var data = new genData(4, rangeS1, rangeS2, rangeU, rangeS4);
  }
  if(upp && !low && num && !spc){
    var data = new genData(2, rangeU, rangeN, null, null);
  }
  if(upp && !low && num && spc){
    var data = new genData(4, rangeNS, rangeU, rangeS3, rangeS4);
  }
  if(upp && low && !num && !spc){
    var data = new genData(2, rangeU, rangeL, null, null);
  }
  if(upp && low && !num && spc){
    var data = new genData(4, rangeS1, rangeS2, rangeU, rangeLS);
  }
  if(upp && low && num && !spc){
    var data = new genData(3, rangeN, rangeU, rangeL, null);
  }
  if(upp && low && num && spc){
    var data = new genData(1, rangeAll, null, null, null);
  }
  return data;
};

//This function generates the password
var generatePassword = function(length,data) {
  var password = "";
  //If the data has more than 2 ranges of characters it choses a randomic character in a randomic range
    if(data.rangeNum > 1){
      for(i = 0; length > i; i++){
        var randomRange = genRandomNum(1, data.rangeNum+1);
        console.log(randomRange);
        if(randomRange === 1){
          var randomNum = genRandomNum(data.range1.min, data.range1.max+1);
        }
        if(randomRange === 2){
          var randomNum = genRandomNum(data.range2.min, data.range2.max+1);
        }
        if(randomRange === 3){
          var randomNum = genRandomNum(data.range3.min, data.range3.max+1);
        }
        if(randomRange === 4){
          var randomNum = genRandomNum(data.range4.min, data.range4.max+1);
        }
          password = password + String.fromCharCode(randomNum);
      }
    }
    else{
  for(i=0;i<length;i++){
    var randomNum = genRandomNum(data.range1.min, data.range1.max + 1);
    password = password + String.fromCharCode(randomNum);
  }
  }
  return password;
 };
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var lenPass = getPasswordLength();
  var dataPass = checkboxComb();
  console.log(dataPass);
  var password = generatePassword(lenPass, dataPass);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




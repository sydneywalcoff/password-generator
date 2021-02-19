// Assignment code here
var generatePassword = function() {
  var accepted = [];
  var password = [];
  
  // password length
  var getPasswordLength = function() {
    var length = prompt("How many characters do you want your password to contain?");
    if(length < 8 || length > 128) {
      alert("Please enter a number between 8 and 128");
      return getPasswordLength();
    }
    return length;
  }
  length = getPasswordLength();

  var lowercase = confirm("Would you like to include lowercase letters?");
  var lowercaseChars = 'abcedfghijklmnopqrstuvwxyz';
  var uppercase = confirm("Would you like to include uppercase letters?");
  var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var number = confirm("Would you like to include numbers?");
  var numberChars = '0123456789';
  var special = confirm("Would you like to include special characters?");
  var specialChars = '!@#$%^&*()+-';

  var getDesiredCharacters = function() {
    // lowercase
    lowercaseChars = lowercaseChars.split('');
    if(lowercase) {
      accepted.push.apply(accepted, lowercaseChars);
    }

    // uppercase
    uppercaseChars = uppercaseChars.split('');
    if(uppercase) {
      accepted.push.apply(accepted, uppercaseChars);
    }

    // numeric
    
    numberChars = numberChars.split('');
    if(number) {
      accepted.push.apply(accepted, numberChars);
    }

    // special characters
    specialChars = specialChars.split('');
    if(special) {
      accepted.push.apply(accepted, specialChars);
    }

    if(!special && !number && !uppercase && !lowercase) {
      alert("Please select at least one type of value for your password.");
      return criteria();
    }

    return lowercase && uppercase && number && special;
  };

  console.log(getDesiredCharacters());

  var validation = function(charType, charList) {
    if(charType) {
      matchFound= false;
      for(let i = 0; i < length; i++) {

        for (let j=0; j < charList.length; j++) {
          if(password[i] === charList[j]) {
            matchFound = true;
            return matchFound;
          }
        }
      }
      if(!matchFound) {
        createPassword();
      }
    }
  };

  var inputValidation = function() {
    console.log(validation(lowercase, lowercaseChars));
    console.log(validation(uppercase, uppercaseChars));
    console.log(validation(number, numberChars));
    console.log(validation(special, specialChars));
  };

  
  var createPassword = function() {
    password = [];
    for(let i=0; i < length; i++) {
      randomNum = Math.floor(Math.random() * accepted.length);
      randomDigit = accepted[randomNum];
      password.push(randomDigit);
    }
    inputValidation();
    console.log(`password: ${password}`);
  };

  createPassword();
  
  
  password = password.join("");
  return password;
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

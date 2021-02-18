// Assignment code here
var generatePassword = function() {
  var accepted = [];
  var password = [];
  var matchFound;

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

  // lowercase
  var lowercase = confirm("Would you like to include lowercase letters?");
  var lowercaseChars = 'abcedfghijklmnopqrstuvwxyz';
  lowercaseChars = lowercaseChars.split('');
  if(lowercase) {
    accepted.push.apply(accepted, lowercaseChars);
  }

  // uppercase
  var uppercase = confirm("Would you like to include uppercase letters?");
  var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  uppercaseChars = uppercaseChars.split('');
  if(uppercase) {
    accepted.push.apply(accepted, uppercaseChars);
  }

  // numeric
  var number = confirm("Would you like to include numbers?");
  var numberChars = '0123456789';
  numberChars = numberChars.split('');
  if(number) {
    accepted.push.apply(accepted, numberChars);
  }

  // special characters
  var special = confirm("Would you like to include special characters?");
  var specialChars = '!@#$%^&*()+-';
  specialChars = specialChars.split('');
  if(special) {
    accepted.push.apply(accepted, specialChars);
  }

  if(!special && !number && !uppercase && !lowercase) {
    alert("Please select at least one type of value for your password.");
    return criteria();
  }

  
  var createPassword = function() {
    password = [];
    for(let i=0; i < length; i++) {
      randomNum = Math.floor(Math.random() * accepted.length);
      randomDigit = accepted[randomNum];
      password.push(randomDigit);
    }
  }

  createPassword();

  var inputvalidation = function() {
    if(lowercase) {
      // nested for loop to cycle through each item in the arrays to look for matches
      for (let i=0; i < length; i++) {
        matchFound = false;

        for (let j=0; j < lowercaseChars.length; j++) {
          if(password[i] == lowercaseChars[j]) {
            matchFound = true;
            break;
          }
        }
        if(!matchFound) {
          createPassword();
        }
      }
    }

    if(uppercase) {
      // nested for loop to cycle through each item in the arrays to look for matches
      for (let i=0; i < length; i++) {
        matchFound = false;

        for (let j=0; j < uppercaseChars.length; j++) {
          if(password[i] == uppercaseChars[j]) {
            matchFound = true;
            break;
          }
        }
        return matchFound;
        
      }
      if(!matchFound) {
        createPassword();
      }
    }

    if(number) {
      // nested for loop to cycle through each item in the arrays to look for matches
      for (let i=0; i < length; i++) {
        matchFound = false;

        for (let j=0; j < numberChars.length; j++) {
          if(password[i] == numberChars[j]) {
            matchFound = true;
            break;
          }
        }
        return matchFound;
      }
      if(!matchFound) {
        createPassword();
      }
    }

    if(special) {
      // nested for loop to cycle through each item in the arrays to look for matches
      for (let i=0; i < length; i++) {
        matchFound = false;

        for (let j=0; j < specialChars.length; j++) {
          if(password[i] == specialChars[j]) {
            matchFound = true;
            break;
          }
        }
        return matchFound;
      }

      if(!matchFound) {
        createPassword();
      }
      
      
    }
  }
  inputvalidation();
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

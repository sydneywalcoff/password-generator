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

  var criteria = function() {
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
    var numbers = confirm("Would you like to include numbers?");
    var numberChars = '0123456789';
    numberChars = numberChars.split('');
    if(numbers) {
      accepted.push.apply(accepted, numberChars);
    }

    // special characters
    var special = confirm("Would you like to include special characters?");
    var specialChars = '!@#$%^&*()+-';
    specialChars = specialChars.split('');
    if(special) {
      accepted.push.apply(accepted, specialChars);
    }

    if(!special && !numbers && !uppercase && !lowercase) {
      alert("Please select at least one type of value for your password.");
      return criteria();
    }
  }
  criteria();

  for(let i=0; i < length; i++) {
    randomNum = Math.floor(Math.random() * accepted.length);
    randomDigit = accepted[randomNum];
    password.push(randomDigit);
  }
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

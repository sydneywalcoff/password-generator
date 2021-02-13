// Assignment code here
var generatePassword = function() {
  var accepted = [];
  
  // password length
  var passwordLength = prompt("How many characters do you want your password to contain?");
  if(passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a number between 8 and 128");
  }

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
    accepted.push.apply(accepted, specialChars);;
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

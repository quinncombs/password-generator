// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength;
var lowercaseResponse;
var uppercaseResponse;
var numberResponse;
var specialResponse;
var allChoices;

var lowercase= "abcdefghijklmnopqrstuvwxyz"
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "[", "]", "_", "`", "{", "|", "}", "~"];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
     var password = generatePassword();
     var passwordText = document.querySelector("#password");
     passwordText.value = password;
}

function generatePassword() {
     //ask for user input
     passwordLength = prompt("Choose between 8 and 128 characters.");
     console.log("Your password will be " + passwordLength + " characters long.");
            // must enter a valid number or you cannot go further.
            if (passwordLength < 8 || passwordLength > 128) {
             passwordLength = prompt("Number must be between 8 and 128.");
             console.log("Your password will be " + passwordLength + " characters long.");
           } else  {
           //ask for user input
          lowercaseResponse = confirm("Do you want any lowercase characters?");
          console.log("Lowercase letters: " + lowercaseResponse);

          uppercaseResponse = confirm("Do you want any uppercase letters?");
          console.log("Uppercase letters: " + uppercaseResponse);
          
          numberResponse = confirm("Do you want numbers?");
          console.log("Numbers: " + numberResponse);

          specialResponse = confirm("Do you want special characters?");
          console.log("Special characters: " + specialResponse);
           }

     if(lowercaseResponse) {
          allChoices += lowercase;
     } 
     if(uppercaseResponse) {
          allChoices += uppercase;
     } 
     if(numberResponse) {
          allChoices += number;
     } 
     if(specialResponse) {
          allChoices += specialChar;
     }
     if(!lowercaseResponse && !uppercaseResponse && !numberResponse && !specialResponse) {
          alert("You must choose at least one parameter.")
 
     }
     var password = "";
      for (var i = 0; i < passwordLength; i++) {
          var random = Math.floor(Math.random() * allChoices.length);
     password += allChoices[random];
     console.log(password);
    }
    return password
 }


// Chap 21-25
// Ques1
// let firstName = prompt("Enter your name:");
// let lastName = prompt("ENter your last name:");
// let fullName = firstName + " " + lastName;
// alert("Hello" + fullName);
// Ques2
// let mobile = prompt("ENter your favorite mobile model:");
// document.write("My favorite phone is: " + mobile + "<br>");
// document.write("length of string: " + mobile.length);
// Ques3
// let str = "Pakistani";
// document.write("Index of 'n': "+ str.indexOf('n'));
// Ques4
// let str = "Hello World";
// document.write("Last index of 'l' : " + str.lastIndexOf('l'));
// Ques5
// let str = "Pakistani";
// document.write("Character at index 3: " + str.charAt(3));
// Ques6
// let firstName = prompt("Enter your first name:");
// let lastName = prompt("Enter your last name:");
// let fullName = firstName.concat(" ", lastName);
// alert("Hello " + fullName);
// Ques7
// let city = "Hyderabad";
// let replaced = city.replace("Hyder", "Islam");
// document.write("After replacement: " + replaced);
// Ques8
// let message = "Ali and Sami are best friend. They play cricket and football together.";
// let updated = message.replace(/and/g, "&");
// document.write(updated);
// Ques9
// let str = "472";
// let num = Number(str);
// document.write("Value: " + str + " (Type: " + typeof str + ")<br>");
// document.write("Value: " + num + " (Type: " + typeof num + ")");
// Ques10
// let input = prompt("Enter some text:");
// document.write("Upper case: " + input.toUpperCase());
// Ques11
// let input = prompt("Enter a word:");
// let titleCase = input[0].toUpperCase() + input.slice(1).toLowerCase();
// document.write("Title Case: " + titleCase);
// Ques12
// let num = 35.36;
// let str = num.toString().replace(".", "");
// document.write("Result: " + str);
// Ques13
// let username = prompt("Enter your username:");
// let invalidChars = ['@', '.', ',', '!'];
// let isValid = true;

// for (let char of username) {
//   if (invalidChars.includes(char)) {
//     isValid = false;
//     break;
//   }
// }

// if (!isValid) {
//   alert("Please enter a valid username without special characters [@ . , !]");
// } else {
//   alert("Username accepted");
// }
// Ques14
// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userInput = prompt("Enter item to search:").toLowerCase();
// let found = false;

// for (let i = 0; i < A.length; i++) {
//   if (A[i].toLowerCase() === userInput) {
//     found = true;
//     document.write(`${userInput} is available at index ${i}`);
//     break;
//   }
// }

// if (!found) {
//   document.write(`Sorry, ${userInput} is not available.`);
// }
// Ques15
// let password = prompt("Enter your password:");

// if (
//   password.length < 6 ||
//   !isNaN(password[0]) ||
//   !/[a-zA-Z]/.test(password) ||
//   !/[0-9]/.test(password)
// ) {
//   alert("Invalid password. Must contain letters, numbers, and not start with a number.");
// } else {
//   alert("Password accepted.");
// }
// Ques16
// let university = "University of Karachi";
// let chars = university.split("");
// for (let char of chars) {
//     document.write(char + "<br>");
// }
// Ques17
// let input = prompt("Enter some text:");
// document.write("Last character: " + input.charAt(input.length - 1));
// Ques18
// let text = "The quick brown fox jumps over the lazy dog";
// let count = text.toLowerCase().split("the").length - 1;
// document.write("Occurrences of 'the': " + count);
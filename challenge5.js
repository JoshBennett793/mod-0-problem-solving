/* 
This code functionality should loop through a string and print the
same string with the first letter of every word of the string capitalized.
*/

// Psuedocode:
/* 
Define string variable to capitalize.

Split each word of string into their own elements inside an array (.split())

Define a new empty array that will have each word pushed into

Loop through array of words after the split method has been performed
on the string
	For each string element of the array, uppercase the first letter (.charAt(0).toUpperCase()) 
	and concatenate it with the rest of the string (string.slice(1)), assigning that to a 
	new string variable

	Push that new string into empty array (.push())

After the loop has finished,
Console log the newArray, after having each string pushed back into it, and joining the string
elements together with spaces between each (.join(' '))
*/

var string = 'Turing is the best';

var splitString = string.split(' ');
var newArray = [];

for (var i = 0; i < splitString.length; i++) {
  var newString =
    splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1);
  newArray.push(newString);
}

console.log(newArray.join(' '));

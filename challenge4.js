/*
The code functionality should sort an array of strings in alphabetical
order, loop through that array, and log a unique string to the console
with each element of the array interpolated in. 
*/

// Pseudocode:
/*
Define an array of strings corresponding with 
destinations I'd like to visit.

Use the sort() method to modify the original array, 
sorting it in alphabetical order.

Loop through each element in the array.
	Log a unique string to the console with each element interpolated in.

*/


var destinations = ['Italy', 'Ireland', 'Norway', 'Bahamas', 'Fiji'];

destinations.sort();

for (var i = 0; i < destinations.length; i++) {
  console.log(`The next place I want to visit is ${destinations[i]}`);
}


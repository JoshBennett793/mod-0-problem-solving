/* 
This function should take in a number representing yearly income, 
determine the applicable tax rate for that income, and 
*/

// Pseudocode:
/* Define function named calculateTaxes that accepts a number parameter
representing income

initialize a taxRate variable

write an if, else if, else block that checks how much the income is
	assign the corresponding tax rate depending on how much income is
	return the income after multiplying it by the tax rate and fixing
	the number to 2 decimal places (toFixed(2))
*/


function calculateTaxes(income) {
	var taxRate;
  if (income > 215950) {
		taxRate = .35;
    return (income * taxRate).toFixed(2);
  } else if (income > 170050) {
		taxRate = .32;
    return (income * taxRate).toFixed(2);
  } else if (income > 89075) {
		taxRate = .24;
    return (income * taxRate).toFixed(2);
  } else if (income > 41775) {
		taxRate = .22;
    return (income * taxRate).toFixed(2);
  } else if (income > 10275) {
		taxRate = .12;
    return (income * taxRate).toFixed(2);
  } else {
		taxRate = .10;
    return (income * taxRate).toFixed(2);
  }
}

console.log(calculateTaxes(300000));
console.log(calculateTaxes(37000));
console.log(calculateTaxes(5000));
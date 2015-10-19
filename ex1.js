
// Write a program to calculate the total price of your phone
// purchase. You will keep purchasing phones (hint: loop!) until you
// run out of money in your bank account. You’ll also buy accessories
// for each phone as long as your purchase amount is below your mental
// spending threshold.

// After you’ve calculated your purchase amount, add in the tax, then
// print out the calculated purchase amount, properly formatted.

// Finally, check the amount against your bank account balance to see
// if you can afford it or not.

// You should set up some constants for the “tax rate,” “phone price,”
// “accessory price,” and “spending threshold,” as well as a variable
// for your “bank account balance.”

// You should define functions for calculating the tax and for
// formatting the price with a “$” and rounding to two decimal places.

const tax_rate = 0.08;
const phone_price = 232.11;
const accessory_price = 10.99;
const spending_threshold = 725.00;

var acct_bal = 1000.00;

function format(amt) {
  return '$' + amt.toFixed(2);
}

function withTax(amt) {
  return amt * (1 + tax_rate);
}


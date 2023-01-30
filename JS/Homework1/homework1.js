/*Exercise 2 Write a JavaScript program that will calculate the price of 30 Phones, where the price of one phone is $119.95 and the tax rate is 5%.*/
console.log("Exercise 2");

let phone_price = 119.95;
console.log("The price of a single phone without tax rate is ", phone_price);

let tax_rate = 0.05;
console.log("The tax rate for a single phone is ", tax_rate*100, "%");

let total_phone_price = phone_price +=(phone_price * tax_rate);
console.log("The total price (price + tax) for a single phone is", total_phone_price);

/*If we don't plan to use the information about the total prices further in the code, we can write the total prices for 30 phones directly in the console to save memory:
console.log("The total price for 30 phones without tax is ", phone_price * 30);
console.log("The total price for 30 phones is ", 30 * total_phone_price);

Otherwise we can write the code as follows:
*/
let phone_price30 = phone_price * 30;
console.log("The total price for 30 phones without tax is ", phone_price30);

let total_phone_price30 = 30 * total_phone_price;
console.log("The total price for 30 phones is ", total_phone_price30);

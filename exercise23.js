/*. More Conditional Tests:
You don’t have to limit the number of tests you create to 10. If you want to try more
comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal
to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in an array
• Test whether an item is not in an array*/
//equality and inequality:
let myName = "Iqra";
console.log(myName == "Iqra"); //true
console.log(myName == "iqra"); //false
let number = 10;
console.log(number == 10); //true
console.log(number !== 10); //false
let myNum = 6;
console.log(myNum == 6); //true      equal to
console.log(myNum !== 6); //false     not equal
console.log(myNum > 6); //false    greater then
console.log(myNum >= 6); //true       greater then equal to
console.log(myNum < 6); //false     less then
console.log(myNum <= 6); //true       less then equal to
//and &&  and or ||
let Number1 = 5;
let Number2 = 8;
console.log(Number1 == 5 && Number2 == 8); //true
console.log(Number1 == 5 || Number2 == 8); //true
console.log(Number1 == 2 && Number2 == 8); //false
console.log(Number1 == 3 || Number2 == 5); //false
//testing array:
let myArray = [2, 3, "Ali"];
let myString = "Saad";
console.log(Array.isArray(myArray));
console.log(Array.isArray(myString));
export {};

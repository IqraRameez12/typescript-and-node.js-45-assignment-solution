/*store a person's name in a variable,and then print that person's
name in a lowerCase,upperCase and titleCase*/
let personName = "Mr Eric";
//upperCase
console.log(personName.toUpperCase());
//lowerCase:
console.log(personName.toLocaleLowerCase());
//titleCase:"
let firstLetter = personName.charAt(0).toUpperCase();
let secondLetter = personName.slice(1).toLowerCase();
let titleCase = firstLetter + secondLetter;
console.log(titleCase);
export {};

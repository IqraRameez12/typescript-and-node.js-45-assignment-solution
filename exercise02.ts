/*store a person's name in a variable,and then print that person's 
name in a lowerCase,upperCase and titleCase*/
let personName:string="Mr Eric";

//upperCase
console.log(personName.toUpperCase());


//lowerCase:
console.log(personName.toLocaleLowerCase());


//titleCase:"
let firstLetter:string=personName.charAt(0).toUpperCase();

let secondLetter:string=personName.slice(1).toLowerCase();

let titleCase:string=firstLetter+secondLetter;

console.log(titleCase);
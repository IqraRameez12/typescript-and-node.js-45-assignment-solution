/*store a person's name and include some whitespace characters at the begining and end the name.
make sure you use each character combination,"\t"and "\n", at least once.print the name once,
so the whitespace around the name is displayed. then print the name after striping the whitespace.
*/
// //White space:
const myName = "  Eric  ";
console.log(myName);
console.log(myName.trim());
//  \t used for tab / space:
const myName1 = "\tEric";
console.log(myName1);
//  \n used for  new line:
const myName2 = "\nEric";
console.log(myName2);
export {};

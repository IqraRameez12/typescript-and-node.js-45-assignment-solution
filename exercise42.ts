/*Unchanged Magicians: 
Start with your work from Exercise 40. Call the function make_great() with a copy of the array 
of magicians’ names. Because the original array will be unchanged, return the new array and store it 
in a separate array. Call show_magicians() with each array to show that you have one array of the 
original names and one array with the Great added to each magician’s name.
 */

let magiciansNames2 = ["azad", "shahdab", "murad", "fakhir"];

//making a copy of an array:
let copyOfmagiciansNames=[...magiciansNames2] 

function show_magicians(greet:string){
    let withGreetings="";

for(let item of copyOfmagiciansNames){
    withGreetings+=greet+" "+item+"\n"
}
return withGreetings;

}

let myGreeting =show_magicians("the great magician")

let myArray=myGreeting.split("\n")

console.log(myArray);
console.log(magiciansNames2);
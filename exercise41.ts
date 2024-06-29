/* Great Magicians: 
Start with a copy of your program from Exercise 41. Write a function called make_great() that 
modifies the array of magicians by adding the phrase the Great to each magician’s name. Call 
show_magicians() to see that the list has actually been modified */

let magiciansNames:string[]=["azad","shahdab","murad","fakhir"];

function show_magicians(greet:string){
for( let items of magiciansNames){
console.log(greet,items);
}
}


show_magicians("hello Mr.",)
show_magicians("The Great Magician",)
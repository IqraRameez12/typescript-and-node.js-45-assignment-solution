/*More Guests:
You just found a bigger dinner table, so now more space is available. Think of three more guests
to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing
people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list*/
let myGuest = ["saad", "tayyab", "hassan", "raza"];
//add the begining:
myGuest.unshift("zaid");
console.log(myGuest);
//'zaid', 'saad', 'tayyab', 'hassan', 'raza' 
//add the middle:
myGuest.splice(2, 0, "muzzammil");
console.log(myGuest);
//add the end:
myGuest.push("abdul");
console.log(myGuest);
//add for loop:
for (let i = 0; i < myGuest.length; i++) {
    console.log(`mr.${myGuest[i]} you are invited to my dinner at 8pm on saturday`);
}
export {};

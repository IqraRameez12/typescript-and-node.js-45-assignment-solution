/*Shrinking Guest List:
You just found out that your new dinner table won’t arrive in time for the dinner, and you have
space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can
invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you
pop a name from your list, print a message to that person letting them know you’re sorry you can’t
invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you
actually have an empty list at the end of your program*/
//array list:
let myGuest = ["saad", "tayyab", "hassan", "raza", "zaid", "muzzammil", "abdul"];
//message:
console.log("table is not availible for the dinner i can invite only two person");
//pop method:
let myFriend1 = myGuest.pop();
console.log(`sorry Mr.${myFriend1} you are not invited`);
let myFriend2 = myGuest.pop();
console.log(`sorry Mr.${myFriend2} you are not invited`);
let myFriend3 = myGuest.pop();
console.log(`sorry Mr.${myFriend3} you are not invited`);
let myFriend4 = myGuest.pop();
console.log(`sorry Mr.${myFriend4} you are not invited`);
let myFriend5 = myGuest.pop();
console.log(`sorry Mr.${myFriend5} you are not invited\n`);
// for loop:
for (let i = 0; i < myGuest.length; i++) {
    console.log(`Mr.${myGuest[i]} you are still invited `);
}
//pop method:
myGuest.pop();
myGuest.pop();
console.log(myGuest);
export {};

/*Changing Guest List:
You just heard that one of your guests can’t make the dinner, so you need to send out a new
set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating
the name of the guest who can’t make it*/
let myGuest = ["saad", "tayyab", "hassan", "raza"];
console.log(`due to some personal reason Mr.${myGuest[3]} will not come on my dinner`);
myGuest[3] = "hasnain";
console.log(`new list of my friends who is coming to dinner.`);
for (let i = 0; i < myGuest.length; i++) {
    console.log(`${i + 1} ${myGuest[i]}`);
}
export {};

/* Guest List: 
If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that 
includes at least three people you’d like to invite to dinner. Then use your list to print a message to 
each person, inviting them to dinner.*/


let myGuestList:string [] = ["saad","tayyab","hassan"];

for(let i=0; i<myGuestList.length; i++){
    console.log (`Mr.${myGuestList[i]} you are invited to my dinner on sunday.  `);

}
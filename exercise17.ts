/* Seeing the World: 
Think of at least five places in the world you’d like to visit.
• Store the locations in an array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been 
changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/


let seePlaces:string[]=["makkah","madina","naran","sawwat","magalla hills","kagan"];
//printing original array:
console.log(seePlaces);

// alphabetical order:
// make a copy of original array:
let copyOfArray=seePlaces.slice();
let sortedArray=copyOfArray.sort();
console.log(sortedArray);

//printing original array:
console.log(seePlaces);

//reversing original array:
//first we have make a copy of original array:
let copyOfArray2=seePlaces.slice();
let reverseOfArray=copyOfArray2.reverse();
console.log(reverseOfArray);

//printing original array:
console.log(seePlaces);

//reverse original array:
let reverseArray2=seePlaces.reverse();
console.log(reverseArray2);

let againReverse=reverseArray2.reverse();
console.log(againReverse);


let sortedOriArray=seePlaces.sort();
console.log(sortedOriArray);

//sorting original array:
let reverseSortArray=sortedOriArray.reverse();
console.log(reverseSortArray);


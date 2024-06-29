/* Favorite Fruit:
Make an array of your favorite fruits, and then write a series of independent if statements that
check for certain fruits in your array.
• Make an array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit
is in your array, the if block should print a statement,
such as You really like bananas*/
let FavouriteFruit = ["apple", "mango", "orange"];
/*if(FavouriteFruit.includes("banana")){
   console.log("you really like to eat banana");
}
else if(FavouriteFruit.includes("apple")){
   console.log("you really like to eat apple");
}

else{
   console.log("fruits are not available");
}*/
let availableFruits = "mango";
if (FavouriteFruit.includes("mango")) {
    console.log(`you really like to eat ${availableFruits}`);
}
else if (availableFruits.includes("apple")) {
    console.log("you really like to eat apple");
}
else {
    console.log("fruits are not available");
}
export {};

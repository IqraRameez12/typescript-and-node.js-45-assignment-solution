/*Cities:
Write a function called describe_city() that accepts the name of a city and its country. The
function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the
country a default value. Call your function for three different cities, at least one of which is not in the
default country. */
function describe_city(city, country = "pakistan") {
    return `${city} is in ${country}`;
}
//three different cities:
let city1 = describe_city("lahore");
let city2 = describe_city("islamabad");
let city3 = describe_city("karachi");
let city4 = describe_city("dubai", "UAE"); //not a default country:
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
export {};

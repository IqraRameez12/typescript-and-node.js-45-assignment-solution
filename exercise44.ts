/*. Cars: 
Write a function that stores information about a car in an Object. The function should always 
receive a manufacturer and a model name. It should then accept an arbitrary number of keyword 
arguments. Call the function with the required information and two other name-value pairs, such as 
a color or an optional feature. Print the Object that’s returned to make sure all the information was
stored correctly. */


type car={
  manufacturer:string,
  model:string,
  [key:string]:any
};

function creatCar(manufacturer:string,model:string,optional:Record<string,any>):car{
   return {
    manufacturer, model,...optional
  };
}
const myCar:car=creatCar("toyota","corolla",{colour:"blue",year:2024});
console.log(myCar);
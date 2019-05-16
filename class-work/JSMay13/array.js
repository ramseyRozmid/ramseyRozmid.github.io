//create an array below, then use methods like push and unshift to add some things you either like or hate to do.

let myArray = [];

//these are things I like to do
myArray.push('ski', 'surf', 'climb');
// console.log(myArray);

//these are things I don't like to do
myArray.unshift('hike', 'go to bars');

// console.log(myArray);
//then, figure out a way to display the odd-numbered items in the array as things you like (e.g. 'i like running') and the even-numbered items as things you hate (e.g. 'i hate loud chewers'). Display your list in the console to the right

let i = myArray.length;
let oddArray = [];
let evenArray = [];

for(i ; i >= 0 ; i--) {
  if(i % 2 === 0) {
    evenArray.push(myArray[i])
            }
  else (i)
    oddArray.push(myArray[i])
  {
}
}

console.log(evenArray)
console.log(oddArray)

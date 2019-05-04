// Write a script that can generate random addresses
// As a first step, create arrays that contain dummy data for each of the following: street number, street name, city, state, and zip code
// For example, a dummy state array may look like this: ['new york', 'texas', 'florida'...]
// Your script should randomly select one item from each of these arrays and then use them to construct a random address
// Each time you run the script, it should print a new randomly-generated address to the terminal. For example:
// node random-address.js
// 10 E 21st St, New York, NY 10010

let streetNum = [123, 456, 789, 100, 200, 300, 400];
let streetName = ['Ashland', 'Fulton', 'Vesey', '5th Ave'];
let city = ['New York City', 'Mountain View', 'Boulder', 'San Francisco', 'Santa Monica'];
let state = ['California', 'Colorado', 'New York'];
let zip = ['11217', '94040', '91302', '91604', '80302'];

let randomStreetNum = streetNum[Math.floor(Math.random()*streetNum.length)];
let randomSteetName = streetName[Math.floor(Math.random()*streetName.length)];
let randomCity = city[Math.floor(Math.random()*city.length)];
let randomState = state[Math.floor(Math.random()*state.length)];
let randomZip = zip[Math.floor(Math.random()*zip.length)];

console.log(randomStreetNum + ' ' + randomSteetName + ', ' + randomCity + ', ' + randomState + ' ' + randomZip);

// let randomStreet = () => {
//   return console.log(streetNumber[Math.floor(Math.random()*streetNumber.length)]);
// }

//Future improvement to look into: Creating a function that will randomly select element from array,
//function can take multiple inputs so I do not need to randomly generate array element each time

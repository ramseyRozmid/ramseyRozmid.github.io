/* You can put your stuff in a repl.it or wherever you think is best

Work with a partner to create a specific animal object (so, monkey, rhino, etc), which has the following properties (or more!):

* name
* species
* foodsEaten

And the following methods:
* eatSomething(thingAsString)
* introduce: producers a string introducing itself, including its name, species, and what it's eaten.

Create three species of your animal total. Make sure all three have all properties set and methods defined.

Exercise your animals by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).

*/

let Animal = function (name, species, foodsEaten) {
  this.name = name;
  this.species = species;
  this.foodsEaten = foodsEaten;
  this.eatSomething = function(food){
    this.foodsEaten.push(food)
  }
  // this.introduce = function(){
  //   console.log(`My name is ${name} and I am a ${species} and I eat ${foodsEaten}!`)
  }

let monkey = new Animal('Bart', 'Spider Monkey', 'Bananas');

//monkey.introduce();
console.log(monkey);
//console.log(`${monkey.name} is a ${monkey.species} and eats ${monkey.foodsEaten});

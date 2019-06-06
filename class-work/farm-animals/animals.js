//Starter code

function Animal(sound) {
    this.sound = sound
  }

  function FarmAnimal(sound) {
    Animal.call(this, sound)
  }

  FarmAnimal.prototype = Object.create(Animal.prototype)

  var cow = new FarmAnimal('moo')
  var sheep = new FarmAnimal('baa')
  var dog = new FarmAnimal('bark')
  var pig = new FarmAnimal('oink')


  console.log(cow.sound)
  console.log(sheep.sound)
  console.log(dog.sound)
  console.log(pig.sound)

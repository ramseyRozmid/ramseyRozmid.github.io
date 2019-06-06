//Starter code

function Animal(sound, type) {
    this.sound = sound
    this.type = type
  }

  function FarmAnimal(sound, type) {
    Animal.call(this, sound, type)
  }

  FarmAnimal.prototype = Object.create(Animal.prototype)

  var cow = new FarmAnimal('moo', 'cow')
  var sheep = new FarmAnimal('baa', 'sheep')
  var dog = new FarmAnimal('bark', 'dog')
  var pig = new FarmAnimal('oink', 'pig')

  //find or slice
  
  $('#cow-btn').click(function() {
  $('#animal-type').html(cow.type);
  $('#animal-sound').html(cow.sound)
  });

  $('#sheep-btn').click(function() {
  $('#animal-type').html(sheep.type);
  $('#animal-sound').html(sheep.sound)
  });

  $('#dog-btn').click(function() {
  $('#animal-type').html(dog.type);
  $('#animal-sound').html(dog.sound)
  });

  $('#pig-btn').click(function() {
  $('#animal-type').html(pig.type);
  $('#animal-sound').html(pig.sound)
  });

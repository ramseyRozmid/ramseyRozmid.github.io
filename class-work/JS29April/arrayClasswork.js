let goods = new Array('water', 'food', 'other food');

let quantity = [8,2];
console.log(quantity)

goods[2] = 'beer';
console.log(goods);

quantity.push(8);
console.log(quantity);

console.log('Today, I consumed ' + quantity[0] + ' cups of ' + goods[0]);

console.log(`Today, I consumed ${quantity[0]} cups of ${goods[0]}`);

let message = [];

message.push(8);

console.log(message);
message.push('r','e', 'b', 'm', 'u');
console.log(message);
message.push('n', 's', 'i', 'A', 'G', 'K');
console.log(message);

message.pop();
console.log(message);

message.shift();
console.log(message);

message.unshift(1);
console.log(message);

message.reverse();
console.log(message);

message.join();
message.join(' ');
console.log(message);

let teams = ['Yankees', 'Mets', 'Red Sox', 'Dodgers'];
for (let i = 0; i < teams.length; i++) {
  console.log(teams[i]);
}

// let teams2 = ['Yankees', 'Mets', 'Red Sox', 'Dodgers'];
//   teams2.forEach(function(team) {
//     console.log(teams2[team]);
//   });

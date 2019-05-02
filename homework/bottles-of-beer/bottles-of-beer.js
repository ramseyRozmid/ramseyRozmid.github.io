// Write a script that prints the lyrics to 99 Bottles of Beer on the Wall in the terminal
// Make sure your program can handle both singular and plural cases (bottle vs bottles)
// Make sure you save your code. We will be using it in the future (class 07)

let i = 99;

for (i = 99; i <=0; i--) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('fizzbuzz');
}
  else if (i % 3 === 0) {
    console.log('fizz');
}
  else if (i % 5 === 0) {
    console.log('buzz');
}
  else {
    console.log(i);
}
}

99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.

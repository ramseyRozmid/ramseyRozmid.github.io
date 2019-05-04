// Write a script that prints the lyrics to 99 Bottles of Beer on the Wall in the terminal
// Make sure your program can handle both singular and plural cases (bottle vs bottles)
// Make sure you save your code. We will be using it in the future (class 07)

let i;

for (i = 99; i >0; i--) {
  if (i === 2){
    console.log(`${i} bottles of beer on the wall, ${i} bottles of beer. Take one down and pass it around, ${i-1} bottle of beer on the wall.`);
}
  else if (i === 1) {
    console.log(`${i} bottle of beer on the wall, ${i} bottle of beer. Take one down and pass it around, ${i-1} bottles of beer on the wall.`);
}
  else {
    console.log(`${i} bottles of beer on the wall, ${i} bottles of beer. Take one down and pass it around, ${i-1} bottles of beer on the wall.`);
}
};

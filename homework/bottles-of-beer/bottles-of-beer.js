// Write a script that prints the lyrics to 99 Bottles of Beer on the Wall in the terminal
// Make sure your program can handle both singular and plural cases (bottle vs bottles)
// Make sure you save your code. We will be using it in the future (class 07)

let i;

for (i = 99; i >0; i--) {
  if (i === 2){
    document.getElementById("changeContent").innerHTML += `${i} bottles of beer on the wall, ${i} bottles of beer. Take one down and pass it around, ${i-1} bottle of beer on the wall.` + '<br><br>'
}
  else if (i === 1) {
    document.getElementById('changeContent').innerHTML += `${i} bottle of beer on the wall, ${i} bottle of beer. Take one down and pass it around, ${i-1} bottles of beer on the wall.` + '<br><br>'
}
  else {
    document.getElementById('changeContent').innerHTML += `${i} bottles of beer on the wall, ${i} bottles of beer. Take one down and pass it around, ${i-1} bottles of beer on the wall.` + '<br><br>'
}
};

// for (num = 100; num > 0; num--) {
//     if  (num > 2){
//         document.getElementById("list").innerHTML +=  num + ' bottles of beer on the wall, ' + num + ' bottles of beer. Take one down and pass it around, ' + (num-1) + ' bottles of beer on the wall' + '<br>'
//
//      }
//      if  (num === 2)  {
//      document.getElementById("list").innerHTML += num + ' bottles of beer on the wall, ' + num + ' bottles of beer. Take one down and pass it around, ' + (num-1) + ' bottle of beer on the wall.'
//      }
//      if  (num === 1)  {
//      document.getElementById("list").innerHTML += num + ' bottle of beer on the wall, ' + num + ' bottle of beer. Take one down and pass it around, ' + (num-1) + ' bottles of beer on the wall.'
//      }
// }

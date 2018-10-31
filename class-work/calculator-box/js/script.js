// 	Project Goals:
//	A) Boxes #a10, #a20, and #a30 should each add 10, 20, and 30, respectively, to the value in the center box, #out
//	B) Boxes #m10, #m20, and #m30 should each subtract 10, 20, and 30, respectively, from the value in the center box, #out
//	C) #red and #blue should change the background color of #out to red and blue, respectively
//	D) #out should change the background of #out to white, and set the value back to zero

var count = 0
  // var boxColor

function calcCenterBox() {
  count = parseInt($(this).html())+count
  $('#out').html(count)
}

function colorCenterBoxRed() {
  $('#out').css('backgroundColor','red')
}

function colorCenterBoxBlue() {
  $('#out').css('backgroundColor','blue')
}

function resetCenterBox() {
  count = 0
  $('#out').css('backgroundColor','white')
  $('#out').html(count)
}

$('#a10, #a20, #a30, #m10, #m20, #m30').click(calcCenterBox)
$('#red').click(colorCenterBoxRed)
$('#blue').click(colorCenterBoxBlue)
$('#out').click(resetCenterBox)

//
//   function colorCenterBox (){
//     boxColor = $(this).val().toLowerCase()
//     console.log(boxColor)
//
//      css('background-color',(this id))
//      $('#out').css(boxColor)
//          console.log(this)
//  }
//  $('#red, #blue').click(colorCenterBox)

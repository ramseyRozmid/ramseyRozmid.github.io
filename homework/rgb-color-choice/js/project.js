const functionRGB = () => {
  var red = document.querySelector('#red').value || 0
  var green = document.querySelector('#green').value || 0
  var blue = document.querySelector('#blue').value  || 0

  document.querySelector('#colorful-text').innerHTML = 'rgb(' + red + ',' + green + ',' + blue + ')'
  document.querySelector('#wrapper').style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')'

  if (red >255) {
    alert('Max value is 255 for each color input!')
  }

  if (green >255) {
    alert('Max value is 255 for each color input!')
  }

  if (blue >255) {
    alert('Max value is 255 for each color input!')
  }
}

document.querySelector('#color-button').onclick = functionRGB

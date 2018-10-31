// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth

$('#first').click(useFirstImage)
$('#second').click(useSecondImage)
$('#third').click(useThirdImage)
$('#fourth').click(useFourthImage)
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

function useFirstImage() {
  $('#bigimage').attr('src','img/1.jpg')
}

function useSecondImage() {
  $('#bigimage').attr('src','img/2.jpg')
}

function useThirdImage() {
  $('#bigimage').attr('src','img/3.jpg')
}

function useFourthImage() {
  $('#bigimage').attr('src','img/4.jpg')
}

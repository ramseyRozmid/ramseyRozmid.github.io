// User flow:
//   1: User changes <select id="city-type">
//   2: The page's background changes to a picture of the newly selected city
// ----------------------------------------------------------------------------

//   1. Attach the .change() event method to #city-type
  // $(this).change('city-type').change(handleChange)
//  $(document).on('this', 'change', function(handleChange)) {
$('#city-type').change(handleChange)
//   2. Associate the above change event with a function, handleChange, which should do the following:
  function handleChange() {

// 3. Create a variable, city, that stores the selected value of #city-type (hint: use .val())
    var city = $('#city-type').val()
// 4. Remove all classes from the <body> element using the .removeClass() method
    $('body').removeClass()

    $('body').addClass(city)
  }
  // Instructions:



  //   5. The variable you created in step 4 maps to a CSS class (check style.css for more info)
  //      Use the .addClass() method to add this variable to <body>
  //
  // Bonus: Apply the concept of $(this) - think about what element is causing .change() to fire

  // User Flow:
  // 1: User enters numerical value into #newEntry
  // 2: User pushes enter key (submits the form)
  // 3: A <div> containg the value from #newEntry is appended to #entries
  // 3: #total is updated to reflect the sum of all the values within #entries
  //
  // Instructions:
  // 1: Add a .submit event to #entry - this event should call a function called handleSubmit
  // 2. Create a function named handleSubmit; this function should:
  // 3: Prevent the default submit event
  // 4: Declare a variable, newEntry, and assign it to the value in #newEntry
  // 5: Use parseInt() to transform newEntry from a string to a number HINT: newEntry = parseInt(newEntry)
  // 6: Append a <div> to #entries containing newEntry HINT: Use .append('<div>' + newEntry + '</div>')
  // 7: Figure out a way to update the number in #total (Hint: look back at the calculator box example)
  // 8: Empty the input in #newEntry (clear it out)

//submit action (calls function)
$('#entry').submit(handleSubmit)

//function that will run on submit
function handleSubmit(event) {

  //prevents the browser default to refresh the page and prints the event object in the console
  console.log(event)
  event.preventDefault()

  //creating a variable to store the value of the input
  var newEntry = $('#newEntry').val()

  newEntry = parseInt(newEntry)

  //adding each line item as a new div (block element)
  $('#entries').append('<div>' + newEntry + '</div>')

  //calculates the new totals --> with console.logs ;)
  console.log(total)
  total = total + newEntry
  console.log(total)

  //prints the new total
  $('#total').html('$' + total)

  //clears the entry field
  $('#newEntry').val('')

}

var total = 0

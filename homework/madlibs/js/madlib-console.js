let startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
let startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

let random1 = Math.floor((Math.random() * startupX.length));
let random2 = Math.floor((Math.random() * startupY.length));

let startupGenerator = ('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);

//$(startupGenerator).replaceAll(#xForY);

$('#create').click(function() {
  $('#xForY').replaceWith(startupGenerator);
});

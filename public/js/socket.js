var socket = io('ws://localhost:3000', {transports: ['websocket']});
var md = require('marked');
var whichPlatform = require('../../tools/youtube');


socket.on('new_message', function(data){
  var temp = document.getElementById('message-list').innerHTML;

  whichPlatform.url = data.content;
  var videoPlatform = whichPlatform();


  document.getElementById('message-list').innerHTML = "<li>"
  + data.user.username
  + " : " + md(data.content)
  + "</li>"
  + temp;
});

socket.on('supprimer_message', function(data) {
  document.getElementById(data).innerHTML = '';
})

socket.on('supprimer_channel', function(data) {
  document.getElementById(data).innerHTML = '';
})

socket.on('ajouter_emotion', function(data) {
  document.getElementById(data.message).style.color= 'red';
})


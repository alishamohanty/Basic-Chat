$(function () {
    var socket = io();
    $('form').submit(function(){
      socket.emit('chat message', {
          Handel: $('#h').val(),
          Message: $('#m').val()
      });
      $('#m').val('');
      return false;
    });
    socket.on('chat message', function(msg){
        $('#messages').append(`<p><strong>${msg.Handel}</strong>: ${msg.Message} <p>`);
    });
  });
$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-cool').hide();
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-cool').hide();
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
    playHadouken();
    $('.ryu-cool').hide();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show().animate(
      {'left': '1020px'},
      500,
      function() {
        $(this).hide();
        $(this).css('left', '520px');
      }
    );
  })
  .mouseup(function() {
    $('.ryu-cool').hide();
    $('.ryu-throwing').hide();
    $('.ryu-ready').show()
  });
  $('body').keydown(function(e) {
    if (e.which == 88) {
      $('.ryu-ready').hide();
      $('.ryu-still').hide();
      $('.ryu-throwing').hide();
      $('.ryu-cool').show();
    }
  });
});

function playHadouken() {
  $('#hadouken-sound')[0].volume = 1.0;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

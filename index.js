$('div#box').on('mouseenter', function() {
  $(this).animate({'opacity': '0.99'}, 100);
});

$('div#box').on('mouseleave', function() {
  $(this).animate({'opacity': '0.8'}, 100);
});
(function($) {
  $.ajax({
    url: "https://api.stackexchange.com/2.2/users/6715826/associated"
  }).done(function(data) {
    reputation = data.items[0].reputation
    $('.stack-overflow-reputation').text(reputation)
  });
})(jQuery);
// Hero area auto height adjustment
    $('#tx-hero-area') .css({'height': (($(window).height()))+'px'});
    $(window).resize(function(){
        $('#tx-hero-area') .css({'height': (($(window).height()))+'px'});
    });


    // smooth Scroll

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


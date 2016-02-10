faded = $("ul#faded li").fadeTo(0, 0);

$(window).scroll(function(d,h) {
    faded.each(function(i) {
        a = $(this).offset().top + $(this).height();
        b = $(window).scrollTop() + $(window).height();
        if (a < b) $(this).fadeTo(500,1);
    });
});

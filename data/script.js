// Link types supported (which allows navigation)
var relKeywords = [
    'start',
    'next',
    'prev',
    'contents',
    'index',
    'top',
];


$(document).ready(function() {
    var links = $('head link');
    var nav_bar = $('<div></div>');
    var contents = [];

    links.each(function(i, link) {
        if ($.inArray(link.rel, relKeywords) != -1) {
            var a = $('<a></a>');
            a.attr({href: link.href, title: link.title});
            a.text(link.rel);
            nav_bar.append(a);
        }
    });

    if (nav_bar.children.length > 0) {
        nav_bar.css('position', 'absolute')
               .css('top', 0)
               .css('padding', '3px 7px')
               .css('background', 'lightgrey')
               .css('font-family', 'sans-serif')
               .css('border', '1px solid grey')
               ;

        nav_bar.children().css('border-left', '1px solid');
        nav_bar.children().css('border-color', nav_bar.children().css('color'));
        nav_bar.children().css('padding', '0 3px');
        nav_bar.children(':first-child').css('border-left', 'none');

        $('html').append(nav_bar);
    }
});

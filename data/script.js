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
        // Style the navigation block
        nav_bar.css({
            'position'    : 'absolute',
            'top'         : '0',
            'padding'     : '3px 7px',
            'background'  : 'lightgrey',
            'font-family' : 'sans-serif',
            'border'      : '1px solid grey',
        });

        // Style the links inside the navigation block
        var font_color = nav_bar.children().css('color');
        nav_bar.children().css({
            'border-left'  : '1px solid',
            'border-color' : font_color,
            'padding'      : '0 3px'
        });
        nav_bar.children(':first-child').css({
            'border-left': 'none'
        });

        // Let's display the stuff
        $('html').append(nav_bar);
    }
});

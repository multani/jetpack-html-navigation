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
    var nav_bar = $('<div></div>');
    var contents = [];
    var links_map = {};

    $('head link').each(function(i, link) {
        links_map[link.rel] = link;
    });

    relKeywords.forEach(function(keyword) {
        if (keyword in links_map) {
            var link = links_map[keyword];
            var a = $('<a></a>');
            a.attr({href: link.href, title: link.title});
            a.text(link.rel);
            nav_bar.append(a);
        }
    });

    if (nav_bar.children('a').length > 0) {
        // Style the navigation block
        nav_bar.css({
            'position'    : 'fixed',
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

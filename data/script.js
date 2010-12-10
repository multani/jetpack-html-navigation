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
               .css('background-color', 'red');
        $('html').append(nav_bar);
    }
});

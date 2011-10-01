// Link types supported (which allows navigation)
var relKeywords = [
    'next',
    'prev',
    'contents',
    'index',
    'top',
    'start',
];


$(document).ready(function() {
    var nav_bar = $('<div id="jetpack-html-navigation"></div>');
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
        // Add a button to delete the navigation frame
        var close_link = $('<a></a>');
        close_link.text('X');
        close_link.attr({
            href: '#',
            onclick: 'javascript:var e=document.getElementById("jetpack-html-navigation");e.parentNode.removeChild(e);',
            title: 'Remove this!'
        });
        nav_bar.append(close_link);

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

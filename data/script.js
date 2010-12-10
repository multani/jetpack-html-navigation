// Link types supported (which allows navigation)
var relKeywords = [    'start',
    'next',
    'prev',
    'contents',
    'index',
];


$(document).ready(function() {
    var links = $('head link');
    var contents = [];

    links.each(function(i, link) {
        if ($.inArray(link.rel, relKeywords) != -1) {
            contents.push({
                'href': link.href,
                'rel': link.rel,
                'title': link.title});
        }
    });

    if (contents.length > 0) {
        postMessage(contents);
    }
});

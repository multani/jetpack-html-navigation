// Link types supported (which allows navigation)
var relKeywords = [    'start',
    'next',
    'prev',
    'contents',
    'index',
];


$(document).ready(function() {
    var links = $('head link');

    links.each(function(i, link) {
        if ($.inArray(link.rel, relKeywords) != -1) {
            var content = {
                'href': link.href,
                'rel': link.rel,
                'title': link.title};
            postMessage(content);
        }
    });
});

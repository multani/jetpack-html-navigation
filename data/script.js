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
            console.log("Relation " + link.rel + " link to " + link.href);
        }
    });
});

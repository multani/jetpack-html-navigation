onMessage = function onMessage(links) {
    var content = $('#content');

    $.each(links, function(i, link) {
        var a = '<a href="' + link['href'] + '" title="' + link['title'] + '">' + link['rel'] + '</a>';

        content.append(a);
    });
}

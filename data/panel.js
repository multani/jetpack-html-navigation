onMessage = function onMessage(message) {
    var content = $('#content');
    var a = '<a href="' + message['href'] + '" title="' + message['title'] + '">' + message['rel'] + '</a>';
    content.append(a);
}

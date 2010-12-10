// Import the APIs we need.
var pageMod = require("page-mod");
var tabs = require('tabs');
var panel = require('panel');
var data = require("self").data;


var p = panel.Panel({
    contentURL: data.url('panel.html'),
    contentScriptFile: [
        data.url('jquery-1.3.2.min.js'),
        data.url('panel.js')
    ],
    onMessage: function onMessage(links) {
        postMessage(links);
    }
});




pageMod.PageMod({
    include: ["*"],
    contentScriptWhen: 'ready',
    contentScriptFile: [
        data.url('jquery-1.3.2.min.js'),
        data.url('script.js')
    ],
    onAttach: function onAttach(worker, mod) {
        worker.on('message', function handleMessage(links) {
            // Called if the content script detects interesting links
            p.postMessage(links);
            p.show();
        });
    }
});


// Sample URL for testing purpose
tabs.open("http://sphinx.pocoo.org/intro.html");

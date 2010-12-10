// Import the APIs we need.
var pageMod = require("page-mod");
var tabs = require('tabs');
var data = require("self").data;


pageMod.PageMod({
    include: ["*"],
    contentScriptWhen: 'ready',
    contentScriptFile: [
        data.url('jquery-1.3.2.min.js'),
        data.url('script.js')
    ],
});


// Sample URL for testing purpose
tabs.open("http://sphinx.pocoo.org/intro.html");

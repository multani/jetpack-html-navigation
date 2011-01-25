// Import the APIs we need.
var pageMod = require("page-mod");
var data = require("self").data;

pageMod.PageMod({
    include: ["*"],
    contentScriptWhen: 'ready',
    contentScriptFile: [
        data.url('jquery-1.3.2.min.js'),
        data.url('script.js')
    ],
});

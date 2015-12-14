// Import the APIs we need.
var pageMod = require("sdk/page-mod");
var data = require("sdk/self").data;

pageMod.PageMod({
    include: ["*"],
    contentScriptWhen: 'ready',
    contentScriptFile: [
        data.url('jquery-1.3.2.min.js'),
        data.url('script.js')
    ],
});

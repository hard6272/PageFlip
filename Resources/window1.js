var win = Ti.UI.currentWindow;
// 
var open_window = Titanium.UI.createButton({
    title:'CLICK FOR NEW WINDOW',
    top:170,
    left:60,
    right:60,
    height:60,
    color: '#ffffff'
});
 //
open_window.addEventListener('click', function() {
    var newWindow = Titanium.UI.createWindow({
        url:'new_window.js',
        title:'2'
    });
    Titanium.UI.currentTab.open(newWindow);
});
// 
win.add(open_window);
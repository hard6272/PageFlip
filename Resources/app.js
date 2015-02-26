var tabGroup = Titanium.UI.createTabGroup();
//
var win1 = Titanium.UI.createWindow({
    url:'window1.js',
    title:'OPEN',
    backgroundColor: '#7BBDAE'
});
//
var tab1 = Titanium.UI.createTab({
    icon:'KS_nav_views.png',
    title:'OPEN',
    window:win1
});
//
var win2 = Titanium.UI.createWindow({
    url:'window2.js',
    title:'TILT',
    backgroundImage:'images/asdfg.png',
    backgroundColor: '#F2BB6D'
});
//
var tab2 = Titanium.UI.createTab({
    icon:'KS_nav_ui.png',
    title:'TILT',
    window:win2
});
//
tabGroup.addTab(tab1);
tabGroup.addTab(tab2);
// 
tabGroup.open();
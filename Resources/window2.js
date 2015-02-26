var win = Ti.UI.currentWindow;
// 
var switchOrientation = Titanium.UI.createButton({
	title: 'TILT',
	top:170,
    left:60,
    right:60,
    height:60,
    color: '#000000'
});
//
switchOrientation = Titanium.UI.addEventListener('click', rotateLayout);
//
var win = Titanium.UI.createView({layout: 'vertical'});
 //
 function rotateLayout () {
	win.orientationModes = [Titanium.UI.LANDSCAPE_LEFT];
}
//
win.add(switchOrientation);
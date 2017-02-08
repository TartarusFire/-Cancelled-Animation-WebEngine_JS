/*function setMouseMove(canvas,e){
	mx=e.getX();
	my=e.getY();
}*/

//replaced with Date.now()
//var time = new Date();

window.addEventListener('resize', resizeCanvas, false);
//window.addEventListener('onmousemove', setMouseMove, false);

//* removed functio caled from a created function -- inherient;y inefficient
/*function getMousePos(canvas,evt){
	mx = evt.clientX - canvas.getBoundingClientRect().left;
	my = evt.clientY - canvas.getBoundingClientRect().top;
}*/

var mx=-1,my=-1,px=-1,py=-1;
var press =false;
var btn = 0;

//tablet allowable
var tx=-1,ty=-1;
var tmove = false;





function setMousePos(evt){//called anyway even wiht the press events
	//if(!press){
	mx = evt.clientX - canvas.getBoundingClientRect().left;
	my = evt.clientY - canvas.getBoundingClientRect().top;
	//}
}

function setMousePress(evt){
	//px = evt.clientX - canvas.getBoundingClientRect().left;
	//py = evt.clientY - canvas.getBoundingClientRect().top;
	//btn=event.button;
	press=true;
	btn=evt.button;
}

function setMouseNotPress(evt){
	//px = evt.clientX - canvas.getBoundingClientRect().left;
	//py = evt.clientY - canvas.getBoundingClientRect().top;
	press=false;
}

//canvas.addEventListener('mousemove', function(evt){getMousePos(canvas,evt);},false);
canvas.addEventListener('mousemove', setMousePos,false);
//http://www.homeandlearn.co.uk/JS/html5_canvas_mouse_events.html
canvas.addEventListener('mousedown', setMousePress,false);
canvas.addEventListener('mouseup', setMouseNotPress,false);



//*/

/**
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }
  canvas.addEventListener('mousemove', function(evt) {
    var mousePos = getMousePos(canvas, evt);
	mx = mousePos.x;my = mousePos.y;
    console.log('Mouse position: ' + mousePos.x + ',' + mousePos.y);
  }, false);
//**/






/*

TABLET TO MOUSE CONVERSION

http://www.homeandlearn.co.uk/JS/html5_canvas_touch_events.html



BETTER
https://bencentra.com/code/2014/12/05/html5-canvas-touch-events.html

BESTEST
https://developer.mozilla.org/en-US/docs/Web/API/Touch_events

*/

function touchStart(evt){
	//canvas_x = evt.targetTouches[0].pageX;
	//canvas_y = evt.targetTouches[0].pageY;
	evt.preventDefault();
	tx = touches[0].clientX - canvas.getBoundingClientRect().left;
	ty = touches[0].clientY - canvas.getBoundingClientRect().top;
}

function touchEnd(evt){
	//canvas_x = evt.targetTouches[0].pageX;
	//canvas_y = evt.targetTouches[0].pageY;
	tmove=false;
}

function touchMove(evt){
	//canvas_x = evt.targetTouches[0].pageX;
	//canvas_y = evt.targetTouches[0].pageY;
	evt.preventDefault();
	tx = touches[0].clientX - canvas.getBoundingClientRect().left;
	ty = touches[0].clientY - canvas.getBoundingClientRect().top;
	tmove = true;
}

function touchCancel(evt){
	tmove=false;
}

canvas.addEventListener("touchstart", touchStart, false);
canvas.addEventListener("touchmove", touchMove, false);
canvas.addEventListener("touchend", touchEnd,false);
canvas.addEventListener("touchcancel", handleCancel, false);

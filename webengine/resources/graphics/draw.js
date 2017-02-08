/*

This is the universal script for drawing to the entire screen -- the canvas is set to automatically change with the tab size

*/

var buffer = document.createElement('canvas');
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");//
try{
	buffer.width = canvas.width;
	buffer.height = canvas.height;
	ctx=buffer.getContext("2d");
}catch(e){
	//reset context here if the buffer fails -- worse case scenario
	ctx=canvas.getContext("2d");
}//draws drectly to window buffer in worse case scenario

//set default width and heights for canvas stuff
resizeCanvas();

function erase(x,y,width,height){//clear rect function
	ctx.clearRect(x,y,width,height);
}

function saveClippingBoundaries(){
	ctx.save();
}

function setClippingBoundaries(x,y,width,height){
	ctx.rect(x,y,width,height);
}

function restoreClippingBoundaries(){
	ctx.restore();
}

function getWidth(){
	return canvas.width;
}

function getHeight(){
	return canvas.height;
}

//solid fill color
function setColor(htmlHexColor){
	ctx.fillStyle=htmlHexColor;
}

//gradient line fill color
function setGradient(){
	
}

function fillRect(x, y, width, height){
	ctx.fillRect(x,y,width,height);
}

function drawRect(x, y, width, height){
	ctx.strokeRect(x,y,width,height);
}

function fillRect(x, y, width, height,style){
	ctx.fillStyle=style;
	ctx.fillRect(x,y,width,height);
}

function drawLine(x0,y0,x1,y1){
	ctx.moveTo(x0,y0);
	ctx.lineTo(x1,y1);
	ctx.stroke();
}

function drawCircle(x,y,radius){
	ctx.beginPath();
	ctx.arc(x,y,radius,0,2*Math.PI);
	ctx.stroke();
}

function setFont(allData){
	ctx.font=allData;
}

function setFont(font,sizePX){
	ctx.font=sizePX+"px "+font;
}

/*function setTextAlign(align){
	
}*/

/* Overloading does not work as expecting in javascript -- it prototypes instead of normal class hiearchy
function drawString(string,x,y){
	drawString(string,x,y,true);
}
*/

function drawString(string, x,y,fill){
	if(fill){
		ctx.fillText(string, x,y);
	}else{
		ctx.strokeText(string, x,y);
	}
}

function textWidth(txt){
	return ctx.measureText(txt).width;
}

function resizeCanvas(){
	canvas.width=window.innerWidth;
	canvas.height=window.innerHeight;
	buffer.width = canvas.width;
	buffer.height = canvas.height;
}

//http://htmlcheats.com/html/resize-the-html5-canvas-dyamically/
//https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial
//http://www.w3schools.com/graphics/canvas_coordinates.asp


//This wil be user handled
/*
//https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas
function fast_Render(){
	//create off screen canvas and set the context to that
	//default is entire width and height, and at 0,0
	fast_Render(0,0,getWidth(),getHeight());
}

function fast_Render(x,y,width,height){//render at x,y and with width of width,hegiht
	myEntity.offscreenCanvas = document.createElement('canvas');
	myEntity.offscreenCanvas.width = myEntity.width;
	myEntity.offscreenCanvas.height = myEntity.height;
	//*myEntity.offscreenContext = myEntity.offscreenCanvas.getContext('2d');

	//myEntity.render(myEntity.offscreenContext);//* /
	ctx = myEntity.offscreenCanvas.getContext('2d');
	ctx = canvas.getContext('2d');
	ctx.drawImage(offscreenCanvas,x,y);
}
*/


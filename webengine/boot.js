
var debug = true;//draws the debug graphics
var ms = Date.now();
var fps = 10;

var graphicPlugins = [];
var graphicLoop = 0;
var graphicAddLoop = 0;

function refresh(){
	//document.title=(Date.now()-ms);
	if((Date.now()-ms)<1000/fps){
		return 1;
	}else{
		ddraw();
		return 0;
	}
}

function addGraphicPlugin(){
	for(graphicAddLoop=0;graphicAddLoop<graphicPlugins.length;graphicAddLoop++){
		
	}
}

function removeGraphicPlugin(where){
	if(where>graphicPlugins.length-1)return false;
	//index #,number of elements to remove
	graphicPlugins.splice(where, 1);
	return true;
}

function ddraw(){
	
	/**
	~~PLACE DRAW FUNCTIONS HERE~~
	
	Added in graphics loop and graphical plugin control
	
	**/
	for(graphicLoop=0;graphicLoop<graphicPlugins.length;graphicLoop++){
		
	}
	
	
	/**
	PLACE DEBUG FUNCTIONS HERE
	**/
	if(debug){
		debugOnScreen();
	}
	
	/*
	Draw the entire buffer now
	*/
	//draws the buffer on the current frame after removing previous stuff
	
	canvas.getContext("2d").clearRect(0,0,canvas.width,canvas.height);//FIXME INTENSE FLICKERING -- draw the background layer :v   D':
	canvas.getContext("2d").drawImage(buffer,0,0,canvas.width,canvas.height);//stretches the buffer if the canvas get resized before rendering and did not update
	//canvas.getContext("2d").putImageData(ctx.getImageData(0,0,getWidth(),getHeight()), 0, 0);//corrects flickering but may be slow potentially
	
	
	/*if(debug){
		debugOnScreen();
	}*/
	
	
	
	ms = Date.now();//counter to keep constant fps
}
ddraw();//intial setup of graphics -- assuming anything is in here at all


setInterval(refresh, 1);//1 milisecond with timer hadling
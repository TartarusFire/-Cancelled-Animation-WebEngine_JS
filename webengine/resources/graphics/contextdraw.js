
function c_erase(x,y,width,height){//clear rect function
	ctx.clearRect(x,y,width,height);
}

function c_saveClippingBoundaries(){
	ctx.save();
}

function c_setClippingBoundaries(x,y,width,height){
	ctx.rect(x,y,width,height);
}

function c_restoreClippingBoundaries(){
	ctx.restore();
}

function c_getWidth(canvas){
	return canvas.width;
}

function c_getHeight(canvas){
	return canvas.height;
}

//solid fill color
function c_setColor(ctx,htmlHexColor){
	ctx.fillStyle=htmlHexColor;
}

function c_fillRect(ctx,x, y, width, height){
	ctx.fillRect(x,y,width,height);
}

function c_fillRect(ctx,x, y, width, height,style){
	ctx.fillStyle=style;
	ctx.fillRect(x,y,width,height);
}

function c_drawLine(ctx,x0,y0,x1,y1){
	ctx.moveTo(x0,y0);
	ctx.lineTo(x1,y1);
	ctx.stroke();
}

function c_drawCircle(ctx,x,y,radius){
	ctx.beginPath();
	ctx.arc(x,y,radius,0,2*Math.PI);
	ctx.stroke();
}

function c_setFont(ctx,allData){
	ctx.font=allData;
}

function c_setFont(ctx,font,sizePX){
	ctx.font=sizePX+"px "+font;
}

/*
function csetTextAlign(ctx,align){
	
}
*/

function c_drawString(string, x,y,fill){
	if(fill){
		ctx.fillText(string, x,y);
	}else{
		ctx.strokeText(string, x,y);
	}
}
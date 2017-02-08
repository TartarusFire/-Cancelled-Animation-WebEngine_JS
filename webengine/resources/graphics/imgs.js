
//http://www.w3schools.com/tags/canvas_drawimage.asp

function drawImage_Fast(img, x,y){
	ctx.drawImage(img,Math.round(x),Math.round(y));
}

function drawImage_Fast(img, x,y,width,height){
	ctx.drawImage(img,Math.round(x),Math.round(y),Math.round(width),Math.round(height));
}

function drawImage_Fast(img, sx,sy,swidth,sheight,x,y,width,height){
	ctx.drawImage(img,Math.round(sx),Math.round(sy),Math.round(swidth),Math.round(sheight),Math.round(x),Math.round(y),Math.round(width),Math.round(height));
}

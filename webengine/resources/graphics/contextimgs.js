
function c_drawImage_Fast(ctx, img, x,y){
	ctx.drawImage(img,Math.round(x),Math.round(y));
}

function c_drawImage_Fast(ctx, img, x,y,width,height){
	ctx.drawImage(img,Math.round(x),Math.round(y),Math.round(width),Math.round(height));
}

function c_drawImage_Fast(ctx, img, sx,sy,swidth,sheight,x,y,width,height){
	ctx.drawImage(img,Math.round(sx),Math.round(sy),Math.round(swidth),Math.round(sheight),Math.round(x),Math.round(y),Math.round(width),Math.round(height));
}

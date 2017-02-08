
var debugTextOffset = 0;

function debugOnScreen(){
	if(mx+my>-1){//draw this if only mouse input exists
	//saveClippingBoundaries();
	erase(0,0,130,26);
	//setClippingBoundaries(0,0,130,26);
	setColor("#FFFFFF");
	drawString("Mouse: "+mx+","+my,10,10,true);
	if(press)
	drawString("Pressed: "+btn,10,25,true);
	//restoreClippingBoundaries();
	debugTextOffset = 140;
	}
	
	if(tx+ty>-1){//draw this debug only if tablet input exists
		//saveClippingBoundaries();
		erase(debugTextOffset,0,130,26);
		//setClippingBoundaries(140,0,130,26);
		drawString("Mobile: "+tx+","+ty,debugTextOffset+10,10,true);
		if(tmove)
		drawString("Tablet Input",debugTextOffset+10,25,true);
	}
}

function debugInLog(){
	
}
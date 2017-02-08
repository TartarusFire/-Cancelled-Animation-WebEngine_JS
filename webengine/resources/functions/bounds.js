/*
TartarusFire
============
These are my own custom functions scours and pieced together over many many sources, please give credit to me :'V

*/

function in(rx, ry, rw, rh, x, y) {
	if ((x > rx) && (x < rx + rw) && (y > ry) && (y < ry + rh)) {
		return true;
	}
	return false;
}

function inRect(rx, ry, rw, rh, x, y) {
	if ((x > rx) && (x < rx + rw) && (y > ry) && (y < ry + rh)) {
		return true;
	}
	return false;
}

function inc(rx, ry, rm, x, y) {
	if (Math.sqrt((x - rx - rm) * (x - rx - rm) + (y - ry - rm)
			* (y - ry - rm)) <= rm) {
		return true;
	}
	return false;
}

function inCircle(rx, ry, rm, x, y) {
	if (Math.sqrt((x - rx - rm) * (x - rx - rm) + (y - ry - rm)
			* (y - ry - rm)) <= rm) {
		return true;
	}
	return false;
}

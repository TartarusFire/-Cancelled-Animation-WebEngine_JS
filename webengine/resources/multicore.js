var threads = [];

function addThreadHandler(scriptUrl){
	threads.push(new Worker(scriptUrl));
}

function removeThreadHandler(where){
	if(where>threads.length-1)return false;
	threads[where].terminate();//stop the 'thread' from running
	//index #,number of elements to remove
	threads.splice(where, 1);
	return true;
}

//create at least one alternat thread for retrieving data in the background
addThreadHandler('resource.js');

//https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers

/*
function createWindowingThreads(){
	//var myWorker = new SharedWorker('worker.js');
}
*/
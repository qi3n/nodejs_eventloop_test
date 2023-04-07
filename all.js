const fs = require('fs');
const path = require('path');

//A CPU intensive operation. Use to test imitate blocking code, test WebWorkers etc.

function mySlowFunction(baseNumber) {
	console.time('mySlowFunction');
	let result = 0;	
	for (var i = Math.pow(baseNumber, 7); i >= 0; i--) {		
		result += Math.atan(i) * Math.tan(i);
	};
	console.timeEnd('mySlowFunction');
}

// mySlowFunction(12); // higher number => more iterations => slower  - 8  - 120ms, 12 - 3s


function timerFn() {
  console.log('timer run 2');
}

function immediatFn() {
  console.log('immediate run 3');
}

function readFileFn(error, data) {
//   console.timeEnd('readFile');
  console.log(`file readed 1`);
}

function tickFn() {
  console.log('tick run 6');
}

// function promiseFn(res) {
//   console.log(res);
// }
// console.time('readFile');

//
fs.readFile(path.join(__dirname, 'data.json'), readFileFn);   //1

setTimeout(timerFn, 0); //2

// setImmediate(immediatFn); //3

const promise = new Promise((resolve, reject) => {
  console.log('promise start - 4'); //4
  resolve('promise resolved 5');
});


promise.then(res=> console.log(res));  // microtask []

process.nextTick(tickFn); //6  mictask [nexTick, promiseFn]

// mySlowFunction(12);

console.log('main start 7'); //7

//4, 7, 6,  3,5,2 , 1




//谈一谈 nodejs 中的 eventloop https://zhuanlan.zhihu.com/p/237700230

// 从这一段代码中可以看到几种不同的异步操作：

// 延时器：settimeout
// setImmediate
// I/O,代表性的读取文件内容readFile
// promise,比较常用的异步方案
// nextTick
// 这么多异步操作都有回调函数，又该怎么运行呢？实际上，nodejs 将其分门别类，然后存储到不同的队列中。所谓队列，就像现实生活中的排队先到先得一样，在队列中，就是先进先出。nodejs 中主要有以下几个队列：

// timer queue: 处理settimeout，setInterval的回调函数
// I/O queue:处理 I/O 操作的回调函数
// microtask queue:处理 promise，nextTick 的回调函数
// check queue:处理 setImmediate 的回调函数
// close queue: 任何 close 事件的回调函数
// 而这些队列的优先级并不是一样的，可以概括成microtask>timer>I/O>check>close
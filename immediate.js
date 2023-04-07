// // timeout_vs_immediate.js
// setTimeout(() => {
//     console.log('timeout');
//   }, 0);
  
//   setImmediate(() => {
//     console.log('immediate');
//   });


// var client = net.connect(8124, function() { 
//     console.log('client connected');
//     client.write('world!\r\n');
// });


// let bar =0 ;

// function someAsyncApiCall(callback) { 
//     // Promise.resolve().then(() => callback())
//     process.nextTick(callback);
// }

// someAsyncApiCall(() => {
//   console.log('bar', bar); 
// });

// bar = 1;
// console.log('main done bar: ', bar); 

const EventEmitter = require('events');
const util = require('util');

function MyEmitter() {
  EventEmitter.call(this);
  process.nextTick(() => {
    this.emit('connected');
  })
}
util.inherits(MyEmitter, EventEmitter);



const myEmitter = new MyEmitter();
myEmitter.on('connected', () => {
  console.log('an connected occurred!');
});
console.log("myEmitter", myEmitter)
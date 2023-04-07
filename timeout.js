const fs = require('fs');


//https://nodejs.org/zh-cn/docs/guides/event-loop-timers-and-nexttick/

function someAsyncOperation(callback) {
  // Assume this takes 30ms to complete
  console.time('readFile');
  fs.readFile('./data.json', callback);
}

const timeoutScheduled = Date.now();

setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;

  console.log(`${delay}ms have passed since I was scheduled`); //100ms ? > 100ms ?
}, 100); //

// do someAsyncOperation which takes 95 ms to complete
someAsyncOperation(() => {
  console.timeEnd('readFile');
  const startCallback = Date.now();

  // do something that will take 100ms...
  while (Date.now() - startCallback < 100) {
    // do nothing
  }
});

//130ms
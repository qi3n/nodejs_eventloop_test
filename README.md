https://juejin.cn/post/6844903765879832589

https://juejin.cn/post/6844903764202094606

https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/


https://zhuanlan.zhihu.com/p/237700230




https://nodejs.org/fa/docs/guides/event-loop-timers-and-nexttick/


http://howtonode.org/understanding-process-next-tick



https://nodejs.dev/learn/the-nodejs-event-loop



https://nodejs.dev/learn/the-nodejs-event-loop

<!-- const bar = () => console.log('bar') -->

const bar = () => throw new DOMException()

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  bar()
  baz()
}

foo()




const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  setTimeout(bar, 0)
  baz()
}

foo()


const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  setTimeout(bar, 0)
  new Promise((resolve, reject) =>
    resolve('should be right after baz, before bar')
  ).then(resolve => console.log(resolve))
  baz()
}

foo()

http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

http://www.jsv9000.app/



function func1 () {
  // Accessing undefined variable will throw error
  //console.log(err);
  console.log("func1")
}
function func2 () {
    console.log("func2")
 func1();
}
function func3 () {
    console.log("func3")
 func2()
}
// Calling func3, will result in error in func1

func3();

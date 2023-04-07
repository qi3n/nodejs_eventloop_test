
const { threadId } = require('worker_threads');

export default function fib(n) {
  console.log(`fib ${n} processId: ${process.pid}, threadId: ${threadId}`)
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

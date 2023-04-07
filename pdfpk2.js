const crypto = require('crypto')
 
const start = Date.now()
 
// crypto.pbkdf2('secret', 'salt', 100000, 512, 'sha512', () => {
//   console.log('1:', Date.now() - start)
// }) //1: 1015
 
// crypto.pbkdf2('secret', 'salt', 100000, 512, 'sha512', () => {
//   console.log('2:', Date.now() - start)
// }) //2: 1021
 
// crypto.pbkdf2('secret', 'salt', 100000, 512, 'sha512', () => {
//   console.log('3:', Date.now() - start)
// }) //3: 1017
 

// rypto.pbkdf2('secret', 'salt', 100000, 512, 'sha512', () => {
//     console.log('3:', Date.now() - start)
// }) //3: 1017




console.log('LIBUV Threads: ', process.env.UV_THREADPOOL_SIZE); 
const count = 9;
for(let i=0;i<count;i++){
    crypto.pbkdf2('secret', 'salt', 100000, 512, 'sha512', () => {
        console.log(i + ':', Date.now() - start)
    }) //3: 1017  
}


   

//UV_THREADPOOL_SIZE=2  node pdfpk2.js

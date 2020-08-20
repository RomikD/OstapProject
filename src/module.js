console.log('Module.js');

async function start() {
  return await Promise.resolve('async test!')
}

start().then(console.log)

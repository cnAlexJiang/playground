const execa = require('execa');
let b = require('corss-env')
console.log('check-memory');
(async () => {
  const step1 = await execa(`node`, ['-e', 'console.log(v8.getHeapStatistics().heap_size_limit/(1024*1024))']);
  console.log(11, step1.stdout);

  process.env.NODE_OPTIONS = process.env.NODE_OPTIONS || ''
  if (!process.env.NODE_OPTIONS.includes('--max-old-space-size=')) {
    process.env.NODE_OPTIONS = (process.env.NODE_OPTIONS || '') + ` --max-old-space-size=4096`
  }
  console.log(22,  process.env.NODE_OPTIONS);

  const step2 = await execa(`node`, ['-e', 'console.log(v8.getHeapStatistics().heap_size_limit/(1024*1024))']);
  console.log(33, step2.stdout);
})();

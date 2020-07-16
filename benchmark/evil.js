const useragent = require('../');
const evil_agent = "A".repeat(1000);
console.time('useragent.parse');
useragent.parse(evil_agent);
console.timeEnd('useragent.parse');
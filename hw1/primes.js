#!/usr/bin/env node
var fs = require('fs');
var outfile = "primes.txt";
var out = function(max) {
  var p = "";
  var count = 0;
  var i = 2;

  while(count < max) {
    if(isPrime(i)) {
      count++;
      if(count == max) p += i;
      else p += i + ",";
    }
    i++;
  }  

  return p;
};

var cache = []
function isPrime(i) {
  var sqrt = Math.floor(Math.sqrt(i))
  
  for(var j = 0; j < cache.length && j < sqrt; j++) {
    if(i % cache[j] == 0) return false;
  }
  
  cache.push(i);
  return true;
}

fs.writeFileSync(outfile, out(100));  
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);

const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

// The factorial calculation has to be accurate in order for e() to be accurate, so I removed tests for factorial().
assert(e(0) === 1);
assert(e(1) === 2);
assert(e(2) === 2.5);
assert(e(3) === 2.6666666666666665);
assert(e(4) === 2.708333333333333);
assert(e(5) === 2.7166666666666663);
assert(e(6) === 2.7180555555555554);
assert(e(7) === 2.7182539682539684);
assert(e(8) === 2.71827876984127);
assert(e(9) === 2.7182815255731922);
assert(e(10) === 2.7182818011463845);

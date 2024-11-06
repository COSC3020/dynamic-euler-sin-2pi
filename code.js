function factorial(n) {
  facts = [];

  facts[0] = 1;

  for (let i = 1; i <= n; i++) {
    facts[i] = i * facts[i - 1];
  }

  return facts;
}

// mymap = factorial(5);
// console.log(mymap[2]);

function e(n) {
  if (n < 0) return 0;

  ourmap = factorial(n)
  sum = 1;

  for (let i = 1; i <= n; i++) {
    sum += 1.0 / ourmap[i];
    // console.log(sum);
  }

  return sum;
}

console.log(e(10));
console.log(factorial(10));

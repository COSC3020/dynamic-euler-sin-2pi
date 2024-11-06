function e(n) {
  if (n < 0) return 0;
    
  facts = [];
  facts[0] = 1;
  
  sum = 1;

  for (let i = 1; i <= n; i++) {
    facts[i] = i * facts[i - 1];
  }
  

  for (let i = 1; i <= n; i++) {
    sum += 1.0 / facts[i];
  }

  return sum;
}

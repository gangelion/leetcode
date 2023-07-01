function plusOne(digits) {
  const result = BigInt(digits.join('')) + BigInt(1)
  return String(result).split('').map(Number)
};

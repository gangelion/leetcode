function isValid(s) {
  const stack = []
  const store = { ')': '(', '}': '{', ']': '[' }

  for (let i = 0; i < s.length; i++) {
    if (stack.length < 1) stack.push(s[i]) // add to stack if nothing in
    else if (stack[stack.length - 1] !== store[s[i]]) stack.push(s[i]) // push to stack if top char in stack not closing current char
    else stack.pop() // Here remove the top element in stack, this will be closing that element i.e. we'll have e.g. '(' in stack and current value is ')'
  }

  return stack.length === 0
}

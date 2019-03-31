const substring = (left, right, start, stop) => {
  if (stop <= left.length) {
    return left.slice(start, stop)
  }

  if (start >= left.length) {
    return right.slice(start-left.length, stop-left.length)
  }

  return left.slice(start)+right.slice(0, stop-left.length)
}

it("Substring", () => {
  expect(substring('', 'def', 0, 6)).toBe('def')
  expect(substring('abc', 'def', 0, 1)).toBe('a')
  expect(substring('abc', 'def', 0, 2)).toBe('ab')
  expect(substring('abc', 'def', 0, 3)).toBe('abc')
  expect(substring('abc', 'def', 2, 3)).toBe('c')
  expect(substring('abc', 'def', 2, 5)).toBe('cde')
  expect(substring('abc', 'def', 3, 4)).toBe('d')
  expect(substring('abc', 'def', 3, 5)).toBe('de')
  expect(substring('abc', 'def', 4, 5)).toBe('e')
  expect(substring('abc', 'def', 5, 6)).toBe('f')
  expect(substring('abc', 'def', 0, 6)).toBe('abcdef')
});


const fn = require('../a')
const alsoFn = require('../../test-lib/mock')

test('jest works', () => {
  expect(fn).toBe(alsoFn)
})

const fn = require('../a')
const alsoFn = require('../../test-lib/mock')

jest.mock('../a')
test('jest works', () => {
  expect(fn).toBe(alsoFn)
})

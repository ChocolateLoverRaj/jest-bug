const { mock } = require('jest-mock-imports')

module.exports = {
  process: mock({
    modules: new Map(),
    files: new Set([
      'lib/a.js'
    ])
  })
}

const { performance } = require("perf_hooks")

function timeFunction(func, ...args) {
  const start = performance.now()
  func(...args)
  const end = performance.now()

  console.log(args, (start - end).toFixed(3), "<--- run time")
  return (start - end).toFixed(3)
}

module.exports = timeFunction

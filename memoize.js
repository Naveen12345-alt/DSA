function memoize(expensiveFn) {
  //Implement this
  let cache = null
  return (callback) => {
    if (cache) {
      callback(cache)
    } else {
      expensiveFn((arg) => {
        cache = arg
        callback(arg)
      })
    }
  }
}

// Do not modify from below

function expensiveFn(callbackFn) {
  setTimeout(() => callbackFn("movies list"), 30)
}

const memoizedExpensiveFn = memoize(expensiveFn)

let t1 = performance.now()

memoizedExpensiveFn((result) => {
  let t2 = performance.now()

  console.log(`Response received: ${result} in ${t2 - t1}ms`)

  // Response received: movies list in 30ms
})

setTimeout(() => {
  let t1 = performance.now()

  memoizedExpensiveFn((result) => {
    let t2 = performance.now()

    console.log(`Response received: ${result} in ${t2 - t1}ms`)

    // Response received: movies list in 0ms
  })
}, 100)

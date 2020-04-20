function check(a, x) {
  let holder = false
  a.forEach(char => {
    if (typeof char === 'number') {
      if (char === x) {
        holder = true
      }
    }
    if (typeof char === 'string') {
      if (char === x) {
        holder = true
      }
    }
  })
  return holder
}

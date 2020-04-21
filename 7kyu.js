/*
Create a function named divisors/Divisors that takes an integer n > 1 and returns an array 
with all of the integer's divisors(except for 1 and the number itself), 
from smallest to largest. If the number is prime return the string '(integer) is prime' 
(null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).
*/ 

//  First solution

function divisors(integer) {
  let counter = integer - 1
  let holder = []
  while (counter > 0) {
    if (integer % counter === 0) {
      holder.unshift(counter)
    }
    counter -= 1
  }
  holder.splice(0, 1)
  if (holder.length === 0) {
    return `${integer} is prime`
  }
  return holder
};

// Optimized Solution


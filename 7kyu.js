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


/*
You're in the casino, playing Roulette, going for the "1-18" bets only and desperate to beat the house and so you want to test how effective the Martingale strategy is.

You will be given a starting cash balance and an array of binary digits to represent a win or a loss as you play: 0 for loss and 1 for win.

You should create a function martingale to return the balance after playing all rounds.

You start with a stake of 100 dollars(unit of cash). If you lose a round, you lose the stake placed on that round and double the stake for your next bet. When you win, you win 100% of the stake and revert back to staking 100 dollars on your next bet.

 */

function martingale(bank, outcomes)
{
  let stack = bank;
  let roundBet = 100;
  for (let i=0; i<outcomes.length; i++) {
    let round = outcomes[i];
    if (round == 1) {
      stack = stack + roundBet;
      roundBet = 100;
    } else {
      stack = stack - roundBet;
      roundBet *=2;
    }
  }
  return stack;
}

/*
  There is likely a way to do this with less code using a reduce, but
  that is also harder to read.  It might be wise to use the reduce in
  the actual codebase but add a note that points towards this solution.
 */



function capitalize(s){
  return s.split('').reduce((acc, curr, i) => {
    if (i % 2 === 0){
      acc[0] += curr.toUpperCase()
      acc[1] += curr
    } else {
      acc[1] += curr.toUpperCase()
      acc[0] += curr 
    }
    return acc
  }, ["",""])
};

//  This one was fun.  I treated it as a "must get on first try"
//  problem and was successful.  Nice.

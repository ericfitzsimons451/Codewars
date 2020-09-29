/*
You will be given an array a and a value x. 

All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.
*/

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

const check = (a,x) => a.includes(x);




// Get Planet Name
// The function is not returning the correct values. Can you figure out why?

// Initial Solution
function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury'
      break;
    case 2:
      name = 'Venus'
      break;
    case 3:
      name = 'Earth'
      break;
    case 4:
      name = 'Mars'
      break;
    case 5:
      name = 'Jupiter'
      break;
    case 6:
      name = 'Saturn'
      break;
    case 7:
      name = 'Uranus'
      break;
    case 8:
      name = 'Neptune'
      break;
  }
  return name;
}

// Optimized Solution

function getPlanetName(id){
  var name = {
    1: 'Mercury',
    2: 'Venus',
    3: 'Earth',
    4: 'Mars',
    5: 'Jupiter',
    6: 'Saturn',
    7: 'Uranus',
    8: 'Neptune',
  };
  
  return name[id];
}




/*You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.*/


function positiveSum(arr) {
return arr.reduce((sum, curr) => {
  curr > 0 ? sum += curr : sum += 0
  return sum
}, 0)
}


var summation = function (num) {
  let holder = 0
  for(let i = 1; i < num + 1; i++) {
    holder += i
  }
  return holder
}

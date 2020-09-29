// This will create a chess board with blanks and hashes


function chessboard() {
  let a = " "
  let b = "#"

  let escapeChar = "\n"
  let holder = "" 
 for (let row = 1; row <= 4; row++){
  for(let row = 1; row <= 4; row++) {
  holder += `${a}${b}`
  }
  holder += escapeChar
  for(let row = 1; row <= 4; row++) {

  holder += `${b}${a}`
  }
  holder += escapeChar
 }
  return holder
}
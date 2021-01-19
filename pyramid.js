// For a given number of levels, print out a “pyramid” using hashes and spaces.


function pyramid(number){
  let space = " "
  let block = "#"
  let rows = number
  let blocks = 1
  
  for(let i = 1; i <= rows; i++){
      console.log(space.repeat(number -= 1) + block.repeat(blocks))
      blocks+=2
  }
}

console.log(pyramid(4))
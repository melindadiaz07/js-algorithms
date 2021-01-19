// For a given number of steps, print out a “staircase” using hashes and spaces.

function stairs(number){
  let space = " "
  let stair = "#"
  
  let stepsArray = new Array(number + 1)
  for(let i = 0; i < stepsArray.length; i++){
      stepsArray[i] = space.repeat(i) + stair
      console.log(stepsArray[i])
  }
}

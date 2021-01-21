// A numeric array of length N is given. We need to design a function that finds all positive numbers in the array that have their opposites in it as well. 
// Describe approaches for solving optimal worst case and optimal average case performance, respectively.

function matchOpposites(arr){

    
  let numberCounts = {}
  let matchedNumbers = []
  
  arr.forEach(number => {
      numberCounts[number] = numberCounts[number] + 1 || 1
  })
  
  // find opposite, and if it exists add it to return array, and decrement value in table
  
  
  Object.keys(numberCounts).forEach(number => {
      if(number > 0){
          // only need to check positive numbers
          numberCounts[number * -1] ?
          matchedNumbers.push(number) :
          null
          
          // need to check if value is greater than 1 for positive key - if so, check value of negetive and push number onto array that the matching multiple of times
  })
  
  return matchedNumbers


}



const numbersArray = [-7, 4, -3, 2, 2, -8, -2, 3, 3, 7, -2, 3, -2]

console.log(matchOpposites(numbersArray))
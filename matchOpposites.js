// A numeric array of length N is given. We need to design a function that finds all positive numbers in the array that have their opposites in it as well. 
// Describe approaches for solving optimal worst case and optimal average case performance, respectively.

function matchOpposites(arr){

    
  let numberCounts = {}
  let matchedNumbers = []
  
  arr.forEach(number => {
      numberCounts[number] = numberCounts[number] + 1 || 1
  })

  
  Object.keys(numberCounts).forEach(number => {
      if(number > 0 && numberCounts[number * -1]){
          
          if(numberCounts[number] >= numberCounts[number * -1]) {
          for(let i = 1; i <= numberCounts[number * -1]; i++){
         matchedNumbers.push(number)
          }
        } else {
          for(let i = 1; i <= numberCounts[number]; i++){
         matchedNumbers.push(number)
          }
        }
      }
  })
  
  return matchedNumbers

}



const numbersArray = [-7, 4, -3, 2, 2, -8, -2, 3, 3, 7, -2, 3, -2]

console.log(matchOpposites(numbersArray))
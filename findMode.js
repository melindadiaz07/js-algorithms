// mode is defined as the number or numbers that appear the most often
// if all numbners appear with same frequency, return statement certifying this
// what to do if there are multiple modes? return array of those

function findMode(arr){
  let numFrequency = {}
  let highest = [arr[0]]
  
  arr.forEach(number =>
      numFrequency[number] = numFrequency[number] + 1 || 1)
  
  for (const key of Object.keys(numFrequency)){
     
     if (numFrequency[key] > numFrequency[highest[0]]){
         highest = [key]
     } else if ( numFrequency[key] == numFrequency[highest[0]] && key != highest[0]) {
         highest.push(key)
     } 
  }
  
  if ( highest.length === arr.length) { 
      return "All numbers repeat the same frequency"  
  } 
  return highest
}

console.log(findMode([1, 2, 2, 3]), "should return 2")
console.log(findMode([1, 2, 3]), "should return no mode")
console.log(findMode([1, 2, 2, 3, 3]), "should return [2, 3]")
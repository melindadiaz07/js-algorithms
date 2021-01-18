// find the mean of an array of numbers

function findMean(arr){
  let sum = 0
  return arr.reduce((sum, number)=> sum += number) / arr.length
}


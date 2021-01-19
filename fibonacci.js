// Implement a function that returns the fibonacci number at a given index.


function fibonacci(index){
    
  if (index === 0) return 0
  
  let fibArr = new Array(index+1)
  fibArr[0] = 0
  fibArr[1] = 1
 
 for (let i = 2; i < fibArr.length; i++){
     fibArr[i] = fibArr[i-1] + fibArr[i-2]
 }
  return fibArr[index]
}


console.log(fibonacci(3), "should return 1")
console.log(fibonacci(1), "should return 2")
console.log(fibonacci(5), "should return 5")
console.log(fibonacci(7), "should return 13")

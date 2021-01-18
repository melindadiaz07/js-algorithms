// find median from an array of numbers - if even amount of elements, return average of 2 medians
// 

function findMedian(arr){
  let sortedArr = arr.sort()
  
  return(
  arr.length % 2 === 0 ?
   (sortedArr[Math.floor(arr.length/2)] + sortedArr[Math.ceil(arr.length/ 2) ]) / 2 
   :
   sortedArr[arr.length/ 2]
   )
   
}



function mergeSort(array){

  if(array.length < 2) return array
  
  const middle = Math.floor(array.length / 2)
  const leftSide = array.slice(0, middle)
  const rightSide = array.slice(middle, array.length)
  
  console.log(leftSide, rightSide)
  
  return merge(mergeSort(leftSide), mergeSort(rightSide))

  }
  
  
  
  function merge(left, right){
      
     const sortedArray = []
      while(left.length && right.length){
          left[0] <= right[0] ?
             sortedArray.push(left.shift()) 
             : sortedArray.push(right.shift())
          console.log(sortedArray)
      }
      
      while(left.length) sortedArray.push(left.shift())
      while(right.length) sortedArray.push(right.shift())
    
    
    return sortedArray
  }
  
  const array = [6, 1, 9, 4, 2, 7]
  console.log(mergeSort(array))
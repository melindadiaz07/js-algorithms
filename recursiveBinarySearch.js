
function recursiveSearch (array, element, firstIndex=0, lastIndex=array.length-1){

if(firstIndex > lastIndex) { return "Not in array" }
  
const middle = Math.floor((firstIndex + lastIndex)/2)

if (element === array[middle]) { return middle }

 if (element > array[middle]){
   return recursiveSearch(array, element, middle+1, lastIndex) 
 } else {
   return recursiveSearch(array, element, firstIndex, middle-1)
 } 
}

const array = [1, 2, 3, 4, 5, 6, 7]

// const middle = Math.floor(array.length /2)
// console.log(recursiveSearch(array, 9))




// Write a function that will return the count of distinct case-insensitive alphabetic characters 
// and numeric digits that occur more than once in the input string. The input string can be assumed 
// to contain only alphabets (both uppercase and lowercase) and numeric digits.

function countDuplicates(string){

  
      let letterCounts = {}
      
      
      for(let i = 0; i < string.length; i++){
         
          if(string[i] != " ") {
         letterCounts[string[i]] = letterCounts[string[i]] + 1 || 1
       }
      }
    return letterCounts
  }
  
  console.log(countDuplicates("Count the occurences of each of the letters in this sentence"))


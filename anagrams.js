// Anagrams are words or phrases that contain the same number of characters. Create a function that checks for this.

// helper method to create tables - abstraction
const charCount = (str) => {
    
  let charTable = {}
  
  for(let i = 0; i < str.length; i++) {
      charTable[str[i]] = charTable[str[i]] + 1 || 1
  }
  return charTable
}

// checks only lower case words with no special characters or spaces - could create another helper function to hanlde these cases
const checkAnagram = (word, anagram) => {
  
  let wordTable = charCount(word)
  let anagramTable = charCount(anagram)
 
  if (word.length !== anagram.length) return false
  
  for (let i = 0; i < word.length; i++){
      
      if(wordTable[word[i]] !== anagramTable[anagram[i]]) return false
  }
  
  return true
}
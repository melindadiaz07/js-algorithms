// Given a string of characters, return the character that appears the most often.
// ? what if the characters all repeat the same number of times (such as once each)

const maxCharacter = (str) => {
  let charCounter = { }
  let currentHighest = str[0]

  
  for(let i = 0; i < str.length; i++){
      if(charCounter[str[i]]) {
          charCounter[str[i]] += 1
          
          if (charCounter[str[i]] > charCounter[currentHighest]) {
              currentHighest = str[i] }
              
      } else {
          charCounter[str[i]] = 1
      }
  }
  return currentHighest
}

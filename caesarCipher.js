// Given a phrase, substitute each character by shifting it up or down the alphabet by a given integer. 
// If necessary, the shifting should wrap around back to the beginning or end of the alphabet.
// works with capital and lowercase letters



function caesarCipher(str, shift){
    
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split('')
  

   let cipherText = []

   for(let i = 0; i < str.length; i++){
       
      if ((alphabet.indexOf(str[i].toLowerCase()) < 0 )) { 
          cipherText.push(str[i]) 
      } else if (str[i] === str[i].toUpperCase()) {
          let letterIndex = alphabet.indexOf(str[i].toLowerCase())
          
           cipherText.push(alphabet[(letterIndex + shift) % 26].toUpperCase())
       } else {
           let letterIndex = alphabet.indexOf(str[i].toLowerCase())
           cipherText.push(alphabet[(letterIndex + shift) % 26])
       }
   }
   return cipherText.join("")
}


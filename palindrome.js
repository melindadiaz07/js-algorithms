// check if a string is a palindrome (not case-seensitive)

function checkPalindrome(str){
  if (str <= 1) return true

//   console.log(str.slice(1, str.length-1))
  return(
    str[0] === str[str.length-1] ? 
      checkPalindrome(str.slice(1, str.length-1)) :
      false
   )
}

(checkPalindrome(tacocat))


// tacocat tt aa cc o
// toot tt oo 
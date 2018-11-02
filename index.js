window.addEventListener("load", () => {
  //start your code here
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
  const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const numbers = '0123456789'
  const specialCharacters = '!#$%&()*+,-./:;<=>?@[\]^_{|}~'
  
  //1. figure out pw length
  document.addEventListener('submit', (event) => {
    //don't refresh
    event.preventDefault()
    
    const input = document.querySelector('input')
    const passwordLength = parseInt(input.value, 10) 
    console.log(passwordLength)
    let password = '' //start with empty password 
    
    // build the password up until passwordLength
    for (let i = 0; i < passwordLength; i++) {
      const randomLowerCaseIndex = Math.round(Math.random() * lowerCaseLetters.length )//gives you a random # every time 
      
      
      password = password + lowerCaseLetters[randomLowerCaseIndex]
      
    }
    console.log(password)
  })
  
  
  //2. make a password up 
  
  
  
  //3. keep track of given requirements 
  
  
  
  
});

function isPalindrome(input) {
    const str = input.toLowerCase()
    var len = str.length
    for (var i = 0; i < len; i++)
      if (str[i] !== str[str.length - i - 1])
        var bool = false
      else
        var bool = true
  
    console.log('Word: ' + str)
    console.log('Palindrome ?: ' +bool.toString())
  
    return
  }
  
  isPalindrome('RadAR')
function convertToVowels(input){

    const vowels = input.match(/[aeiou]/g).join('')
    console.log('Input: ' + input)
    console.log('Vowels: ' + vowels)

}


convertToVowels('Carl Johnson')
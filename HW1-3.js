function reverse(input){
    const char = input.split('')
    const flipped = char.reverse()
    const newword = flipped.join('')

    console.log('Original: ' + input)
    console.log('Reversed: ' + newword)

}

reverse('Todd Coward')
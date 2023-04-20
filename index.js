// You are going to be given a word. Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character. If the word's length is even,
// return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

const getMiddle = (word) => {
    let arr = word.split("")
    let length = arr.length
    let middleEl = Math.floor(length/2)
    if(length % 2 === 0){
        return `${arr[middleEl - 1]}${arr[middleEl]}`
    } else{
        return `${arr[middleEl]}`
    }
}

getMiddle("abcdef")
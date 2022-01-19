function reverseString(word) {
    const wordArray = word.split("")
    const reversedWordArray = wordArray.reverse()
    const reversedWord = reversedWordArray.join("")

    return reversedWord
}

function isPalindrome(word) {
    const reversedWord = reverseString(word)
    if (word === reversedWord) {
        return true
    } else {
        return false
    }

}
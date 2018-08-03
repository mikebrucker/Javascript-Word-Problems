// 1 - Reverse a String - Write a JavaScript function that takes in a string and reverses it. A for loop would be handy for this!

function reverseString(str) {
    var stringReversed = '';
    for(var i = str.length - 1; i >= 0; i--) {
        stringReversed = stringReversed + str[i];
    }
    return stringReversed;
}


// 2 - FizzBuzz - Write a program that console.logs the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five console.log “Buzz”. For numbers which are multiples of both three and five console.log “FizzBuzz”. Hint: Look into the '%' operator

for (var i = 1; i < 101; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log('FizzBuzz');
    } else if (i % 3 == 0) {
        console.log('Fizz');
    } else if (i % 5 == 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

// 3 - Pig Latin - Pig Latin is a game of alterations played on the English language. To create the Pig Latin form of an English word the initial consonant sound is transposed to the end of the word and an ay is affixed (Ex.: "banana" would yield "anana-bay"). Check out Wikipedia (Links to an external site.)Links to an external site. for more information on rules - try to get as close as possible. - Compose a javascript function that takes in a regular sentence or paragraph and returns the Pig Latin equivalent.
// Capitalized the finished word if the original word started with a capital letter.
function capitalize(pigLatinWord) {
    var capitalLetter = pigLatinWord.charAt(0).toUpperCase();
    pigLatinWord = capitalLetter + pigLatinWord.slice(1);
    return pigLatinWord;
}

var pigLatinWord = '';
function pigLatin(word) {
    var isFirstLetterCapital = word.charAt(0);
    var thisFirstLetterIsCapital = word.charAt(0).toUpperCase();
    console.log('First letter of original word is ' + word.charAt(0));
    word = word.toLowerCase();
    if (
// Words that start with a vowel and end with a vowel
    ((word.charAt(0) == 'a') || 
    (word.charAt(0) == 'e') || 
    (word.charAt(0) == 'i') || 
    (word.charAt(0) == 'o') || 
    (word.charAt(0) == 'u') || 
    (word.charAt(0) == 'y')) &&
    ((word.charAt(word.length - 1) == 'a') || 
    (word.charAt(word.length - 1) == 'e') || 
    (word.charAt(word.length - 1) == 'i') || 
    (word.charAt(word.length - 1) == 'o') || 
    (word.charAt(word.length - 1) == 'u'))) {
        console.log('First letter of new word is ' + word.charAt(0));
        pigLatinWord = (word + 'yay');
    } else if (
// Words that start with a vowel and end with a consonant
    (word.charAt(0) == 'a') || 
    (word.charAt(0) == 'e') || 
    (word.charAt(0) == 'i') || 
    (word.charAt(0) == 'o') || 
    (word.charAt(0) == 'u') || 
    (word.charAt(0) == 'y')) {
        console.log('First letter of new word is ' + word.charAt(0));
        pigLatinWord = (word + 'ay');
    } else if (
// Words that start with one consonant
    (word.charAt(1) == 'a') || 
    (word.charAt(1) == 'e') || 
    (word.charAt(1) == 'i') || 
    (word.charAt(1) == 'o') || 
    (word.charAt(1) == 'u') || 
    (word.charAt(1) == 'y')) {
        console.log('First letter of new word is ' + word.charAt(1));
        word = (word + word.charAt(0) + 'ay');
        pigLatinWord = word.slice(1);
    } else if (
// Words that start with two consonants
    (word.charAt(2) == 'a') || 
    (word.charAt(2) == 'e') || 
    (word.charAt(2) == 'i') || 
    (word.charAt(2) == 'o') || 
    (word.charAt(2) == 'u') || 
    (word.charAt(2) == 'y')) {
        console.log('First letter of new word is ' + word.charAt(2));
        word = (word + word.charAt(0) + word.charAt(1) + 'ay');
        pigLatinWord = word.slice(2);
    } else if (
// Words that start with three consonants
    (word.charAt(3) == 'a') || 
    (word.charAt(3) == 'e') || 
    (word.charAt(3) == 'i') || 
    (word.charAt(3) == 'o') || 
    (word.charAt(3) == 'u') || 
    (word.charAt(3) == 'y')) {
        console.log('First letter of new word is ' + word.charAt(3));
        word = (word + word.charAt(0) + word.charAt(1) + word.charAt(2) + 'ay');
        pigLatinWord = word.slice(3);
    } else if (
// Words that start with four consonants
    (word.charAt(4) == 'a') || 
    (word.charAt(4) == 'e') || 
    (word.charAt(4) == 'i') || 
    (word.charAt(4) == 'o') || 
    (word.charAt(4) == 'u') || 
    (word.charAt(4) == 'y')) {
        console.log('First letter of new word is ' + word.charAt(4));
        word = (word + word.charAt(0) + word.charAt(1) + word.charAt(2) + word.charAt(3) + 'ay');
        pigLatinWord = word.slice(4);
    } else {
// Words that do not have any vowels
        console.log('First letter of new word is ' + word.charAt(0));
        word = (word + word.charAt(0) + 'ay');
        pigLatinWord = word.slice(1);
    }
    if (isFirstLetterCapital == thisFirstLetterIsCapital) {
        pigLatinWord = capitalize(pigLatinWord);
        return pigLatinWord;
    } else {
        return pigLatinWord;
    }
}

"use strict";
// add whatever parameters you deem necessary & write doc comment
//accepts 2 strings. words and letter
//return true if word can be built with letters
//else false
//not case-sensitive or punctuated
//O(w + k) == 2 linear pieces

/**function takes two strings (words and letters) and returns true if word can be spelled with letters, or false if not */
function canConstructWord(words, letters) { 
    let wordsCounter = frequencyCounter(words);
    let lettersCounter = frequencyCounter(letters);

    for(let key in wordsCounter) {
        if (!(wordsCounter[key] <= lettersCounter[key])) {
            return false;
        }
    }
    return true;
}




/**function takes an array, and returns an objects with the elements as keys and their frequencies as the values */
function frequencyCounter(array) {
    const counter = {};

    for(let i = 0; i < array.length; i++) {
        if(counter[array[i]] === undefined) {
            counter[array[i]] = 1
        } else {
            counter[array[i]]++;
        }
    }
    return counter;
}
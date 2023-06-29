

// EXERCISE 3

// Write a function countBs that takes a string as its only argument and 
// returns a number that indicates how many uppercase “B” characters there are 
// in the string.

/*
function countBs(word) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] == "B") {
            count += 1;
        }
    }

    return count;
}

console.log(countBs("Better"));
console.log(countBs("Obvious"));
console.log(countBs("BBC"));
*/



// write a function called countChar that behaves like countBs, except it takes
// a second argument that indicates the character that is to be counted

function countChar(word, char) {
    // word = String(word);
    // char = String(char);
    let count = 0;

    for (let i = 0; i < word.length; i++) {
        if (word[i] == char) {
            count += 1;
        }
    }

    return count;
}

console.log(countChar("Obvious", "a"));
console.log(countChar("Obvious", "b"));
console.log(countChar("Congratulation", "o"));
console.log(countChar("kakkerlak", "k"));



// Rewrite the function countBs to make use of the function countChar.
function countBs(word) {
    return countChar(word, "B");
}

console.log(countBs("Better"));
console.log(countBs("Obvious"));
console.log(countBs("BBC"));

























































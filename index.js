// Today's exercise: Word Censor

// Repo: boolean-uk-js-word-censor

// Description
// Our program takes in text, a list of words to censor, what to censor them with (**, BEEP, xxx, !!!, etc), and it returns a censored 
//version of the text.

// Instructions
// - Download this template => https://codesandbox.io/s/word-censor-4doxt?from-embed=&file=/index.js
// - Do not use Codesanbox to code your solution
// - Use the provided array as an input
// - Create a function that censors the text input
// - print out the censored text

// Tips
// - Remember that functions should do only one thing very well
// - Think of how you can make your code readable by using functions

// Challenge 1
// Together with the new censored version, return a count of how many words were censored in the original text.

// Challenge 2**
// Instead of using hard-coded inputs, use prompts to grab:
// - The full text to censor
// - The words to be censored
// - What should replace the censored words

// NB: If you finish all the challenges meessage one of the coaches as we have another exercise you can continue to challenge yourself 
// with.

// const inputText = prompt("Enter your text here");
// const badWords = prompt("Enter words to censor");
// const replacementSymbol = prompt("Enter replacement symbol");

const text = "Lorem, ipsum dolor sit amet , consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const badWord = "ipsum dolor sit amet";
const replacementSymbol = "***";

function wordCensor(text, badWord, replacementSymbol) {   //declare function
    const textArray = text.split(" ");       //local scope
    console.log(textArray);
    const badWordArray = badWord.split(" ");    //local scope
        for (i=0; i<textArray.length; i++) {
            for (j=0; j<badWordArray.length; j++) {
                if (textArray[i] === badWordArray[j]) {
                    textArray[i] = replacementSymbol;
                }
            }
        }
        const output = textArray.join(" ");
        console.log(output);
}
wordCensor(text, badWord, replacementSymbol);



//

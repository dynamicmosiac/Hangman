// GLOBAL VAR
// ______________________________________________________________________________________________________
var wordBank =["cheetah", "pizza", "mosiac", "prism", "xylophone" ]

var randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
var rightWord = [0];
var wrongWord = [0];
var underScore = indexOf[randWord];
console.log(chosenWord);

// DOM MANIPULATION

docUnderScore = document.getElementsByClassName("underScore");
docRightGuess = document.getElementsByClassName("rightGuess");
docWrongGuess = document.getElementsByClassName("wrongGuess");




// MAIN
// ________________________________________________________________________________________________________


// Math Random 

var wordPicked = Math.floor(Math.random() * wordBank.Length);
console.log(wordBank[i])



// Create underscore of length of computer's randWord 
makeUnderScore = () => {
    for(i=0; i< randWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}

console.log("makeUnderScore");

underScore = [];
console.log("randWord");


//GET USER GUESS

document.addEventListener ("keypress", (event) => {
    keyword = String.fromCharCode(event.keyCode);
    
// IF USER IS CORRECT
    if(randWord.indexOf(keyword) > -1) {
        //ADD TO RIGHT WORDS ARRAY
            rightWord.push(keyword);
        // REPLACE UNDERSCORE WITH RIGHT LETTER
            underScore[randWord.indexOf(keyword)] = keyword;
        // CHECK TO SEE IF USER WORD MATCHES COMPUTER WORD
            if(underScore.join('') == randWord) {
                alert('You Win')
            }
    else {
        wrongWord.push(keyword);

    }
    }





// LOOPS - Array

// for(i=0; i<wordBank.length; i++) {
//     console.log(wordBank[i])
// }



// var wordPicker = Math.floor(Math.random() * wordBank.Length);
// console.log(wordBank[i])


// window.onload = function computerWord(){
//     for (i = 0 ; i < hiddenWord ; i++){
//         computerWord[i] = "_"
//         console.log(computerWord) 

const dynamicContent = document.getElementById("dynamic-text");
console.log(dynamicContent);

const phrases = ["Software Engineer...", "Architect...", "Human Being...", "A Sama"];
let phraseIndex= 0;
let letterIndex = 0;
const typingSpeed = 100;
const eraseSpeed = 75;

function printletters(phrase){
   
    if (letterIndex == phrase.length){
        // clear letters that have been typed
        clearLetters();
    }
   else if(letterIndex < phrase.length){
        dynamicContent.textContent += phrase.charAt(letterIndex);
        letterIndex +=1;
        setTimeout(function(){
            printletters(phrase)
    }, typingSpeed)
    }
}

function clearLetters(){
    if (letterIndex == -1) {
        phraseIndex = (phraseIndex+1) % phrases.length;
        letterIndex = 0 
        printletters(phrases[phraseIndex])
    }
   else if (letterIndex > -1){
        let updatedPhrase = "";
        for (let index = 0; index < letterIndex; index++) {
            updatedPhrase += phrases[phraseIndex].charAt(index);
        }
        console.log(updatedPhrase);
        dynamicContent.textContent = updatedPhrase;
        letterIndex -= 1;
        setTimeout(clearLetters, eraseSpeed)
    }
}


printletters(phrases[phraseIndex])
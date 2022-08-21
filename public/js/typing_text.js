const typer = document.getElementById("typer");
const cursor = document.getElementById("cursor");

const mainArr = ["IdeaThon", "Hackathon", "Workshops"];

const typingDelay = 150; //when typing text
const eraseingDelay = 75; //when eraseing text
const nextTypeDeley = 2000; //go to next text

let currentIndex = 0,
    currentLetter = 0;

function type() {
    if (currentLetter < mainArr[currentIndex].length) {
        typer.textContent += mainArr[currentIndex][currentLetter];
        currentLetter++;
        setTimeout(type, typingDelay);
        cursor.classList.remove("active"); //when typing
    } /*text was typed*/ else {
        cursor.classList.add("active");
        setTimeout(erase, eraseingDelay + 2000);
        //let user see text before eraseing
    }
}

function erase() {
    if (currentLetter > 0) {
        typer.textContent = typer.textContent.substring(0, currentLetter - 1);
        currentLetter--;
        setTimeout(erase, eraseingDelay);
        cursor.classList.remove("active"); //when eraseing
    } /*text was eraseing*/ else {
        cursor.classList.add("active");
        currentIndex++;
        if (currentIndex >= mainArr.length) currentIndex = 0; //loop
        setTimeout(type, nextTypeDeley);
    }
}

addEventListener("DOMContentLoaded", function () {
    /* 
           event fires when the initial HTML 
           document has been completely loaded 
           and parsed, without waiting for 
           stylesheets, images, and subframes to finish loading.
          */
    setTimeout(type, typingDelay);
});

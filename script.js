function playSound(e) {
    //selecting audio elements using the data-key attribute
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)

    // selecting element with class of key and the element with data-key attribute
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
 
    //if there is no audio element, stop the function from running
    if (!audio)
        return;
    // this will reset the audio back to zero when the key is pressed so that audio can be played in succession
    audio.currentTime = 0;
    audio.play();

    // adds class 'playing' when key down event happens'
    key.classList.add("playing");
};

// calling this function will stop the css transition attributes 
function removeTransition(e) {
    if (e.propertyName !== "transform")
        return;  //if property name is not 'transform' end function
    this.classList.remove("playing");
}

// selects all elements with a class of key and adds them into an array
const keys = document.querySelectorAll('.key');
// for each element of the array add an eventlistener for transition end and call the removeTransition function
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

// add event listener for keydown events, and run the playSound function when event happens
window.addEventListener('keydown', playSound)
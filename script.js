window.addEventListener('keydown', function(e){
    //selecting audio elements using the data-key attribute
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
console.log(audio);

// selecting element with class of key and the element with data-key attribute
const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
console.log(key)
//if there is no audio element, stop the function from running
if(!audio)
return;
// this will reset the audio back to zero when the key is pressed so that audio can be played in succession
audio.currentTime=0;
audio.play();

key.classList.add("playing");
});

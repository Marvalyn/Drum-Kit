window.addEventListener('keydown', function(e){
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
console.log(audio);

//if there is no audio element, stop the function from running
if(!audio)
return;
// this will reset the audio back to zero when the key is pressed so that audio can be played in succession
audio.currentTime=0;
audio.play();
});

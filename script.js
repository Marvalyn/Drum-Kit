window.addEventListener('keydown', function(e){
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
console.log(audio);

//if there is no audio element, stop the function from running
if(!audio)
return;
});

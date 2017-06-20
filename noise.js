const notes = ['a','b','c','d','e','f','g']
// connect onClick to audio function - tell it to play the audio
function playNote(note) {''
  // we need to get the right <audio> element
  // based on the note passed in
// console.log(note,`${note}Audio`)
let element = document.getElementById(`${note}Audio`)
  element.currentTime = 0
  element.play()
}

function clickHandler (event) {
  event.preventDefault()
  console.log(event)
  // we need to figure out which note is associated with the event
  let note = event.target.innerText
  console.log(note)
  // and then ask the audio element to play it for us
  playNote(note)
}
// this is the callback executed when a key is pressed
function keyHandler (event) {
  event.preventDefault()
  console.log("keypress")
  // get the key pressed during event
  let key = event.key
  // figure out if key pressed is one of my notes
  if (notes.includes(key)) {
    // play notes
    playNote(key);
  }
}

// event below delayed until DOMContentLoaded Happens
document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByClassName("note")
  for (button of buttons) {
 // listen for click. when it clicks, function is clickHandler, defined
  // on line 8. clickHandler is not executed here, just passed as a
  // parameter to another function. the delay in execution makes it
  // a callback
    button.addEventListener("click", clickHandler)
  }
// attach a callback to ALL keypress events,
  document.body.addEventListener("keypress",keyHandler);
})

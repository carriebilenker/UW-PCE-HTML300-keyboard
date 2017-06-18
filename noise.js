function playNote(note) {
  // we need to get the right <audio> element
  // based on the note passed in
  element.currentTime = 0
  element.play()
}

function clickHandler (event) {
  event.preventDefault()
  console.log(event)
  
  // we need to figure out which note is associated with the event
  // and then ask the audio element to play it for us
}

document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByClassName("note")
  for (button of buttons) {
    button.addEventListener("click", clickHandler)
  }
})

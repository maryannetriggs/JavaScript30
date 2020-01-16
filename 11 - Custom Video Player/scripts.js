// GET ELEMENTS

const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')


// BUILD FUNCTIONS

function togglePlay() {
  video.paused ? video.play() : video.pause()
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚'
  toggle.textContent = icon
}

function skip() {
  console.log(this.dataset.skip)
}

// ADD EVENT LISTENERS

video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)

toggle.addEventListener('click', togglePlay)

skipButtons.forEach(button => button.addEventListener('click', skip))

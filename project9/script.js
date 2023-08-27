const soundBoard = document.querySelectorAll('.sound')
let audio = new Audio('https://50projects50days.com/projects/sound-board/sounds/boo.mp3')

for (const button of soundBoard) {
    button.addEventListener('click', () => {
        audio.pause()
        audio = new Audio(`https://50projects50days.com/projects/sound-board/sounds/${button.innerText}.mp3`)
        audio.play()
    })
}
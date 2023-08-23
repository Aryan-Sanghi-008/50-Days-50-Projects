const panel = document.querySelectorAll('.panel')

function remClasses() {
    panel.forEach(panel => {
        panel.classList.remove('panel-active')
    })
}

panel.forEach(panel => {
    panel.addEventListener('click', () => {
        remClasses()
        panel.classList.add('panel-active')
    })
})
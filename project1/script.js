const panel = document.querySelectorAll('.panel')

function remClasses() {
    panel.forEach(panel => {
        panel.classList.remove('panel-active')
    })
}

panel.forEach(element => {
    element.addEventListener('click', () => {
        remClasses()
        element.classList.add('panel-active')
    })
})
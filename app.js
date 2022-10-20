const clearUnreads = document.querySelector('.read')
const countNots = document.querySelector('#numberNots')
const unreads = document.querySelectorAll('.notification__unread')
const icons = document.querySelectorAll('.icono')

clearUnreads.onclick = () => {
    unreads.forEach(note => {
        note.classList.remove('notification__unread')
    })
    icons.forEach(icon => {
        icon.classList.add('icono--opacity')
    })
    countNots.innerText = 0
}

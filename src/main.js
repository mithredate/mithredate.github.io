import './assets/main.css'

const button = document.getElementById('copy-email')
const state = button.querySelector('.state')

button.addEventListener('click', () => {
  navigator.clipboard.writeText('mehrdad.hedayati@gmail.com').then(() => {
    state.textContent = 'copied'
    setTimeout(() => { state.textContent = 'copy' }, 1600)
  }).catch(() => {
    const range = document.createRange()
    range.selectNodeContents(document.getElementById('email'))
    getSelection().removeAllRanges()
    getSelection().addRange(range)
    state.textContent = 'selected'
  })
})

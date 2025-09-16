// Desktop
// darkmode
const modeToggle = document.querySelector('.header__toggle')
const darkIcon = document.querySelector('[data-js="dark-mode"]')
const lightIcon = document.querySelector('[data-js="light-mode"]')

modeToggle.addEventListener('click', function(e) {
    let html = document.documentElement
    let dark = html.classList.toggle('dark-mode')
    if (dark) {
        localStorage.setItem('theme', 'dark')
    }
    else {
        localStorage.removeItem('theme')
    }
})

// select 
const selectBtns = document.querySelectorAll('.select-btn')
const selectDiv = document.querySelectorAll('[data-select="select-div"]')

selectBtns.forEach(function(current, index) {
    current.addEventListener('click', function(e) {
        let currentDiv = selectDiv[index]
        let selectActive = document.querySelector('.select-active')
        let notHidden = document.querySelector('.focus')

        selectActive.classList.remove('select-active')
        current.classList.add('select-active')
        currentDiv.classList.remove('hidden')
        currentDiv.classList.add('focus')
        notHidden.classList.add('hidden')
        notHidden.classList.remove('focus')
    })
})

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
        location.hash = this.id
        let currentDiv = selectDiv[index]
        let selectActive = document.querySelector('.select-active')
        let notHidden = document.querySelector('.focus')
        if(currentDiv === notHidden) {
            return
        }

        selectActive.classList.remove('select-active')
        current.classList.add('select-active')
        currentDiv.classList.remove('hidden')
        currentDiv.classList.add('focus')
        notHidden.classList.add('hidden')
        notHidden.classList.remove('focus')
    })
})

document.addEventListener('DOMContentLoaded', function() {
    let active = location.hash.slice(1)
    let activeBtn = document.getElementById(active)
    activeBtn.click()
})

// Mobile
// sidebar
let navbar = document.querySelector('.nav__bar')
let navbarIcon = document.querySelector('.lucide-menu')
let x = document.querySelector('.lucide-x')
let overlay = document.querySelector('.overlay')

navbarIcon.addEventListener('click', function(e) {
    navbar.classList.toggle('hidden')
    overlay.classList.remove('hidden')
    document.documentElement.classList.add('overflow-navbar')
})

x.addEventListener('click', function(e) {
    navbar.classList.add('hidden')
    overlay.classList.add('hidden')
    document.documentElement.classList.remove('overflow-navbar')
})

overlay.addEventListener('click', function(e) {
    overlay.classList.add('hidden')
    navbar.classList.add('hidden')
    document.documentElement.classList.remove('overflow-navbar')
})

let linkMobile = document.querySelectorAll('.nav__bar a')

linkMobile.forEach(function(e) {
    e.addEventListener('click', function(e) {
        navbar.classList.toggle('hidden')
        overlay.classList.toggle('hidden')
        document.documentElement.classList.remove('overflow-navbar')
    })
})

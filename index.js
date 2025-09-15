// Desktop
// darkmode
const modeToggle = document.querySelector('.header__toggle')
const darkIcon = document.querySelector('[data-js="dark-mode"]')
const lightIcon = document.querySelector('[data-js="light-mode"]')

if(localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark-mode')
}

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

// hdsd
const hdsdStep = document.querySelectorAll('.hdsd__step-h3')
const lefthdsd = document.querySelector('[data-js="left-hdsd"]')
const righthdsd = document.querySelector('[data-js="right-hdsd"]')
const hdsdImg = document.querySelectorAll('.hdsd__container-img')

// hdsd-step
hdsdStep.forEach(function(current, index) {
    let currentShow = hdsdImg[index]
    current.addEventListener('click', function(e) {
        let currentImg = document.querySelector('.hdsd__container-img:not(.hidden)')
        let currentStep = document.querySelector('.hdsd-active')
        if (currentImg) {
            currentImg.classList.add('hidden')
            currentStep.classList.remove('hdsd-active')
        }
        currentShow.classList.remove('hidden')
        current.classList.add('hdsd-active')
    })
})

// hdsd-arrow
lefthdsd.addEventListener('click', function(e) {
    let currentImg = document.querySelector('.hdsd__container-img:not(.hidden)')
    currentImg.classList.add('hidden')
    let currentStep = document.querySelector('.hdsd-active')
    currentStep.classList.remove('hdsd-active')
    let stepArray = Array.from(hdsdImg)
    let index = stepArray.findIndex(function(current) {
        return current === currentImg
    })
    let leftIndex = (index - 1 + hdsdImg.length) % hdsdImg.length
    hdsdImg[leftIndex].classList.remove('hidden')
    hdsdStep[leftIndex].classList.add('hdsd-active')
})

righthdsd.addEventListener('click', function(e) {
    let currentImg = document.querySelector('.hdsd__container-img:not(.hidden)')
    currentImg.classList.add('hidden')
    let currentStep = document.querySelector('.hdsd-active')
    currentStep.classList.remove('hdsd-active')
    let stepArray = Array.from(hdsdImg)
    let index = stepArray.findIndex(function(current) {
        return current === currentImg
    })
    let rightIndex = (index + 1) % hdsdImg.length
    hdsdImg[rightIndex].classList.remove('hidden')
    hdsdStep[rightIndex].classList.add('hdsd-active')
})

// faq
const faq = document.querySelectorAll('.faq__content-view')
const answer = document.querySelectorAll('.faq__content-answer')
const faqIcon = document.querySelectorAll('.faq__content-icon')

faq.forEach(function(current, index) {
    let answerShow = answer[index]
    let faqDown = faqIcon[index]
    current.addEventListener('click', function(e) {
        e.preventDefault()
        let currentAnswer = document.querySelector('.faq__content-answer:not(.hidden)')
        let currentDown = document.querySelector('.faq__content-icon.arrow_down')
        if(currentAnswer && currentAnswer !== answerShow && currentDown) {
            currentAnswer.classList.add('hidden')
            currentDown.classList.remove('arrow_down')
        }
        faqDown.classList.toggle('arrow_down')
        answerShow.classList.toggle('hidden')
    })
})
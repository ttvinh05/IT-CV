const imgs  = document.querySelectorAll('.hdsd__container-img')
const steps = document.querySelectorAll('.hdsd__step')
const links = document.querySelectorAll('.hdsd__step-h3')
const prev  = document.querySelector('.arrow-left')
const next  = document.querySelector('.arrow-right')

let index = 0 

function show(i) {
  const n = imgs.length
  index = (i + n) % n 

  imgs.forEach((img, k)  => img.classList.toggle('hdsd__img-active', k === index))
  steps.forEach((st, k)  => st.classList.toggle('hdsd__active',     k === index))
}

links.forEach((a, i) => {
  a.addEventListener('click', e => { e.preventDefault() 
    show(i)
   })
})

prev.addEventListener('click', () => show(index - 1))
next.addEventListener('click', () => show(index + 1));

[prev, next].forEach(el => el.addEventListener('mousedown', e => e.preventDefault()))

show(0) 

document.querySelectorAll('.faq__content-view').forEach(btn=>{
  btn.addEventListener('click',e=>{
    e.preventDefault()
    const item=btn.closest('.faq__content')
    const open=item.classList.contains('faq__content-open')
    document.querySelectorAll('.faq__content.faq__content-open').forEach(i=>i.classList.remove('faq__content-open'))
    if(!open) item.classList.add('faq__content-open')
  })
})

const KEY = 'theme'
if (!localStorage.getItem(KEY)) localStorage.setItem(KEY, 'light')

document.documentElement.dataset.theme = localStorage.getItem(KEY)

document.querySelector('.header__toggle')?.addEventListener('click', e => {
  e.preventDefault()
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'
  document.documentElement.dataset.theme = next
  localStorage.setItem(KEY, next)
})


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

const menuBtn  = document.querySelector('.header__mobile-menu')
const sidebar  = document.querySelector('.header__mobile-sidebar')
const closeBtn = document.querySelector('.header__mobile-sidebar .lucide-x')
const overlay  = document.querySelector('.overlay')

const openMenu  = () => {
  sidebar?.classList.remove('close')
  sidebar?.classList.add('open')
  overlay?.classList.add('open')
}

const closeMenu = () => {
  sidebar?.classList.remove('open')
  sidebar?.classList.add('close')
  overlay?.classList.remove('open')
}

document.querySelector('.header__mobile-sidebar')?.addEventListener('click', e => {
  const a = e.target.closest('a')
  if (!a) return

  const href = a.getAttribute('href') || ''
  closeMenu() 

  if (href.startsWith('#')) {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    history.pushState(null, '', href)
  }
})

menuBtn?.addEventListener('click', openMenu)
closeBtn?.addEventListener('click', closeMenu)
overlay?.addEventListener('click', closeMenu)
document.addEventListener('keydown', e => e.key === 'Escape' && closeMenu())



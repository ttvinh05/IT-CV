const buttons = document.querySelectorAll('[data-tab]')
const panels  = document.querySelectorAll('[data-panel]')

function showTab(name){
  buttons.forEach(b => b.classList.toggle('btn-active', b.dataset.tab === name))
  panels.forEach(p => p.classList.toggle('btn-active', p.dataset.panel === name))
}

buttons.forEach(btn => {
  btn.addEventListener('click', () => showTab(btn.dataset.tab))
})

const TPL_LABELS = { 
  general: 'Mẫu CV 1 trang', intern: 'Intern' 
}

const CAT_LABELS = {
  chung:'Chung', frontend:'FE', backend:'BE', fullstack:'Full-stack',
  mobile:'Mobile', qa:'QA', devops:'DevOps/SRE', data:'Data/AI'
}

document.querySelectorAll('.select__item[data-template]').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault()
    const tpl = a.dataset.template || 'general'
    const tplLabel = a.dataset.tplLabel || TPL_LABELS[tpl] || tpl

    const panel = a.closest('[data-panel]')
    const catSlug = panel?.dataset.panel || 'chung'
    const catLabel = a.dataset.categoryLabel || CAT_LABELS[catSlug] || catSlug

    localStorage.setItem('cvTpl', tpl)
    localStorage.setItem('cvCrumb', JSON.stringify({ cat: catLabel, catSlug, tpl: tplLabel }))
    location.href = a.getAttribute('href') || 'page3.html'
  })
})

// theme.js
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



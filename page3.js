// Avatar upload
const box   = document.getElementById('avatarBox')
const img   = document.getElementById('avatarImg')
const input = document.getElementById('avatarInput')

box?.addEventListener('click', () => input?.click())
input?.addEventListener('change', () => {
    const f = input.files && input.files[0]
    if (!f) return
    const r = new FileReader()
    r.onload = () => { img.src = r.result || '' }
    r.readAsDataURL(f)
})

// Template config
const TEMPLATES = {
    general: { show: ['summary', 'experience', 'projects', 'skills','education','certs','links'] },
    intern:  { show: ['objective','education','coursework','projects','skills','activities','certs','links'] } // KHÔNG có 'experience'
}

function getTpl(){
    const t = localStorage.getItem('cvTpl')
    return TEMPLATES[t] ? t : 'general'
}

function reorderForm(tpl){
  const order = TEMPLATES[tpl].show
  const container = document.querySelector('.form__content')
  // Đưa các nhóm theo đúng thứ tự template
  order.forEach(key=>{
    const el = document.querySelector(`.form__group[data-section="${key}"]`)
    if (el) container.appendChild(el)
  })
  // Đưa các nhóm còn lại (nếu có) xuống cuối
  document.querySelectorAll('.form__group[data-section]').forEach(el=>{
    if (!order.includes(el.dataset.section)) container.appendChild(el)
  })
}

function applyTemplate(){
    const tpl = getTpl()
    const allow = new Set(TEMPLATES[tpl].show)
    document.body.dataset.template = tpl
    document.querySelectorAll('.form__group[data-section]').forEach(g=>{
        const key = g.dataset.section
        g.style.display = allow.has(key) ? '' : 'none'
    })
    reorderForm(tpl)
}

// Helpers + Preview
function get(sel){ return (document.querySelector(sel)?.value || '').trim() }

function buildPreview(){
    const tpl = getTpl()
    const order = TEMPLATES[tpl].show

    // Header
    document.getElementById('cvName').textContent = get('[data-field="name"]') || ' '
    document.getElementById('cvJob').textContent  = get('[data-field="jobname"]') || ' '
    const av = document.getElementById('avatarImg')
    if (av) document.getElementById('cvAvatar').src = av.src || ''

    // Contacts
    const email = get('.form__content-email')
    const phone = get('.form__content-phone')
    const place = get('.form__content-place')
    const git   = get('.form__content-github')
    const contacts = [email && `Email: ${email}`, phone && `SĐT: ${phone}`, place && `Địa điểm: ${place}`, git && `GitHub: ${git}`].filter(Boolean)
    const ctn = document.getElementById('cvContacts')
    ctn.innerHTML = ''
    if (contacts.length){
      const ul = document.createElement('ul')
      ul.className = 'cv__list'
      contacts.forEach(text=>{
        const li = document.createElement('li')
        li.textContent = text
        ul.appendChild(li)
      })
      ctn.appendChild(ul)
    }

    // Sections theo template
    const wrap = document.getElementById('cvSections')
    wrap.innerHTML = ''

    order.forEach(key=>{
      const group = document.querySelector(`.form__group[data-section="${key}"]`)
      if (!group) return

      const title = group.querySelector('.form__group-title')?.textContent?.trim()
      let fields = []

      if ((group.dataset.split || '').toLowerCase() === 'lines'){
        const ta = group.querySelector('.form__group-input')
        const raw = (ta?.value || '')
        fields = raw.split(/\r?\n/).map(s=>s.trim()).filter(Boolean)
      } else {
        fields = [...group.querySelectorAll('.form__group-input')]
                .map(el => (el.value || '').trim())
                .filter(Boolean)
      }
      if (!fields.length) return

      const sec = document.createElement('section')
      sec.className = 'cv__section'
      if (title){
        const h3 = document.createElement('h3')
        h3.textContent = title
        sec.appendChild(h3)
      }
      if (fields.length === 1){
        const p = document.createElement('p')
        p.textContent = fields[0]
        sec.appendChild(p)
      } else {
        const ul = document.createElement('ul')
        ul.className = 'cv__list'
        fields.forEach(v=>{
          const li = document.createElement('li')
          li.textContent = v
          ul.appendChild(li)
        })
        sec.appendChild(ul)
      }
      wrap.appendChild(sec)
    })
}

function applyBreadcrumb(){
  let d = {}
  try { d = JSON.parse(localStorage.getItem('cvCrumb')||'{}') } catch {}
  const cat = d.cat || 'Chung'
  const slug = d.catSlug || 'chung'
  const tpl = d.tpl || (localStorage.getItem('cvTpl')==='intern' ? 'Intern' : 'Mẫu CV 1 trang')

  const a = document.getElementById('crumbCat')
  const b = document.getElementById('crumbTpl')
  if (a){ a.textContent = cat; a.href = `page2.html#${encodeURIComponent(slug)}` }
  if (b){ b.textContent = tpl }
}

// Init + events
document.addEventListener('DOMContentLoaded', () => {
  applyBreadcrumb();
  applyTemplate()
  buildPreview()
})
document.addEventListener('input', () => buildPreview())

const btnPrint = document.getElementById('btnPrint')
btnPrint?.addEventListener('click', e => {
  e.preventDefault()
  buildPreview()
  window.print()
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
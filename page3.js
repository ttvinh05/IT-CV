const box   = document.getElementById('avatarBox')
const img   = document.getElementById('avatarImg')
const input = document.getElementById('avatarInput')

box?.addEventListener('click', () => input?.click())

input?.addEventListener('change', () => {
  const f = input.files && input.files[0]
  if (!f) return

  const r = new FileReader()
  r.onload = () => {
    img.src = r.result || ''
  }
  r.readAsDataURL(f)
})

function get(sel) {
  return (document.querySelector(sel)?.value || '').trim()
}

function buildPreview() {
  document.getElementById('cvName').textContent = get('[data-field="name"]') || ' '
  document.getElementById('cvJob').textContent  = get('[data-field="jobname"]') || ' '

  const av = document.getElementById('avatarImg')
  if (av) {
    document.getElementById('cvAvatar').src = av.src || ''
  }

  const email = get('.form__content-email')
  const phone = get('.form__content-phone')
  const place = get('.form__content-place')
  const git   = get('.form__content-github')

  const contacts = [
    email && `Email: ${email}`,
    phone && `SĐT: ${phone}`,
    place && `Địa điểm: ${place}`,
    git   && `GitHub: ${git}`
  ].filter(Boolean)

  const ctn = document.getElementById('cvContacts')
  ctn.innerHTML = ''

  if (contacts.length) {
    const ul = document.createElement('ul')
    ul.className = 'cv__list'
    contacts.forEach(text => {
      const li = document.createElement('li')
      li.textContent = text
      ul.appendChild(li)
    })
    ctn.appendChild(ul)
  }

  const wrap = document.getElementById('cvSections')
  wrap.innerHTML = ''

  document.querySelectorAll('.form__group').forEach(group => {
    const title = group.querySelector('.form__group-title')?.textContent?.trim()
    const fields = [...group.querySelectorAll('.form__group-input')]
      .map(el => (el.value || '').trim())
      .filter(Boolean)

    if (!fields.length) return

    const sec = document.createElement('section')
    sec.className = 'cv__section'

    if (title) {
      const h3 = document.createElement('h3')
      h3.textContent = title
      sec.appendChild(h3)
    }

    if (fields.length === 1) {
      const p = document.createElement('p')
      p.textContent = fields[0]
      sec.appendChild(p)
    } else {
      const ul = document.createElement('ul')
      ul.className = 'cv__list'
      fields.forEach(v => {
        const li = document.createElement('li')
        li.textContent = v
        ul.appendChild(li)
      })
      sec.appendChild(ul)
    }

    wrap.appendChild(sec)
  })
}

document.addEventListener('DOMContentLoaded', buildPreview)
document.addEventListener('input', buildPreview)

const btnPrint = document.getElementById('btnPrint')
btnPrint?.addEventListener('click', e => {
  e.preventDefault()
  buildPreview()
  window.print()
})


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

// breadCrumb
const map = {
  'Đơn giản': 'simple',
  'Màu sắc': 'color',
  'Không ảnh': 'noimg'
}

const hash = location.hash.slice(1).split('|')
const cbPage2 = decodeURIComponent(hash[0])
const cbName = decodeURIComponent(hash[1])

document.querySelector('.form__breadcrumb-link').textContent = cbPage2
document.querySelector('.form__breadcrumb-link').href = 'page2.html#' + encodeURIComponent(cbPage2)
document.querySelector('[data-js="current-template"]').textContent = cbName

document.documentElement.setAttribute('data-tpl', map[cbPage2])

let form__breadcrumb = document.querySelector('.form__breadcrumb-link')
if(cbPage2 === 'Đơn giản') {
  form__breadcrumb.setAttribute('href', 'page2.html#simple')
}
else if(cbPage2 === 'Màu sắc') {
  form__breadcrumb.setAttribute('href', 'page2.html#color')
}
else if(cbPage2 === 'Không ảnh') {
  form__breadcrumb.setAttribute('href', 'page2.html#noimg')
}

let internHidden = document.querySelector('[data-js="intern"]')
let subjectHidden = document.querySelector('[data-js="subject"]')
let activeHidden = document.querySelector('[data-js="active"]')
let expHidden = document.querySelector('[data-js="exp"]')
let fresherHidden = document.querySelector('[data-js="fresher"]')

if((cbName === 'Mẫu CV cho experienced' && cbPage2 === 'Đơn giản') || (cbName === 'Mẫu CV cho experienced' && cbPage2 === 'Màu sắc') || (cbName === 'Mẫu CV cho experienced' && cbPage2 === 'Không ảnh')) {
    internHidden.classList.add('hidden')
    subjectHidden.classList.add('hidden')
    activeHidden.classList.add('hidden')
    fresherHidden.classList.add('hidden')
}

else if((cbName === 'Mẫu CV cho intern' && cbPage2 === 'Đơn giản') || (cbName === 'Mẫu CV cho intern' && cbPage2 === 'Màu sắc') || (cbName === 'Mẫu CV cho intern' && cbPage2 === 'Không ảnh')) {
    expHidden.classList.add('hidden')
    fresherHidden.classList.add('hidden')
}

else if((cbName === 'Mẫu CV cho fresher' && cbPage2 === 'Đơn giản') || (cbName === 'Mẫu CV cho fresher' && cbPage2 === 'Màu sắc') || (cbName === 'Mẫu CV cho fresher' && cbPage2 === 'Không ảnh')) {
    internHidden.classList.add('hidden')
    subjectHidden.classList.add('hidden')
    activeHidden.classList.add('hidden')
}

// preview content
let avatar = document.querySelector('[data-js="avatar-img"]')
let avatarInput = document.querySelector('#avatar-input')
let avatarPre = document.querySelector('.cv-avatar')

avatarInput.addEventListener('change', function(e) {
    let avatarChange = this.files[0]
    avatar.src = URL.createObjectURL(avatarChange)
    avatarPre.src = avatar.src
})

let nameInput = document.querySelector('.form__content-name')
let namePre = document.querySelector('[data-key="name"]')
nameInput.addEventListener('input', function(e) {
    namePre.textContent = e.target.value
})

let jobnameInput = document.querySelector('.form__content-jobname')
let jobnamePre = document.querySelector('[data-key="role"]')
jobnameInput.addEventListener('input', function(e) {
    jobnamePre.textContent = e.target.value
})

let emailInput = document.querySelector('.form__content-email')
let emailPre = document.querySelector('[data-key="email"]')
emailInput.addEventListener('input', function(e) {
    emailPre.textContent = e.target.value
})

let phoneInput = document.querySelector('.form__content-phone')
let phonePre = document.querySelector('[data-key="phone"]')
phoneInput.addEventListener('input', function(e) {
    phonePre.textContent = e.target.value
})

let placeInput = document.querySelector('.form__content-place')
let placePre = document.querySelector('[data-key="location"]')
placeInput.addEventListener('input', function(e) {
    placePre.textContent = e.target.value
})

let githubInput = document.querySelector('.form__content-github')
let githubPre = document.querySelector('[data-key="link"]')
githubInput.addEventListener('input', function(e) {
    githubPre.textContent = e.target.value
})

let summaryInput = document.querySelector('[name="summary-input"]')
let summaryPre = document.querySelector('[data-key="summary"]')
let summarySlot = document.querySelector('[data-slot="summary"]')
summaryInput.addEventListener('input', function(e) {
    if(!(e.target.value.trim() === '')) {
    summarySlot.classList.remove('hidden')
    summaryPre.textContent = e.target.value
  }
})

let internInput = document.querySelector('[name="intern-input"]')
let internPre = document.querySelector('[data-key="intern"]')
let internSlot = document.querySelector('[data-slot="intern"]')
internInput.addEventListener('input', function(e) {
    if(!(e.target.value.trim() === '')) {
    internSlot.classList.remove('hidden')
    internPre.textContent = e.target.value
  }
})

let fresherInput = document.querySelector('[name="fresher-input"]')
let fresherPre = document.querySelector('[data-key="fresher"]')
let fresherSlot = document.querySelector('[data-slot="fresher"]')
fresherInput.addEventListener('input', function(e) {
    if(!(e.target.value.trim() === '')) {
    fresherSlot.classList.remove('hidden')
    fresherPre.textContent = e.target.value
  }
})

let skillInput = document.querySelector('[name="skill-input"]')
let skillPre = document.querySelector('[data-key="skills"]')
let skillSlot = document.querySelector('[data-slot="skills"]')
skillInput.addEventListener('input', function(e) {
    if(!(e.target.value.trim() === '')) {
    skillSlot.classList.remove('hidden')
    skillPre.textContent = e.target.value
  }
})

let expCompanyInput = document.querySelector('[name="exp-company"]')
let expTimeInput = document.querySelector('[name="exp-time"]')
let expBulletInput = document.querySelector('[name="exp-bullet"]')
let expCompanyPre = document.querySelector('[data-key="expCompany"]')
let expTimePre = document.querySelector('[data-key="expTime"]')
let expBulletPre = document.querySelector('[data-key="expBullet"]')
let expSlot = document.querySelector('[data-slot="experience"]')
expCompanyInput.addEventListener('input', function(e) {
    if(!(e.target.value.trim() === '')) {
    expSlot.classList.remove('hidden')
    expCompanyPre.textContent = e.target.value
  }
})
expTimeInput.addEventListener('input', function(e) {
    if(!(e.target.value.trim() === '')) {
    expSlot.classList.remove('hidden')
    expTimePre.textContent = e.target.value
  }
})
expBulletInput.addEventListener('input', function(e) {
    if(!(e.target.value.trim() === '')) {
    expSlot.classList.remove('hidden')
    expBulletPre.textContent = e.target.value
  }
})

let pjNameInput = document.querySelector('[name="pj-name"]')
let pjLinkInput = document.querySelector('[name="pj-link"]')
let pjBulletInput = document.querySelector('[name="pj-bullet"]')
let pjNamePre = document.querySelector('[data-key="projectName"]')
let pjLinkPre = document.querySelector('[data-key="projectLink"]')
let pjBulletPre = document.querySelector('[data-key="projectBullet"]')
let pjSlot = document.querySelector('[data-slot="projects"]')
pjNameInput.addEventListener('input', function(e) {
    if(!(e.target.value.trim() === '')) {
    pjSlot.classList.remove('hidden')
    pjNamePre.textContent = e.target.value
  }
})
pjLinkInput.addEventListener('input', function(e) {
    if(!(e.target.value.trim() === '')) {
    pjSlot.classList.remove('hidden')
    pjLinkPre.textContent = e.target.value
  }
})
pjBulletInput.addEventListener('input', function(e) {
    if(!(e.target.value.trim() === '')) {
    pjSlot.classList.remove('hidden')
    pjBulletPre.textContent = e.target.value
  }
})

let eduSchoolInput = document.querySelector('[name="edu-school"]')
let eduTimeInput = document.querySelector('[name="edu-time"]')
let eduSchoolPre = document.querySelector('[data-key="eduSchool"]')
let eduTimePre = document.querySelector('[data-key="eduTime"]')
let eduSlot = document.querySelector('[data-slot="education"]')
eduSchoolInput.addEventListener('input', function(e) {
    if(!(e.target.value.trim() === '')) {
    eduSlot.classList.remove('hidden')
    eduSchoolPre.textContent = e.target.value
  }
})
eduTimeInput.addEventListener('input', function(e) {
    if(!(e.target.value.trim() === '')) {
    eduSlot.classList.remove('hidden')
    eduTimePre.textContent = e.target.value
  }
})

let subjectInput = document.querySelector('[name="subject-input"]')
let subjectPre = document.querySelector('[data-key="subject"]')
let subjectSlot = document.querySelector('[data-slot="subject"]')
subjectInput.addEventListener('input', function(e) {
    if(!(e.target.value.trim() === '')) {
    subjectSlot.classList.remove('hidden')
    subjectPre.textContent = e.target.value
  }
})

let activeInput = document.querySelector('[name="active-input"]')
let activePre = document.querySelector('[data-key="active"]')
let activeSlot = document.querySelector('[data-slot="active"]')
activeInput.addEventListener('input', function(e) {
    if(!(e.target.value.trim() === '')) {
    activeSlot.classList.remove('hidden')
    activePre.textContent = e.target.value
  }
})

let certInput = document.querySelector('[name="cert-input"]')
let certPre = document.querySelector('[data-key="certs"]')
let certSlot = document.querySelector('[data-slot="certs"]')
certInput.addEventListener('input', function(e) {
    if(!(e.target.value.trim() === '')) {
    certSlot.classList.remove('hidden')
    certPre.textContent = e.target.value
  }
})

let linksInput = document.querySelector('[name="link-input"]')
let linksPre = document.querySelector('[data-key="links"]')
var linksSlot  = document.querySelector('[data-slot="links"]')

linksInput.addEventListener('input', function (e) {
  if(!(e.target.value.trim() === '')) {
    linksSlot.classList.remove('hidden')
    linksPre.textContent = e.target.value
  }
})


// preview 
let downBtn = document.querySelector('.form__btn-down')
downBtn.addEventListener('click', function(e) {
    window.print()
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




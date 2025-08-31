const buttons = document.querySelectorAll('[data-tab]')
const panels  = document.querySelectorAll('[data-panel]')

function showTab(name){
  buttons.forEach(b => b.classList.toggle('btn-active', b.dataset.tab === name))
  panels.forEach(p => p.classList.toggle('btn-active', p.dataset.panel === name))
}

buttons.forEach(btn => {
  btn.addEventListener('click', () => showTab(btn.dataset.tab))
})



const currentTheme = localStorage.getItem('theme')

function getPreferTheme() {
  if (currentTheme) return currentTheme
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

let theme = getPreferTheme()

function setPreference() {
  localStorage.setItem('theme', theme)
  reflectPreference()
}

function reflectPreference() {
  document.firstElementChild.setAttribute('class', theme)
  document.querySelector('#theme-toggle').toggleAttribute('aria-label', theme)
  if (theme === 'dark') {
    document.querySelector('#btn-sun').removeAttribute('class', 'hidden')
    document.querySelector('#btn-moon').setAttribute('class', 'hidden')
  } else {
    document.querySelector('#btn-sun').setAttribute('class', 'hidden')
    document.querySelector('#btn-moon').removeAttribute('class', 'hidden')
  }
}

// set early so no page flashes / CSS is made aware
reflectPreference()

window.onload = function () {
  reflectPreference()
  document.querySelector('#theme-toggle').addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark'
    setPreference()
  })
}

// sync with system changes
window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', ({ matches: isDark }) => {
    theme = isDark ? 'dark' : 'light'
    setPreference()
  })

// Detect theme btn

const btnDarkMode = document.querySelector('.dark-mode-btn')

// Checking system theme

if (
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
) {
  btnDarkMode.classList.add('dark-mode-btn--active')
  document.body.classList.add('dark')
}

// Load choosen theme from localStorage

if (localStorage.getItem('darkMode') === 'dark') {
  btnDarkMode.classList.add('dark-mode-btn--active')
  document.body.classList.add('dark')
} else if (localStorage.getItem('darkMode') === 'light') {
  btnDarkMode.classList.remove('dark-mode-btn--active')
  document.body.classList.remove('dark')
}

// If system theme change

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', (event) => {
    const newColorTheme = event.matches ? 'dark' : 'light'

    if (newColorTheme === 'dark') {
      btnDarkMode.classList.add('dark-mode-btn--active')
      document.body.classList.add('dark')
      localStorage.setItem('darkMode', 'dark')
    } else {
      btnDarkMode.classList.remove('dark-mode-btn--active')
      document.body.classList.remove('dark')
      localStorage.setItem('darkMode', 'light')
    }
  })

// Theme btn function

btnDarkMode.onclick = function () {
  btnDarkMode.classList.toggle('dark-mode-btn--active')

  const isDark = document.body.classList.toggle('dark')

  if (isDark) {
    localStorage.setItem('darkMode', 'dark')
  } else {
    localStorage.setItem('darkMode', 'light')
  }
}

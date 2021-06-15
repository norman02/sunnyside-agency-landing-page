const burger = document.getElementById('burger')
const nav = document.getElementById('nav')

// nav.classList.add('active')

burger.addEventListener('click', e => {
    nav.classList.toggle('active')
})